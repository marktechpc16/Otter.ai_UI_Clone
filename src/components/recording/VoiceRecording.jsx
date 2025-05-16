import { useState, useRef } from "react";
import { GrMicrophone } from "react-icons/gr";

export default function AudioRecorder() {
  const [recordingStart, setRecordingStart] = useState(false);
  const [timer, setTimer] = useState(0);
  const mediaRecorderRef = useRef(null);
  const intervalRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();

      setRecordingStart(true);
      setTimer(0);

      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecordingStart(false);
    clearInterval(intervalRef.current);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div>
      {recordingStart ? (
        <button
          onClick={stopRecording}
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition"
        >
          Recording... {formatTime(timer)}
        </button>
      ) : (
        <div
          className="flex justify-center items-center gap-[6px] font-medium bg-slate-200 p-[8px]
          rounded-lg shadow-lg hover:bg-blue-200 cursor-pointer hover:scale-110 transition-transform 
          duration-300 group"
          onClick={startRecording}
        >
          <GrMicrophone className="group-hover:text-blue-600" />
          <p className="group-hover:text-blue-600">Record</p>
        </div>
      )}
    </div>
  );
}
