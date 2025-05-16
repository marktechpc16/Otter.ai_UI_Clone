import React from "react";
import { GoHome } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { TbApps } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { HiOutlineHashtag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setNavItem } from "../../redux/slice/navBarPopupSlice";
// import { GoPlus } from "react-icons/go";
 
const DetailedViewRightSideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[100%]  ">
      {/* Home  */}
      <div
        className="w-[90%] flex justify-start items-center mx-auto gap-3
        hover:bg-blue-200 p-[5px] rounded-lg font-medium pl-[10px] group"
        onClick={() => dispatch(setNavItem("Home"))}
      >
        <GoHome className="text-[20px] group-hover:text-blue-700" />
        <p className="group-hover:text-blue-700">Home</p>
      </div>

      {/* Search  */}
      <div
        className="w-[90%] flex justify-start items-center mx-auto gap-3
        hover:bg-blue-200 p-[5px] rounded-lg font-medium pl-[10px] group"
      >
        <IoMdSearch className="text-[21px] group-hover:text-blue-700" />
        <p className="group-hover:text-blue-700">Search</p>
      </div>

      {/* Message  */}
      <div
        className="w-[90%] flex justify-start items-center mx-auto gap-3
        hover:bg-blue-200 p-[5px] rounded-lg font-medium pl-[10px] group"
      >
        <FiMessageCircle className="text-[20px] group-hover:text-blue-700" />
        <p className="group-hover:text-blue-700">Messages</p>
      </div>

      {/* Apps  */}
      <div
        className="w-[90%] flex justify-start items-center mx-auto gap-3
        hover:bg-blue-200 p-[5px] rounded-lg font-medium pl-[10px] group"
      >
        <TbApps className="text-[20px] group-hover:text-blue-700" />
        <p className="group-hover:text-blue-700">Apps</p>
      </div>

      {/* Channels  */}
      <div
        className="w-[90%] flex justify-start items-center mx-auto gap-3
        hover:bg-blue-200 p-[5px] rounded-lg font-medium pl-[10px] group"
      >
        <FaChevronDown className="text-[12px] group-hover:text-blue-700" />
        <p className="group-hover:text-blue-700">Channels</p>
      </div>

      {/* Generals  */}
      <div className="w-[90%] flex justify-start items-center mx-auto gap-3 font-medium mt-3 mb-3">
        <HiOutlineHashtag className="text-[27px] text-slate-500 pl-[10px]" />
        <p className="text-slate-500 ">General</p>
      </div>

      {/* Folders  */}
      <div
        className="w-[90%] flex justify-start items-center mx-auto gap-3
        hover:bg-blue-200 p-[5px] rounded-lg font-medium pl-[10px] group"
      >
        <FaChevronDown className="text-[12px] group-hover:text-blue-700" />
        <p className="group-hover:text-blue-700">Folders</p>
      </div>
    </div>
  );
};

export default DetailedViewRightSideBar;
