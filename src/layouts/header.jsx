import "../App.css";
import studing from "../images/study.svg";

export const Header = () => {
  return (
    <div className="bg-slate-50 pt-16 pb-6 flex justify-center">
      <div className="my-auto pr-16 md:pr-40 lg:pr-72">
        <h1 className="header-title text-5xl lg:text-7xl text-bold text-emerald-600 mb-5">Study with Me</h1>
        <p className="text-lg">あなたの継続した学習をサポートします</p>
      </div>
      <div className="">
        <img src={studing} alt="studing" className="w-40 md:w-64 " />
      </div>
    </div>
  );
};
