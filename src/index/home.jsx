import React, {useState} from "react";
import { Form } from "./form.jsx"
import Stopwatch from "./stopwatch"
import "../App.css";

const Home = () => {
    const [isStopWatch, setIsStopWatch] = useState(false);
    const [isStart, setStart] = useState(0);
    const [subject, setSubject] = useState("");
    const [task, setTask] = useState("");

    const handleStart = () => {
        setIsStopWatch(true);
        setStart(true);
    };

    return(
        <div>
            {isStopWatch ? (
                isStart ? (
                    <Stopwatch
                    subject={subject}
                    task={task}
                    setSubject={setSubject}
                    setTask={setTask}
                    setIsStopWatch={setIsStopWatch}
                    />
                ):(
                    <div>aaa</div>
                )
            ) : (
                <>
                <div>
                    <Form
                    handleStart={handleStart}
                    subject={subject}
                    task={task}
                    setSubject={setSubject}
                    setTask={setTask}
                    />
                </div>
                </>
            )}
        </div>
    );
};

export default Home;

