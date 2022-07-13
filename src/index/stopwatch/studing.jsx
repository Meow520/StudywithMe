import React from "react";
import "../../styles/App.css";

const Studing = ({ studyInfo, toggleList }) => {
  const handleTodoClick = () => {
    toggleList(studyInfo.id);
  }

    return (
      <div className="flex justify-center h-16 my-5">
        <div className="border rounded-lg border-r shadow-lg bg-white w-2/5 flex">
          <label className="px-3 my-auto">
            <input
              type="checkbox"
              // checked={studyInfo.completed}
              onChange={handleTodoClick}
            />
          </label>
          <div className="flex justify-center my-auto">
            <p className="text-xs mx-3 sm:text-lg sm:mx-3">
              subject: {studyInfo.subject}
            </p>
            <p className="text-xs mx-3 sm:text-lg sm:mx-3">
              task: {studyInfo.task}
            </p>
          </div>
        </div>
      </div>
    );
  };


export default Studing;
