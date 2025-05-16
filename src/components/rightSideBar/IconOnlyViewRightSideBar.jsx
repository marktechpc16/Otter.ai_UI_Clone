import React from "react";
import { GoHome } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { TbApps } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { HiOutlineHashtag } from "react-icons/hi";
import { IoFolderOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setNavItem } from "../../redux/slice/navBarPopupSlice";
import { toggleNotifactionOpup } from "../../redux/slice/notifactionPopupSlice";
import NotifactionBar from "../notifaction/NotifactionBar";

const IconOnlyViewRightSideBar = () => {
  const dispatch = useDispatch();
  const isNotifactionBarOpen = useSelector(
    (state) => state.notifactionPopup.isNotifactionBarOpen
  );
  return (
    <div className="w-[100%] flex flex-col justify-center items-center  ">
      {/* Home  */}
      <div
        className="flex justify-center items-center mx-auto 
          hover:bg-blue-200 p-[10px] rounded-full font-medium  group"
        onClick={() => dispatch(setNavItem("Home"))}
      >
        <GoHome className="text-[20px] group-hover:text-blue-700" />
      </div>

      {/* Notifaction  */}

      <div className="relative">
        <div
          className="flex justify-center items-center mx-auto 
          hover:bg-blue-200 p-[10px] rounded-full font-medium  group"
          onClick={() => {
            dispatch(toggleNotifactionOpup());
          }}
        >
          <IoNotificationsOutline className="text-[20px] group-hover:text-blue-700" />
        </div>
        <div className="absolute left-[55px] top-[6px] ">
          {isNotifactionBarOpen && <NotifactionBar />}
        </div>
      </div>

      {/* Search  */}
      <div
        className="flex justify-center items-center mx-auto 
          hover:bg-blue-200 p-[10px] rounded-full font-medium  group"
      >
        <IoMdSearch className="text-[21px] group-hover:text-blue-700" />
      </div>

      {/* Message  */}
      <div
        className="flex justify-center items-center mx-auto 
          hover:bg-blue-200 p-[10px] rounded-full font-medium  group"
      >
        <FiMessageCircle className="text-[20px] group-hover:text-blue-700" />
      </div>

      {/* Apps  */}
      <div
        className="flex justify-center items-center mx-auto 
          hover:bg-blue-200 p-[10px] rounded-full font-medium  group"
      >
        <TbApps className="text-[20px] group-hover:text-blue-700" />
      </div>

      {/* Has Tag  */}
      <div
        className="flex justify-center items-center mx-auto 
          hover:bg-blue-200 p-[10px] rounded-full font-medium  group"
      >
        <HiOutlineHashtag className="text-[20px]" />
      </div>

      {/* Folder  */}
      <div
        className="flex justify-center items-center mx-auto 
          hover:bg-blue-200 p-[10px] rounded-full font-medium  group"
      >
        <IoFolderOutline className="text-[17px] group-hover:text-blue-700" />
      </div>
    </div>
  );
};

export default IconOnlyViewRightSideBar;
