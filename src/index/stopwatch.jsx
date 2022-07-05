import { Result } from "./result";
import React, { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import "../styles/App.css";
import Lottie from "lottie-react";
import animationData from "../lottie/67928-studyly.json";

const Stopwatch = ({ subject, task, setSubject, setTask, setStart }) => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });
  const [isStop, setStop] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [sumTime, setSumTime] = useState(0);

  const handleEnd = () => {
    pause(true);
    setIsResult(true);
    setStop(true);
    // setSumTime(sumTime + minutes + 60 * hours);
  };

  return (
    <div>
      {isResult ? (
        isStop ? (
          <Result
            subject={subject}
            task={task}
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            setIsResult={setIsResult}
          />
        ) : (
          <div>aaa</div>
        )
      ) : (
        <div className="text-center">
          <div className="pt-6 text-3xl">
            <p className="pb-5">
              Subject : <span>{subject}</span>
            </p>
            <p>
              Task : <span>{task}</span>
            </p>
          </div>
          <div className="timer">
            <span className="timer">{hours}</span> h
            <span className="timer"> {minutes}</span> m
            <span className="timer"> {seconds}</span> s
          </div>
          <div className="text-3xl pb-10">
            <div className="w-64 mx-auto">
              <Lottie animationData={animationData} loop={true} />
            </div>
            <div>
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-400 px-16 py-4 text-white text-2xl rounded-lg"
                onClick={() =>
                  handleEnd(subject, task, hours, minutes, sumTime)
                }
                value="Submit"
                id="submit-bg"
              >
                Finish!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
