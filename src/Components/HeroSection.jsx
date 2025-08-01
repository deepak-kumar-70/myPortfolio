import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import SparkIcon from "../assets/SvgIcon/SpatrkIcon";
const HeroSection = () => {
  return (
    <div className="w-full h-screen inset-0 absolute flex justify-between flex-col p-6">
      <div>
        <Navbar />
      </div>
      <div className="flex justify-between items-center ">
        <div className="text-white">
          <div style={{ fontFamily: "CustomFont3" }} className="text-[11rem]">
            Creative
          </div>
          <div
            style={{ fontFamily: "CustomFont2" }}
            className=" text-9xl mt-[-80px]"
          >
            Developer.
          </div>
        </div>
        <div
          style={{ fontFamily: "CustomFont1" }}
          className="text-white max-w-[380px] text-[0.75rem] mr-4"
        >
          <p className="text-neutral-300  leading-relaxed">
            Hi! I'm Deepak Gupta a
            <strong className="text-neutral-100">
              {" "}
              Creative Web Developer
            </strong>
            <br />
            and <strong className="text-neutral-100">Web Designer</strong>.
          </p>

          <p className="mt-4 text-neutral-400 ">
            I'm a passionate full-stack developer focused on building
            responsive, high-performance websites with clean and maintainable
            code.
          </p>
        </div>
      </div>
      <div className="pb-4">
        <div className="relative ">
          <SparkIcon />
          <button className="bg-transparent border-2 top-8 left-9 absolute border-white px-8 py-2 rounded-4xl cursor-pointer">
            Resume
          </button>
        </div>

        <div className="mt-10 text-[14px] ml-[40px]">
          <span>Email : </span>
          <span className="text-neutral-500">Deepak7072dk@gmail.com</span>{" "}
        </div>
      </div>
      <div className="flex  flex-col items-center absolute bottom-6 right-6">
        <div className="w-[2px] h-[200px] bg-white"></div>
        <SparkIcon />
      </div>
    </div>
  );
};

export default HeroSection;
