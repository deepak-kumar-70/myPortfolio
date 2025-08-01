import React from "react";
import developerPic from "../assets/SvgIcon/developer-pic-1.png";

import Skelton from "../assets/Image/Skelton.png";
import "../App.css"; // Assuming CustomFont1 and CustomFont2 are defined here
import CustomShape from "../assets/SvgIcon/CustomShape";
import CircularText from "../assets/SvgIcon/CircularText.svg";
import PolygonGlassCard from "../assets/SvgIcon/PlygonCard";
import PolygonNoRightBorder from "../assets/SvgIcon/PolyCard";
const About = () => {
  const skills = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Redux",
    "Git",
    "GitHub",
    "REST APIs",
  ];

  return (
    <section className="h-screen  w-full  bg-black text-white relative">
      <h1
        style={{ fontFamily: "Orbitron" }}
        className="font-extrabold text-[5.4rem] left-32 absolute bg-gradient-to-r from-neutral-300 via-neutral-800 to-neutral-300 text-transparent bg-clip-text "
      >
        FULLSTACK DEVELOPER
      </h1>
      <div className="w-full h-full absolute  flex justify-center items-center">
        <div className="absolute z-0 w-[300px] h-[600px] rounded-full bg-neutral-500 blur-3xl opacity-50 animate-pulse"></div>

        <div className="z-10 relative">
          <img src={Skelton} alt="Skelton" className="w-3xl h-auto" />
        </div>
        <h1
          style={{ fontFamily: "TypeWriter" }}
          className="text-neutral-300 absolute z-20 text-5xl font-bold"
        >
          About Me
        </h1>
      </div>
      <div className="w-full h-screen flex  items-center justify-between relative ">
        <div className="mt-[200px]">
        <PolygonGlassCard/>
        </div>

        <div className="max-w-[34rem] h-screen mt-[-300px]  flex flex-col  justify-end text-[0.85rem] ml-[40px]">
        <PolygonNoRightBorder/>
          <p
            style={{ fontFamily: "CustomFont1" }}
            className="text-gray-300 mb-4 mt-[-100px]"
          >
            Hello! I'm <span className="font-semibold">Deepak</span>, a
            passionate full-stack developer who thrives on creating fast,
            functional, and elegant web applications. I specialize in
            technologies like <span className="font-semibold">React.js</span>,{" "}
            <span className="font-semibold">Node.js</span>, and{" "}
            <span className="font-semibold">MongoDB</span>.
          </p>
          <p
            style={{ fontFamily: "CustomFont1" }}
            className="text-gray-300 leading-relaxed"
          >
            I love turning complex problems into simple, beautiful solutions.
            I'm always exploring new tools and technologies to stay at the
            forefront of web development.
          </p>

          {/* Skills Section */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind",
              "Git",
              "Firebase",
            ].map((skill, idx) => (
              <button
                key={idx}
                className="px-4 py-2 text-white text-sm bg-white/10 backdrop-blur-sm rounded-md border border-white/20 shadow-sm hover:bg-white/20 transition"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
