import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

const icons = [
  <FaHtml5 className="text-orange-500" />,
  <FaCss3Alt className="text-blue-500" />,
  <FaJs className="text-yellow-400" />,
  <FaReact className="text-cyan-400" />,
  <FaNodeJs className="text-green-500" />,
  <FaGitAlt className="text-red-500" />,
  <FaGithub className="text-white" />,
  <FaPython className="text-yellow-300" />,
];

const SkillScroll = () => {
  const controls = useAnimation();
  const containerRef = useRef();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: "-50%", 
          transition: { duration: 10, ease: "linear" },
        });
        controls.set({ x: "0%" }); 
      }
    };
    loop();
  }, [controls]);

  return (
    <div className="overflow-hidden w-full bg-black py-6">
      <motion.div
        className="flex gap-10 text-5xl whitespace-nowrap items-center w-max"
        animate={controls}
        ref={containerRef}
      >
        {[...icons, ...icons].map((Icon, i) => (
          <div key={i} className="hover:scale-110 transition-transform duration-300">
            {Icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillScroll;
