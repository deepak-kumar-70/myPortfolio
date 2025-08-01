import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";
import robo from "../assets/Image/robo.png";

const ParallaxText = ({ children, baseVelocity }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5]);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, -25, v)}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap  mt-4">
      <motion.div
        className="flex text-[2rem] md:text-[3rem] font-extrabold uppercase tracking-tight text-white"
        style={{ x }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="mx-6 bg-gradient-to-r from-neutral-300 via-neutral-500 to-neutral-300 text-transparent bg-clip-text font-[Plaster]"
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      id: "01.",
      title: "E-commerce Platform",
      description:
        "A robust full-stack e-commerce solution with secure payments.",
      liveLink: "#",
      githubLink: "#",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: "02.",
      title: "Portfolio Website",
      description:
        "My personal portfolio showcasing development skills and projects.",
      liveLink: "#",
      githubLink: "#",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
    },
    {
      id: "03.",
      title: "Task Management App",
      description:
        "An intuitive app for organizing daily tasks with drag-and-drop.",
      liveLink: "#",
      githubLink: "#",
      technologies: ["Vue.js", "Firebase", "TypeScript"],
    },
    {
      id: "04.",
      title: "AI Chatbot Interface",
      description: "Interactive UI for a conversational AI assistant.",
      liveLink: "#",
      githubLink: "#",
      technologies: ["React", "Python", "Flask", "OpenAI API"],
    },
  ];

  return (
    <div className="w-full min-h-screen text-white relative">
      <h1
        style={{ fontFamily: "Orbitron" }}
        className="font-extrabold text-[5.4rem] bg-gradient-to-r from-neutral-800 via-neutral-400 to-neutral-300 text-transparent bg-clip-text"
      >
        Personal Work
      </h1>

      <div className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 h-screen w-[36%]">
        <img src={robo} className="w-full h-full object-cover" />
      </div>

      <div className="w-full z-0 absolute transform left-0 right-0 top-1/2 -translate-y-1/2">
        <div className="h-[1px] w-full bg-gradient-to-r from-neutral-800 via-neutral-400 to-neutral-300"></div>
        <div className="h-[2px] mt-1 w-full bg-gradient-to-r from-neutral-800 via-neutral-400 to-neutral-300"></div>
        <div className="h-[150px] mt-1 w-full bg-gradient-to-r from-neutral-800 via-neutral-400 to-neutral-300"></div>
      </div>

      <div className="w-full min-h-[81vh] flex flex-col justify-between">
        <div>
          <ParallaxText baseVelocity={4}>
            BUILDING IDEAS INTO IMPACTFUL EXPERIENCES •
          </ParallaxText>
          <div className="-mt-8">
            <ParallaxText baseVelocity={-4}>
              PIXEL PERFECT CRAFT • NEXT-GEN TECH SOLUTIONS •
            </ParallaxText>
          </div>
        </div>

        <div className=" py-3 flex gap-3 flex-wrap ">
          {projectsData.map((item) => (
            <div
              key={item.id}
              style={{
                clipPath:
                  "polygon(0% 0%, 86% 0%, 100% 17.25%, 100% 100%, 0% 100%)",
              }}
              className="w-[15rem] p-[1px] aspect-square relative bg-neutral-500 flex justify-center items-center transition hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
            >
              <div
                style={{
                  clipPath:
                    "polygon(0% 0%, 86% 0%, 100% 17.25%, 100% 100%, 0% 100%)",
                }}
                className="w-full h-full bg-neutral-900 p-4 flex flex-col"
              >
                <div>
                  <p
                    style={{ fontFamily: "Orbitron" }}
                    className="text-5xl text-white mb-2 border-b-2 border-b-neutral-400 pb-1"
                  >
                    {item.id}
                  </p>
                  <h3
                    style={{ fontFamily: "Orbitron" }}
                    className="text-sm text-cyan-400"
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-300 mt-1">
                  {item.description}
                </p>
                {item.technologies && (
                  <div className="flex flex-wrap gap-1 mb-3 mt-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[0.6rem] px-2 py-0.5 rounded-sm bg-neutral-800 text-neutral-500 border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-xs mt-2 text-neutral-400 group-hover:text-white transition duration-300">
                  View in detail to get some awesome experience →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
