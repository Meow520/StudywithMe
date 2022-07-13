import React from "react";
import Menu from "./menu";
import "../styles/App.css";

export const Navbar = () => {
  return (
    <div className=" py-0 m-0 lg:h-20 h-16">
      <Menu
        width={`30%`}
        pageWrapId={"page-wrap"}
        onClose={"handleOnClose"}
        isOpen={false}
      />
      <main id="page-wrap"></main>
    </div>
  );
};
