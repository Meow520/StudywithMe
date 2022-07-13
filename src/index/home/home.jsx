import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./form.jsx";
import Stopwatch from "../stopwatch/stopwatch";
import "../../styles/App.css";

const Home = () => {
  const [isStopWatch, setIsStopWatch] = useState(false);
  const [isStart, setIsStart] = useState(0);
  const [studyList, setStudyList] = useState([]);

  const [text, setText] = useState({ subject: "", task: "" });

  const handleSubject = (a) => {
    setText({ ...text, subject: a.target.value });
  };

  const handleTask = (b) => {
    setText({ ...text, task: b.target.value });
  };

  const handleStart = () => {
    setIsStopWatch(true);
    setIsStart(true);
  };

  const handleClear = () => {
    setStudyList([]);
  };

  const handleSet = () => {
    setStudyList((prevStudyList) => {
      return [
        ...prevStudyList,
        {
          id: uuidv4(),
          subject: text.subject,
          task: text.task,
          hours: 0,
          minutes: 0,
          completed: false,
        },
      ];
    });
    setText({ subject: "", task: "" });
  };

  return (
    <div className="bg-slate-50 py-10">
      {isStopWatch ? (
        isStart ? (
          <Stopwatch
            studyList={studyList}
            setIsStopWatch={setIsStopWatch}
            setStudyList={setStudyList}
          />
        ) : (
          <div>aaa</div>
        )
      ) : (
        <>
          <div>
            <Form
              handleStart={handleStart}
              studyList={studyList}
              setStudyList={setStudyList}
              handleSet={handleSet}
              handleClear={handleClear}
              handleSubject={handleSubject}
              handleTask={handleTask}
              text={text}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
