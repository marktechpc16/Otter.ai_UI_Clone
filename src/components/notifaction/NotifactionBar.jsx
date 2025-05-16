import React, { useState } from "react";
import Unread from "./Unread";
import Inbox from "./Inbox";

const NotifactionBar = () => {
  const [inBox, setInBox] = useState(true);
  return (
    <div className=" w-[400px] h-[450px] rounded-lg border-[1px] border-slate-200 shadow-md bg-white ">
      {/* Hader Part of Notifaction Bar  */}
      <div className="w-[100%] border-b-[1px] border-slate-300 p-[5px]">
        <div className=" w-[90%] mx-auto flex justify-between items-center p-[5px] ">
          <h1 className="text-lg font-medium">Notifactions</h1>
          <div
            className="p-[10px] bg-blue-500 rounded-lg text-sm font-medium
          text-white hover:scale-110 transition-transform duration-500 shadow-xl"
          >
            Mark all as read
          </div>
        </div>
      </div>
      {/* Button Sections  */}
      <div className="w-[100%] border-b-[1px]">
        <div
          className="w-[90%] mx-auto flex justify-start items-center
          gap-[15px] p-[10px]"
        >
          <div
            className={`${inBox && "border-b-[3px] border-blue-500 "}
            text-sm font-medium text-blue-600`}
            onClick={() => {
              setInBox(true);
            }}
          >
            Inbox
          </div>

          <div
            className={`${!inBox && "border-b-[3px] border-blue-500 "}
            text-sm font-medium text-blue-600`}
            onClick={() => {
              setInBox(false);
            }}
          >
            Unread
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[70%]">{inBox ? <Inbox /> : <Unread />}</div>
    </div>
  );
};

export default NotifactionBar;
