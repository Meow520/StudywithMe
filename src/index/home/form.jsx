import "../../styles/App.css";
import React, { useState } from "react";
import StudyList from "./studylist";

export const Form = ({
  handleStart,
  subject,
  task,
  studyList,
  handleSet,
  handleClear,
  handleSubject,
  handleTask,
  text,
}) => {
  const [subjectError, setSubjectError] = useState();
  const [taskError, setTaskError] = useState();

  const handleSubjectBlur = (a) => {
    const subject = a.target.value;

    if (!subject) {
      setSubjectError("required");
    } else {
      setSubjectError();
    }
  };

  const handleTaskBlur = (b) => {
    const task = b.target.value;

    if (!task) {
      setTaskError("required");
    } else {
      setTaskError();
    }
  };

  return (
    <div className="w-3/4 mx-auto rounded-2xl max-w-3xl border-2 bg-white">
      <div className="text-center shadow-cyan-100 p-10">
        <p className="font-bold text-4xl">Let's Get Studing!</p>
      </div>

      <div className="text-center">
        {/* get subject */}
        <div className="py-5">
          <div className="bg-emerald-200 text-emerald-800 p-3 text-2xl ">
            Subject
          </div>
          <input
            type="text"
            placeholder="subject name"
            value={text.subject}
            className="my-4 h-12 text-2xl border rounded-lg w-3/4"
            onChange={handleSubject}
            onBlur={handleSubjectBlur}
          />
          {subjectError && <p className="text-red-600">{subjectError}</p>}
        </div>

        {/* get task */}
        <div className="py-5">
          <div className=" bg-emerald-200 text-emerald-800 p-3 text-2xl">
            Task
          </div>
          <input
            type="text"
            placeholder="task name"
            value={text.task}
            className="my-4 h-12 text-2xl border rounded-lg w-3/4"
            onChange={handleTask}
            onBlur={handleTaskBlur}
          />
          {taskError && <p className="text-red-600">{taskError}</p>}
        </div>
        {/* set & clear button */}
        <div className="md:flex md:justify-center">
          <div className="px-3">
            <button
              type="submit"
              onClick={() => {
                handleSet({ subject, task });
              }}
              className="bg-emerald-600 hover:bg-emerald-400 px-16 py-4 text-emerald-50 text-2xl rounded-lg my-4 md:my-0"
              value="Submit"
              disabled={subjectError || taskError}
            >
              Set
            </button>
          </div>
          <div className="px-3">
            <button
              type="submit"
              onClick={handleClear}
              className="bg-emerald-600 hover:bg-emerald-400 px-16 py-4 text-emerald-50 text-2xl rounded-lg"
              value="Submit"
            >
              Clear
            </button>
          </div>
        </div>
        {/* tasks */}
        <StudyList studyList={studyList} />
        {/* submit button */}
        <div className="py-4">
          <button
            type="submit"
            onClick={() => {
              handleStart(studyList);
            }}
            className="bg-emerald-600 hover:bg-emerald-400 px-16 py-4 text-emerald-50 text-2xl rounded-lg"
            value="Submit"
            disabled={!studyList}
          >
            Start!
          </button>
        </div>
      </div>
    </div>
  );
};
