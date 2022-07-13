import React from "react";
import StudyCompleted from "./studycompleted";
import "../../styles/App.css";

const StudyCompletedList = ({ studyList }) => {
  const completedList = studyList.filter((study) => study.completed)
  return completedList.map((study) => <StudyCompleted studyInfo={study} key={study.id} />);
};

export default StudyCompletedList;