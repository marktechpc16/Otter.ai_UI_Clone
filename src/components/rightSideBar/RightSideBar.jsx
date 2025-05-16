import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoGiftOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import DetailedViewRightSideBar from "./DetailedViewRightSideBar";
import IconOnlyViewRightSideBar from "./IconOnlyViewRightSideBar";
import {
  closeProfilePopupBar,
  toggleProfilePopupBar,
} from "../../redux/slice/profulePopupSlice";
import UserProfile from "../profile/UserProfile";

const RightSideBar = () => {
  const isRsideBarOpen = useSelector((state) => state.rsideBar.isOpen);
  const isProfilePopupBarOpen = useSelector(
    (state) => state.profilePopup.isProfilePopupBarOpen
  );
  const dispatch = useDispatch();
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        dispatch(closeProfilePopupBar());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className="w-[100%] " ref={popupRef}>
      <div className="flex justify-center items-center pt-[10px] w-[100%]">
        {/* user Profile  */}
        {isRsideBarOpen ? (
          // it Displays in full Detailed View
          <div
            className="border-[2px] border-slate-400 rounded-lg w-[90%]
            flex flex-col justify-center items-center shadow-lg "
          >
            <div
              className="w-[100%] border-b-[1px] border-slate-400 p-[2px] hover:bg-slate-300
                rounded-t-lg relative z-0"
              onClick={() => {
                dispatch(toggleProfilePopupBar());
              }}
            >
              <div className="w-[90%] gap-2 flex justify-start items-center p-[2px]  group pl-[6px]">
                <div
                  className="bg-green-800 w-[30px] h-[30px]
                flex justify-center items-center text-white rounded-full
                shadow-lg"
                >
                  A
                </div>
                <div className=" w-[80%] flex justify-between items-center">
                  <div className="flex flex-col justify-center items-start">
                    <p className="font-medium">Aayush Patidar</p>
                    <p className="text-sm text-slate-500 font-medium">{`arjeetpatidar@gmai...`}</p>
                  </div>
                  <div className="transition-transform duration-300 group-hover:scale-125">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-[180%]">
                {isProfilePopupBarOpen && <UserProfile />}
              </div>
            </div>

            <div
              className="w-[100%] rounded-b-lg flex justify-start p-[6px] items-center gap-2 pl-[10px]
              hover:bg-blue-200 group"
            >
              <IoGiftOutline
                className="text-[20px] transition-transform duration-300  group-hover:scale-110
              group-hover:text-blue-700"
              />
              <p
                className="text-[14px] font-medium transition-transform duration-300 group-hover:scale-105 
                group-hover:text-blue-700"
              >
                Get Pro For Free
              </p>
            </div>
          </div>
        ) : (
          // It show in Icon Only View
          <div className="relative" ref={popupRef}>
            <div
              className="bg-green-800 w-[25px] h-[25px]
              flex justify-center items-center text-white rounded-full
              shadow-lg"
              onClick={() => dispatch(toggleProfilePopupBar())}
            >
              A
            </div>
            <div className="absolute left-[190%]">
              {isProfilePopupBarOpen && <UserProfile />}
            </div>
          </div>
        )}
      </div>

      {/* Main Part  */}
      <div
        className="w-[100%] flex justify-center items-center
        mt-[5px]"
        ref={popupRef}
      >
        {isRsideBarOpen ? (
          <DetailedViewRightSideBar />
        ) : (
          <IconOnlyViewRightSideBar />
        )}
      </div>

      {/* Footer Section  */}
      {isRsideBarOpen && (
        <div
          className="w-[100%] relative border-t-[1px] border-slate-500
           mt-[113px] flex justify-center items-center"
        >
          <div className="flex flex-col justify-center gap-2 items-start w-[90%]  p-[10px] ">
            <div className="font-medium">Basic (Free)</div>
            <div className="w-[100%] h-[3px] bg-slate-400 mx-auto"></div>
            <p className="text-wrap font-medium text-slate-500 text-sm">
              1 of 300 monthly minutes used. Minutes reset in 20 days
            </p>
            <div>
              <button
                className="border-[2px] border-blue-500 w-[120px] h-[40px] flex 
               justify-center items-center rounded-lg text-blue-500 font-medium
               bg-blue-50 hover:bg-blue-700 hover:text-white"
              >
                Get Pro
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideBar;
