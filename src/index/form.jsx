import "../App.css";
import React from "react";

export const Form = ({ handleStart, subject, task, setSubject, setTask }) => {
  return (
    <div className="w-3/4 mx-auto rounded-2xl max-w-3xl border-2 my-6">
      <div className="text-center shadow-cyan-100 p-10">
        <p className="font-bold text-4xl">Let's Get Study!</p>
      </div>

      <div className="text-center">
        {/* 科目取得 */}
        <div className="py-5">
          <div className="bg-cyan-500 p-3 text-2xl">科目</div>
          <input
            type="text"
            placeholder="科目名"
            value={subject}
            className="my-4 h-12 text-2xl border rounded-lg "
            onChange={(a) => {
              setSubject(a.target.value);
            }}
            required
          />
        </div>
        {/* タスク取得 */}
        <div className="py-5">
          <div className="bg-cyan-500 p-3 text-2xl">タスク</div>
          <input
            type="text"
            placeholder="タスク名"
            value={task}
            className="my-4 h-12 text-2xl border rounded-lg"
            onChange={(b) => {
              setTask(b.target.value);
            }}
            required
          />
        </div>
        {/* submit button */}
        <div className="py-4">
          <button
            type="submit"
            onClick={() => {
              handleStart(subject, task);
            }}
            className="bg-cyan-600 px-16 py-4 text-white text-2xl rounded-lg"
            value="Submit"
            id="submit-bg"
          >
            Start!
          </button>
        </div>
      </div>
    </div>
  );
};
