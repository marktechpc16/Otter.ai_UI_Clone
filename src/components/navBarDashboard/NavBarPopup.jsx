import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  //   closeNavPopup,
  setNavItem,
  //   toggleNavPopup,
} from "../../redux/slice/navBarPopupSlice";

const NavBarPopup = () => {
  const navPopupValue = useSelector((state) => state.navPopup.setPopupValue);
  const isPopupOpen = useSelector((state) => state.navPopup.isNavPopupOpen);
  const dispatch = useDispatch();
  console.log(navPopupValue);

  const naveElement = [
    "Home",
    "My Conversation",
    "All Conversation",
    "Shared with Me",
    "Trash",
  ];

  //   if (!isPopupOpen) return false;

  console.log("Popup Open:", isPopupOpen); // debug
  console.log("Selected Item:", navPopupValue); // debug

  return (
    <div
      className="w-[220px] shadow-lg rounded-lg  border-[1px] border-slate-300 p-[6px]
        flex justify-center items-center flex-col gap-[3px] bg-white"
    >
      {naveElement.map((element, id) => (
        <div
          key={id}
          className="w-[97%] mx-auto p-[4px] hover:bg-blue-100 rounded-lg
           flex justify-between items-center bg-slate-100 "
          onClick={() => {
            dispatch(setNavItem(element));
          }}
        >
          <div
            className="w-[90%] flex justify-between items-center mx-auto hover:scale-105
               transition-transform duration-500 hover:shadow-sm group"
          >
            <p className="text-[14px] font-medium text-slate-700 group-hover:text-blue-600 ">
              {element}
            </p>
            {navPopupValue === element && (
              <IoIosCheckmark className="text-[22px] group-hover:text-blue-600" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBarPopup;
