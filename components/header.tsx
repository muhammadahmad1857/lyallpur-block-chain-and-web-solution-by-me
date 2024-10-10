import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import InstaIcon from "./instaIcon";

const Header = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      className="pb-20 img-container w-screen "
      
    >
      <header className="flex   justify-center text-center pt-40   items-center">
        <div className="flex flex-col gap-5">
          <h1 className="sm:text-5xl text-3xl font-bold  ">{title}</h1>
          <p className="text-lg text-main-TEXT">{desc}</p>
          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center text-center justify-center relative overflow-hidden rounded-full bg-gray-400 shadow-md shadow-gray-200 group transition-all duration-300">
              <FaFacebookF className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:[rotateX:180deg] group-hover:fill-white" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
            <InstaIcon />
            <button className="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-gray-400 shadow-md shadow-gray-200 group transition-all duration-300">
              <FaLinkedinIn className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" />

              <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2"></div>
      </header>
    </div>
  );
};

export default Header;
