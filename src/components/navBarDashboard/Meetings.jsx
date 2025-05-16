import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const Meetings = () => {
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[4px]">
          <p className="text-md font-medium">Record a live meeting</p>
          <p className="text-sm font-medium text-slate-600">
            Works with Zoom, Google Meet
          </p>
        </div>
        <div
          className="w-[100%] border-[1px] border-slate-500 rounded-lg p-[19px] flex justify-start items-center
          h-[50px] gap-[20px]"
        >
          <IoVideocamOutline className="text-[25px]" />
          <input
            type="url"
            id="meetingUrl"
            placeholder="Paste meeting URL to add Otter"
            className="border-none focus:outline-none"
          />
        </div>
      </div>

      <div className="w-[100%] flex flex-col gap-5">
        <div>
          <p className="text-md font-medium">Record scheduled meetings</p>
        </div>
        <div className="w-[100%] border-[1px] p-[15px] border-slate-500 rounded-lg">
          <input
            type="url"
            id="schedulMeeting"
            className="border-none focus:outline-none"
            placeholder="Record meeting"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[10px]">
        <p className="text-md font-medium">
          You can connect to additional calendars.
        </p>
        <div className="flex gap-[40px]">
          <button
            className="flex justify-center items-center gap-[9px] shadow-md
            bg-slate-100 p-[10px] border-[1px] border-slate-500 rounded-lg"
          >
            <FcGoogle className="text-xl" />
            <p className="text-lg font-medium">Google</p>
          </button>
          <button
            className="bg-slate-100 p-[10px] border-[1px] border-slate-500
            rounded-lg shadow-md"
          >
            <p className="text-lg font-medium">Outlook</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
