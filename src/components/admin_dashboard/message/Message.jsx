import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import ListMessage from "./ListMessage";
import { v4 as uuid } from "uuid";

function Message() {
  const { setIsOpen, currentUser, room, userB } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const senderUser = {
    name: currentUser.displayName,
    _id: currentUser.uid,
    avatar: currentUser.photoURL,
  };

  //To get the room id
  //Check if already have a room
  //If already have a room then use the room id if not then generate a random id
  const roomId = room.id;

  useEffect(() => {
    const roomRef = doc(db, "rooms", roomId);
    (async () => {
      //add the current user to the reader Reaciept
      if (!room.readReceipt.includes(currentUser.email)) {
        await updateDoc(roomRef, {
          readReceipt: arrayUnion(currentUser.email),
        });
      }
    })();
  }, [currentUser.email, room, room.readReceipt, roomId]);

  //Use to display the new message to the user
  //Use spreed in messages because of empty declaration
  const appendMessages = useCallback((messages) => {
    setMessages((previousMessages) => [...previousMessages, ...messages]);
  }, []);

  //Use to check if there is a changes in our messages and update it
  //If there is a  new message add in our database
  //Get that message and display it to the user
  useEffect(() => {
    const roomMessagesRef = collection(db, "rooms", roomId, "messages");
    //Use to listen to the database and get the new message
    const unsubscribe = onSnapshot(roomMessagesRef, (querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === "added")
        .map(({ doc }) => {
          const message = doc.data();
          return {
            ...message,
            createdAt: !message.createdAt
              ? Timestamp.now()
              : message.createdAt.toDate(),
          };
        })
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      //Call the function that displays the message
      appendMessages(messagesFirestore);
    });
    return () => unsubscribe();
  }, [appendMessages, roomId]);

  useEffect(() => {
    // scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    if (messages.length !== 0) {
      //To add the last message
      const roomRef = doc(db, "rooms", roomId);
      const lastMessage = messages[messages.length - 1];
      (async () => {
        await updateDoc(roomRef, {
          lastMessage,
        });
      })();
    }
  }, [messages, roomId, currentUser.email, room?.readReceipt]);

  async function onSend() {
    const unique_id = uuid();
    const roomMessagesRef = collection(db, "rooms", roomId, "messages");
    //To delete the other user from readReceipt after sending message
    await addDoc(roomMessagesRef, {
      _id: unique_id,
      text: input,
      user: senderUser,
      createdAt: serverTimestamp(),
    });
    setInput("");
    const roomRef = doc(db, "rooms", roomId);
    const userB =
      room?.readReceipt[0] === currentUser.email
        ? room?.readReceipt[1]
        : room?.readReceipt[0];

    await updateDoc(roomRef, {
      readReceipt: arrayRemove(userB ? userB : " "),
    });
  }

  return (
    <div className="bg-white flex flex-col fixed bottom-1 right-0 lg:right-20 h-[90%] w-full lg:h-[400px] lg:w-[320px] justify-between">
      <div className="flex flex-col overflow-hidden">
        <div className="bg-[#87ab69] flex flex-row ml[-70]  p-[10px] justify-between">
          <div className="items-center flex justify-center gap-5 ">
            <img
              className="object-scale-down h-10 w-10"
              src={userB.photoURL}
              alt=""
            />
            <h1 className="text-18">{userB.displayName}</h1>
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="p-4 flex justify-end cursor-pointer"
          >
            <AiOutlineClose size={20} />
          </div>
        </div>
        <main className="flex flex-col overflow-auto">
          {messages &&
            messages.map((message) => (
              <ListMessage key={message._id} message={message} />
            ))}

          <span ref={bottomRef}></span>
        </main>
      </div>
      <form className="h-14 w-full max-w-[728px] flex bsolute bottom-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border border-solid border-gray-100 outline-none "
          type="text"
          placeholder="Message"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onSend();
          }}
          className="w-[20%] bg-[#87ab69]"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Message;
