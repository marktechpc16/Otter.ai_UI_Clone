import React, { useEffect, useRef } from "react";
import { RiFilter3Line } from "react-icons/ri";
import NavBarPopup from "./NavBarPopup";
import { useDispatch, useSelector } from "react-redux";
import {
  closeNavPopup,
  toggleNavPopup,
} from "../../redux/slice/navBarPopupSlice";
import { LuVideo } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";
import { togglePopup } from "../../redux/slice/openPopupsSlice";
import Meeting from "../meetingToRecord/Meeting";
import { toggleImportFilePopup } from "../../redux/slice/importFileSlice";
import Import from "../files/Import";
import AudioRecorder from "../recording/VoiceRecording";
import { toggleCalander } from "../../redux/slice/calanderSlice";
import Calander from "./CalendarButton";

const NavBar = () => {
  const dispatch = useDispatch();
  const isNavPopupOpen = useSelector((state) => state.navPopup.isNavPopupOpen);
  const navPopupElement = useSelector((state) => state.navPopup.setPopupValue);
  const isNotifactionBarOpen = useSelector(
    (state) => state.notifactionPopup.isNotifactionBarOpen
  );
  const isPopupOpen = useSelector((state) => state.popupsNormal.isPopupOpen);
  const isfileUploderOpen = useSelector(
    (state) => state.meetingFiles.isImportfilePopupOpen
  );
  const prevValueRef = useRef(navPopupElement);
  const isCalanderOpen = useSelector(
    (state) => state.calanderOpen.isCalanderOpen
  );

  useEffect(() => {
    if (prevValueRef.current !== navPopupElement) {
      dispatch(closeNavPopup());
      prevValueRef.current = navPopupElement;
    }
  }, [navPopupElement, dispatch]);

  return (
    <div className=" w-[95%] flex justify-between items-center ">
      {/* left First Button Randure Main components  */}
      <div
        className={`p-[10px] flex justify-center items-center gap[3px] cursor-pointer relative 
          ${isNotifactionBarOpen && "-z-10"}`}
        onClick={() => {
          dispatch(toggleNavPopup());
        }}
      >
        <div
          className="flex justify-center items-center p-[8px] shadow-md bg-slate-200
           rounded-xl gap-[10px] font-medium text-[15px] group hover:bg-blue-200
          transition-transform duration-500 hover:scale-105"
        >
          <RiFilter3Line className=" group-hover:text-blue-600 text-[19px]" />
          <p className=" group-hover:text-blue-600 text-slate-900">
            {navPopupElement}
          </p>
        </div>
        <div className="absolute top-[60px] left-[10px]">
          {isNavPopupOpen && <NavBarPopup />}
        </div>
      </div>

      {/* Right side Buttons  */}
      <div className="flex justify-center items-center gap-2">
        {/* Vidoe call Icon  */}
        <div className="relative ">
          <div
            className="p-[11px] flex justify-center items-center bg-gray-200
          rounded-lg shadow-md shadow-slate-100 cursor-pointer hover:scale-110
          transition-transform duration-300 hover:text-blue-600 hover:bg-blue-200"
            onClick={() => {
              dispatch(togglePopup());
            }}
          >
            <LuVideo className="text-[20px]" />
          </div>
          <div className="absolute w-[400px] top-[60px] right-[-160px] bg-white">
            {isPopupOpen && <Meeting />}
          </div>
        </div>

        {/* Import files  */}
        <div className="relative">
          <div
            className="group flex justify-center items-center gap-[6px] p-[8px] bg-slate-200
          rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer
          hover:bg-blue-200"
            onClick={() => dispatch(toggleImportFilePopup())}
          >
            <IoCloudUploadOutline className="group-hover:text-blue-600 text-[20px] font-bold" />
            <p className="font-medium text-md group-hover:text-blue-600">
              Import
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-[500px] left-[-280px] top-[20px]">
              {isfileUploderOpen && <Import />}
            </div>
          </div>
        </div>

        {/* Recording Button  */}
        <AudioRecorder />

        {/* Calendar and Right side bar  */}
        <div className="relative">
          <div
            className="flex justify-center items-center font-medium bg-slate-200 p-[12px]
           rounded-lg shadow-lg hover:bg-blue-200 cursor-pointer hover:scale-110 transition-transform 
           duration-300 group"
            onClick={() => dispatch(toggleCalander())}
          >
            <LuCalendar className="group-hover:text-blue-600" />
          </div>
          <div className="absolute right-0 top-[60px]">
            {isCalanderOpen && <Calander />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
