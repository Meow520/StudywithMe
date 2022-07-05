import React, { useState } from "react";
import "../styles/App.css";

const Study = ({ studyInfo }) => {
  return (
    <div className="flex justify-center my-5">
      <div className="border grid grid-cols-4 justify-center place-items-center justify-items-center rounded-lg border-r shadow-lg bg-white max-w-xl">
        <p className="text-xs mx-3 sm:text-lg col-span-2 sm:mx-3">
          {studyInfo.subject}
        </p>
        <p className="text-xs mx-3 sm:text-lg col-span-2 sm:mx-3">
          {studyInfo.task}
        </p>
        <p className="text-xs mx-3 sm:text-lg col-span-2 sm:mx-3">
          {studyInfo.time}
        </p>
      </div>
    </div>
  );
};

export default Study;
