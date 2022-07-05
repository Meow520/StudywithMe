import "../styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { StudyResult } from "./studyresult";

export const Result = ({
  setIsResult,
  setIsStopWatch,
  subject,
  task,
  minutes,
  hours,
}) => {

  return (
    <div className="text-center py-10">
      <h2 className="text-6xl">Well done!</h2>
      <div className="py-8 text-4xl">
        <h3 className="py-3">
          Subject : <span>{subject}</span>
        </h3>
        <h3 className="py-3">
          Task : <span>{task}</span>
        </h3>
        <h3 className="py-3">
          Time : <span>{hours}</span> hr <span>{minutes}</span> min
        </h3>
      </div>
      <div>
        {/* <h3>
          studing time : <span>{sumTime}</span>
        </h3> */}
        <div className="align-middle py-8">
          <a
            href="/"
            className="bg-emerald-600 hover:bg-emerald-400 px-16 py-4 text-emerald-50 text-2xl rounded-lg mx-3"
          >
            study other subject
          </a>
          <a
            href="/studyplanner"
            className="bg-emerald-600 hover:bg-emerald-400 px-16 py-4 text-emerald-50 text-2xl rounded-lg mx-3"
          >
            Study Planner
          </a>
        </div>
      </div>
    </div>
  );
};
