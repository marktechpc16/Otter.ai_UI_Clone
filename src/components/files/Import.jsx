import React from "react";
import { FaRegFileAudio } from "react-icons/fa";
import { FaRegFileVideo } from "react-icons/fa";

const Import = () => {
  return (
    <div
      className="w-[100%] h-[400px] shadow-md bg-slate-50 rounded-xl flex 
        justify-statt items-center flex-col p-[30px]"
    >
      <div className="text-lg font-medium m-[20px]">
        Transcript audio and video
      </div>
      <div
        className="w-[200px] h-[200px] flex flex-col justify-center items-center
        border-dashed border-slate-500 border-2 rounded-lg"
      >
        <p className="text-sm font-medium text-slate-500">Drag and Drop</p>
        <div className="relative text-[30px] text-slate-500 w-[50px] h-[40px] mt-[20px]">
          <FaRegFileAudio className="absolute rotate-12 left-[22px] top-[10px]" />
          <FaRegFileVideo className="absolute " />
        </div>
        <p className="text-sm font-medium text-slate-500">or</p>

        <div className="relative w-ma mt-[15px]">
          <input id="fileUpload" type="file" className="hidden" />
          <label
            htmlFor="fileUpload"
            className="bg-slate-500 text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-blue-500 cursor-pointer"
          >
            Browse Files
          </label>
        </div>
      </div>
    </div>
  );
};

export default Import;
