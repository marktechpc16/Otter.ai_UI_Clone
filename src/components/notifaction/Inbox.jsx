import React from "react";
import { FaRegBell } from "react-icons/fa6";

const Inbox = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-2 justify-center items-center">
      <div className="p-[35px] bg-slate-200 rounded-full">
        <FaRegBell className="text-3xl" />
      </div>
      <div className="flex justify-center items-center flex-col w-[90%]">
        <h2 className="text-lg font-bold text-blue-600">No notifications</h2>
        <p className="text-center text-wrap text-sm font-medium text-slate-500">
          Here's where you'll get notified when someone mentions you, assigns an
          action item to you, shares a conversation with you, and more.
        </p>
      </div>
    </div>
  );
};

export default Inbox;
