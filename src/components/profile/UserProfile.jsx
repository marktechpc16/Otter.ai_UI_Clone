import React from "react";
import { useSelector } from "react-redux";
import { SlEnergy } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

const UserProfile = () => {
  const isRightSideBarOpen = useSelector((state) => state.rsideBar.isOpen);
  return (
    <div
      className="w-[240px] shadow-lg rounded-lg bg-slate-50 border-[1px]
       border-slate-200 p-[5px]"
    >
      {!isRightSideBarOpen && (
        <div className=" w-[90%] mx-auto flex justify-center items-center mt-[5px] ">
          <div
            className="bg-green-800 w-[35px] h-[35px]
                        flex justify-center items-center text-white rounded-full
                        shadow-lg"
          >
            A
          </div>
          <div className=" w-[80%] flex justify-center items-center">
            <div className="flex flex-col justify-center items-start">
              <p className="font-medium">Aayush Patidar</p>
              <p className="text-sm text-slate-500 font-medium">{`arjeetpatidar@gmail..`}</p>
            </div>
          </div>
        </div>
      )}

      <div
        className={`w-[90%] mx-auto flex flex-col gap-[2px] 
        ${isRightSideBarOpen ? "mt-[0]" : "mt-[10px]"}`}
      >
        {/* Upgrade Plane  */}
        <div className="w-[100%] bg-slate-100 rounded-lg group hover:bg-blue-100 cursor-pointer">
          <div className="flex justify-start items-center w-[90%] mx-auto p-[5px] gap-[15px] group">
            <SlEnergy className="text-lg group-hover:text-blue-600" />
            <p
              className="text-sm font-medium text-slate-600 
               group-hover:text-blue-600"
            >
              Upgrade Plan
            </p>
          </div>
        </div>

        {/* Accounts settings  */}
        <div className="w-[100%] bg-slate-100 rounded-lg group hover:bg-blue-100 cursor-pointer">
          <div className="flex justify-start items-center w-[90%] mx-auto p-[5px] gap-[15px] group">
            <IoSettingsOutline className="text-lg group-hover:text-blue-600" />
            <p
              className="text-sm font-medium text-slate-600 
               group-hover:text-blue-600"
            >
              Account Settings
            </p>
          </div>
        </div>

        {/* Invite Team  */}
        <div className="w-[100%] bg-slate-100 rounded-lg group hover:bg-blue-100 cursor-pointer">
          <div className="flex justify-start items-center w-[90%] mx-auto p-[5px] gap-[15px]  group">
            <AiOutlineUserAdd className="text-lg group-hover:text-blue-600" />
            <p
              className="text-sm font-medium text-slate-600 
               group-hover:text-blue-600"
            >
              Invite Teammates
            </p>
          </div>
        </div>

        {/* Help Button  */}
        <div className="w-[100%] bg-slate-100 rounded-lg group hover:bg-blue-100 cursor-pointer">
          <div className="flex justify-start items-center w-[90%] mx-auto p-[5px] gap-[15px]  group">
            <IoIosHelpCircleOutline className="text-lg group-hover:text-blue-600" />
            <p
              className="text-sm font-medium text-slate-600 
               group-hover:text-blue-600"
            >
              Help Center
            </p>
          </div>
        </div>

        {/* Contact Support  */}
        <div className="w-[100%] bg-slate-100 rounded-lg group hover:bg-blue-100 cursor-pointer">
          <div className="flex justify-start items-center w-[90%] mx-auto p-[5px] gap-[15px]  group">
            <BiSupport className="text-lg group-hover:text-blue-600" />
            <p
              className="text-sm font-medium text-slate-600 
               group-hover:text-blue-600"
            >
              contact Support
            </p>
          </div>
        </div>

        {/* Logout  */}
        <div className="w-[100%] bg-slate-100 rounded-lg group hover:bg-blue-100 cursor-pointer">
          <div className="flex justify-start items-center w-[90%] mx-auto p-[5px] gap-[15px]  group">
            <MdLogout className="text-lg group-hover:text-blue-600" />
            <p
              className="text-sm font-medium text-slate-600 
               group-hover:text-blue-600"
            >
              Logout
            </p>
          </div>
        </div>
      </div>

      <div className={`h-[2px] bg-slate-400 w-[90%] mx-auto m-[15px]`}></div>
      {/* Profile Footer  */}
      <div
        className="w-[90%] bg-slate-100 rounded-lg mx-auto p-[10px] flex flex-col
          justify-center items-center gap-[5px] shadow-md"
      >
        <button
          className="bg-white p-[10px] w-[100%] rounded-lg text-blue-600
           text-sm font-medium border-blue-500 border-[2px] hover:bg-blue-100"
        >
          Manage Workspace
        </button>
        <button
          className="flex justify-center items-center w-[100%] gap-[6px] p-[10px] bg-blue-500
           hover:bg-blue-700 rounded-lg"
        >
          <AiOutlineUserAdd className="text-lg text-white" />
          <p className="text-sm font-medium text-white ">Invite Teammates</p>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
