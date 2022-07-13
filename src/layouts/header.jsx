import "../styles/App.css";
import studing from "../images/study.svg";
import { Navbar } from "./navber";

export const Header = () => {
  return (
    <div className="pt-16 pb-6 flex justify-center">
      <Navbar />
      <div className="my-auto pr-10 md:pr-40 lg:pr-72">
        <h1 className="header-title text-3xl md:text-5xl lg:text-7xl text-bold text-emerald-600 mb-5">
          Study with Me
        </h1>
        <p className="text-basemd:text-lg">
          あなたの継続した学習を
          <br className=" md:hidden" />
          サポートします
        </p>
      </div>
      <div className="">
        <img src={studing} alt="studing" className="w-40 md:w-64 " />
      </div>
    </div>
  );
};
