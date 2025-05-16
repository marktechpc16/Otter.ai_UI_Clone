import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import MyConversation from "./MyConversation";
import AllConversation from "./AllConversation";
import SharedWithMe from "./SharedWithMe";
import Trash from "./Trash";
import { MdOutlineArrowUpward } from "react-icons/md";

const MainContainer = () => {
  const componentName = useSelector((state) => state.navPopup.setPopupValue);

  let ComponentToRender;

  switch (componentName) {
    case "Home":
      ComponentToRender = <Home />;
      break;
    case "My Conversation":
      ComponentToRender = <MyConversation />;
      break;

    case "All Conversation":
      ComponentToRender = <AllConversation />;
      break;
    case "Shared with Me":
      ComponentToRender = <SharedWithMe />;
      break;
    case "Trash":
      ComponentToRender = <Trash />;
      break;
    default:
      ComponentToRender = <Home />;
      break;
  }

  return (
    <>
      {ComponentToRender}
      {/* Fixed bottom input bar */}
      <div className="fixed bottom-0 left-0 right-0 py-4 px-4">
        <div className={`transition-all duration-300 `}>
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Ask anything about your conversation"
                className="w-full text-lg h-12 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 flex justify-center items-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                <MdOutlineArrowUpward className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
