import React from "react";
import meetingDetails from "../../../meetingMyConversation";
import { MdOutlineArrowUpward } from "react-icons/md";
import "../../../src/index.css";
import { FiShare } from "react-icons/fi";
import { LiaFileExportSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const AllConversation = () => {
  return (
    <>
      <div
        className={` flex-1 min-h-screen scrollbar-thin scrollbar-none flex justify-center items-center p-5
          transition-all duration-300  bg-slate-100 rounded-xl shadow-lg overflow-x-hidden flex-col`}
      >
        {/* Main content area */}
        <div className="w-full h-screen  ">
          {/* Header  */}
          <div className="w-[100%] flex justify-start items-center">
            <div className="w-[60%] flex justify-center items-start gap-[20px] p-[10px]">
              <div className=" flex gap-[5px] cursor-pointer justify-center items-center group">
                <FaShare className="text-sm text-blue-600 group-hover:scale-110 transition-transform duration-300 " />
                <p className="text-sm text-blue-600 font-medium group-hover:scale-110 transition-transform duration-300">
                  Share
                </p>
              </div>

              <div className=" flex gap-[5px] cursor-pointer justify-center items-center group">
                <FiShare className="text-sm text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-blue-600 font-medium group-hover:scale-110 transition-transform duration-300">
                  Export
                </p>
              </div>
              <div className=" flex  gap-[5px] cursor-pointer justify-center items-center group">
                <LiaFileExportSolid className="text-sm text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-blue-600 font-medium group-hover:scale-110 transition-transform duration-300">
                  Move
                </p>
              </div>
              <div className=" flex gap-[5px] cursor-pointer justify-center items-center group">
                <MdDeleteOutline className="text-sm text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-blue-600 font-medium group-hover:scale-110 transition-transform duration-300">
                  Delete
                </p>
              </div>
            </div>
          </div>

          <div className=" pb-32 flex flex-col justify-center items-center ">
            <div className="flex flex-col gap-6 max-w-4xl">
              {meetingDetails.map((meeting) => (
                <div key={meeting.id} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg text-gray-500 font-medium">
                      {meeting.day}
                      <span className="text-gray-500 font-medium">,</span>
                    </h2>
                    <h2 className="text-lg text-gray-500 font-medium">
                      {meeting.date}
                    </h2>
                  </div>

                  <div
                    className="w-full border border-gray-200 bg-white rounded-lg
                  flex flex-col p-4 gap-2 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => {}}
                  >
                    <p className="text-lg font-medium text-gray-800">
                      {meeting.title}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-gray-500">
                        {meeting.time}
                      </p>
                      <div className="flex flex-wrap items-center">
                        {meeting.attendees.map((attend, id) => (
                          <span
                            key={id}
                            className="text-sm font-medium text-gray-600"
                          >
                            {id > 0 ? ", " : ""}
                            {attend}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mt-1">
                      {meeting.summary}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllConversation;
