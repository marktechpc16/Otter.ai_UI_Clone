import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMic } from "react-icons/lu";

const Meeting = () => {
  return (
    <div
      className="w-[100%] h-[80px] border-[1px] flex justify-center items-center
       bg-transparent backdrop-blur-[1px] rounded-lg "
    >
      <div
        className="w-[90%] border-[1px] border-slate-300 shadow-md
        rounded-lg flex justify-center items-center p-[10px]"
      >
        <div className="flex w-[100%] justify-center items-center gap-[20px]">
          <IoVideocamOutline className="text-xl text-slate-500" />
          <input
            type="text"
            placeholder="Paste meeting URL to record"
            className="appearance-none w-[75%] focus:outline-none
              focus:ring-0 focus:border-none"
          />
          <div
            className="bg-blue-600 p-[9px] rounded-full text-xl
            text-white hover:bg-blue-800 cursor-pointer"
          >
            <LuMic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
