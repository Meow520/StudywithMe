import React from "react";
import "../../styles/App.css";

const StudyCompleted = ({ studyInfo }) => {
  return (
    <div className="flex justify-center my-5 h-16">
      <div 
      className="border justify-center place-items-center justify-items-center 
      rounded-lg border-r shadow-lg bg-white w-96 flex">
        <p className="text-xs mx-3 sm:text-lg  sm:mx-3"> {studyInfo.subject}</p>
        <p className="text-xs mx-3 sm:text-lg sm:mx-3"> {studyInfo.task}</p>
        <p className="text-xs mx-3 sm:text-lg sm:mx-3">
          {studyInfo.hours} h {studyInfo.minutes} m
        </p>
      </div>
    </div>
  );
};

export default StudyCompleted;
