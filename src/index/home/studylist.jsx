import React from "react";
import Study from "./study";
import "../../styles/App.css";

const StudyList = ({ studyList }) => {
  return studyList.map((study) => <Study studyInfo={study} key={study.id} />);
};

export default StudyList;
