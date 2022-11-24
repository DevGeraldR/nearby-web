import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import ListMessages from "./ListMessages";

export default function Messages() {
  const [rooms, setRooms] = useState([]);
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  //Use to get all the Rooms, for messaging purpose.
  useEffect(() => {
    //To get all the Rooms in the database
    const chatsQuery = query(
      collection(db, "rooms"),
      where("participantsArray", "array-contains", currentUser.email)
    );
    const unsubscribe = onSnapshot(chatsQuery, (querySnapshot) => {
      const parsedChats = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //To filter the rooms, get only the rooms where the user has last message
      setRooms(parsedChats.filter((doc) => doc.lastMessage));
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser.email]);

  const getUserB = (users) => {
    const newUsers = { ...users };
    //Delete all the information that much the current user to get the other user.
    if (currentUser.email === newUsers[0].email) {
      delete newUsers[0];
    } else {
      delete newUsers[1];
    }
    const [id, participant] = Object.entries(newUsers).flat();
    return { id, ...participant };
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="mt-2 py-1 text-sm hover:bg-gray-100 cursor-pointer">
        {rooms.length > 0 ? (
          //Display the messages sort first before map to display it as sorted by
          <div>
            {rooms
              .sort((a, b) => b.lastMessage.createdAt - a.lastMessage.createdAt)
              .map((room) => (
                <ListMessages
                  description={room.lastMessage.text}
                  key={room.id}
                  room={room}
                  time={room.lastMessage.createdAt}
                  user={getUserB(room.participants)}
                />
              ))}
          </div>
        ) : (
          <div>
            <h1>No Message</h1>
          </div>
        )}
      </div>
    </div>
  );
}
