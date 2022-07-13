import Result from "../result/result";
import React, { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import "../../styles/App.css";
import Lottie from "lottie-react";
import animationData from "../../lottie/67928-studyly.json";
import StudingList from "./studinglist";

const Stopwatch = ({ studyList, setStudyList, setIsStopWatch }) => {
  const { seconds, minutes, hours, pause, reset, start } = useStopwatch({
    autoStart: true,
  });
  const [isStop, setIsStop] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [summin, setSummin] = useState(0);
  const [sumh, setSumh] = useState(0);

  const handleEnd = () => {
    pause(true);
    setIsResult(true);
    setIsStop(true);
  };

  const toggleList = (id) => {
    const newStudyList = [...studyList];
    const study = newStudyList.find((study) => study.id === id);
    study.completed = !studyList.completed;
    study.hours = hours;
    study.minutes = minutes;
    setStudyList(newStudyList);
    let new_summin = summin + minutes;
    let new_sumh = sumh + hours;

    if (new_summin >= 60) {
      new_summin = summin + minutes - 60;
      new_sumh = sumh + hours + 1;
    }

    setSummin(new_summin);
    setSumh(new_sumh);

    pause(true);
    reset(true);
    start(true);
  };

  return (
    <div>
      {isResult ? (
        isStop ? (
          <Result
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            sumh={sumh}
            summin={summin}
            studyList={studyList}
            setIsStopWatch={setIsStopWatch}
            setIsResult={setIsResult}
            setStudyList={setStudyList}
          />
        ) : (
          <div>aaa</div>
        )
      ) : (
        <div className="text-center">
          <div className="md:text-9xl text-7xl">
            <span className="">{hours}</span> h
            <span className=""> {minutes}</span> m
            <span className=""> {seconds}</span> s
          </div>

          <StudingList studyList={studyList} toggleList={toggleList} />

          <div className="text-3xl pb-10">
            <div className="w-64 md:w-80 mx-auto">
              <Lottie animationData={animationData} loop={true} />
            </div>
            <div className="pt-10">
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-400 px-16 py-4 text-white text-2xl rounded-lg"
                onClick={() => handleEnd(studyList, summin, sumh)}
                value="Submit"
                id="submit-bg"
              >
                Done!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
