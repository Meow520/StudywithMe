import React, { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import "../App.css";

const Stopwatch = ({ subject, task, setSubject, setTask, setStart }) => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });
  const [isStop, setStop] = useState(0);
  const [isResult, setIsResult] = useState(false);

  const handleEnd = () => {
    setIsResult(true);
    setStop(true);
  };

  return (
    <div className="text-center">
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Studing" : "Not Studing"}</p>
      <div>
        <button onClick={() => handleEnd(hours, minutes, seconds)}>
          Finish!
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
