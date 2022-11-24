import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

function ListMessages({ description, user, time, room }) {
  const [unread, setUnRead] = useState(true);
  const { currentUser, setIsOpen } = useAuth();

  //To chech if the user already read the message
  useEffect(() => {
    if (room.readReceipt.includes(currentUser.email)) {
      setUnRead(false);
    } else {
      setUnRead(true);
    }
  }, [room.readReceipt, currentUser.email, setUnRead]);

  return (
    <div
      className="flex flex-row justify-between"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <div className="flex flex-col justify-center">
        <img
          className="object-scale-down h-10 w-10"
          src={user.photoURL}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-1">
            <h1 className="text-bold">{user.displayName}</h1>
          </div>
        </div>
        {description && (
          <div className="flex flex-row mt-[-5]">
            <h1 className="text-bold">{description}</h1>
          </div>
        )}
      </div>
      {time && (
        <div className="flex justify-end">
          <h1 className="text-bold">
            {new Date(time.seconds * 1000).toLocaleDateString()}
          </h1>
        </div>
      )}
    </div>
  );
}

export default ListMessages;
