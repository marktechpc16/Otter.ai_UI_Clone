import React, { useState } from "react";
import ActionItems from "./ActionItems";
import Meetings from "./Meetings";
import CalendarComponent from "./Calendar";

const Calander = () => {
  const [activeTab, setActiveTab] = useState("Calendar");
  const tabs = ["Meetings", "Calendar", "Action Items"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Meetings":
        return <Meetings />;
      case "Calendar":
        return <CalendarComponent />;
      case "Action Items":
        return <ActionItems />;
      default:
        return <Meetings />;
    }
  };
  return (
    <div
      className="w-[450px] h-[550px] border-2 border-black bg-white
       rounded-xl flex flex-col gap-[20px] p-[25px] shadow-md"
    >
      {/* Header  */}
      <div className="flex justify-start gap-[15px]">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-md font-medium cursor-pointer hover:scale-110 transition-transform duration-300 pb-1
            ${
              activeTab === tab
                ? "border-b-[3px] border-blue-600 text-blue-600"
                : "text-gray-800"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Body Part  */}
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default Calander;
