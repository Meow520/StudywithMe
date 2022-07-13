import React from "react";
import Studing from "./studing";
import "../../styles/App.css";

const StudingList = ({ studyList, toggleList }) => {
  return studyList.map((study) => <Studing studyInfo={study} key={study.id} toggleList={toggleList}/>);
};

export default StudingList;
