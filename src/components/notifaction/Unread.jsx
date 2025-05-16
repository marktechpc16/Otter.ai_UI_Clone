import React from "react";
import { FaCheck } from "react-icons/fa6";

const Unread = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-2 justify-center items-center">
      <div className="p-[35px] bg-slate-200 rounded-full">
        <FaCheck className="text-3xl" />
      </div>
      <div className="flex justify-center items-center flex-col w-[90%]">
        <h2 className="text-lg font-bold text-blue-600">
          You're all caught up
        </h2>
        <p className="text-center text-wrap text-sm font-medium text-slate-500">
          Here's where you find unread notifications from the last 30 days.
        </p>
      </div>
    </div>
  );
};

export default Unread;
