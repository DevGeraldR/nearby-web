import React from "react";
import { useAuth } from "../../context/AuthContext";

function ListMessage({ message }) {
  const { currentUser } = useAuth();

  const messageClass =
    message.user.name === currentUser.displayName
      ? "bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-full m-2"
      : "bg-[#e5e5ea] text-black float-left rounded-full m-2";

  return (
    <div>
      <div>
        <div
          className={`"flex items-center shadow-xl ml-4 mr-4 mt-2 py-2 px-3 rounded-tl-full rounded-tr-full" ${messageClass}`}
        >
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ListMessage;
