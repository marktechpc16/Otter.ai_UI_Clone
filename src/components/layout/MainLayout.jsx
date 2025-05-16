import React, { useState } from "react";
import Image from "../../assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { IoNotificationsOutline } from "react-icons/io5";
import { toggleRsideBar } from "../../redux/slice/rightSideBarToggle";
import RightSideBar from "../rightSideBar/RightSideBar";
import { LuPanelRightOpen } from "react-icons/lu";
import NavBar from "../navBarDashboard/NavBar";
import MainContainer from "../mainContain/MainContainer";
import { toggleNotifactionOpup } from "../../redux/slice/notifactionPopupSlice";
import NotifactionBar from "../notifaction/NotifactionBar";

const MainLayout = ({ children }) => {
  const [showIcon, setShowIcon] = useState(false);
  const dispatch = useDispatch();
  const isRsideBarOpen = useSelector((state) => state.rsideBar.isOpen);
  const isNotifactionBarOpen = useSelector(
    (state) => state.notifactionPopup.isNotifactionBarOpen
  );

  console.log(children);
  return (
    <div className="w-[100vw] h-[100vh] flex ">
      {/* Right Side bar */}
      <div
        className={`shadow-2xl   h-[100%] 
            cursor-pointer flex flex-col justify-start items-center 
            ${isRsideBarOpen ? "w-65" : "w-16"}`}
        onMouseOver={() => {
          setShowIcon(true);
        }}
        onMouseLeave={() => setShowIcon(false)}
      >
        {/* Header Part */}
        <div className="w-[90%] pt-[5px] ">
          {isRsideBarOpen ? (
            <div className=" flex justify-between items-center ">
              <img src={Image} className="left-4" />

              <div className=" flex justify-center items-center gap-6">
                {showIcon && (
                  <LuPanelRightOpen
                    className={`text-2xl ${!isRsideBarOpen && "rotate-180"}`}
                    onClick={() => dispatch(toggleRsideBar())}
                  />
                )}
                <div className="relative">
                  <IoNotificationsOutline
                    className={`text-2xl font-bold hover:scale-110
                   transition-transform duration-300`}
                    onClick={() => {
                      dispatch(toggleNotifactionOpup());
                    }}
                  />

                  <div className="absolute left-[45px] top-0">
                    {isNotifactionBarOpen && <NotifactionBar />}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="w-[100%] flex justify-center items-center
                h-[50px]"
            >
              {showIcon ? (
                <LuPanelRightOpen
                  className={`text-2xl ${!isRsideBarOpen && "rotate-180"}`}
                  onClick={() => dispatch(toggleRsideBar())}
                />
              ) : (
                <img src={Image} />
              )}
            </div>
          )}
        </div>
        {/* Main Part  */}
        <div className="w-[100%]">
          <RightSideBar />
        </div>
      </div>

      {/* Main Contain  */}
      <div className="w-[100%] h-screen overflow-x-hidden ">
        <div className="w-[100%]">
          <div
            className="h-[65px] w-[100%] mx-auto 
          flex justify-center items-center shadow-lg"
          >
            <NavBar />
          </div>
        </div>
        <div className=" flex justify-center items-center text-3xl font-medium">
          <MainContainer />
        </div>
      </div>

      {/* Right Side Bar  */}
      {/* <div>
        <div className="">
          <TrueRightSideBar />
        </div>
      </div> */}
    </div>
  );
};

export default MainLayout;
