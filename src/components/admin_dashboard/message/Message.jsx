import React from "react";
import { useAuth } from "../../context/AuthContext";

function Message() {
  const { setIsOpen } = useAuth();
  return (
    <div className="bg-gray-400 flex flex-col fixed bottom-1 right-10 lg:right-20 h-[350px] w-[270px] ">
      <div className="m-2 overflow-hidden">
        <div className="flex flex-row justify-between">
          <div className="flex flex-1 gap-2">
            <div>photo</div>
            <div>name</div>
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="cursor-pointer"
          >
            x
          </div>
        </div>
        <div className="flex">
          <input type="text" placeholder="Input message" className="size-50%" />
          <button>send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
