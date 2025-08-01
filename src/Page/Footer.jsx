import {useState,useEffect} from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const techBuzzwords = [
  "Web 3.0", "React.js", "Creative Dev", "Innovation", "Futurism",
  "TailwindCSS", "Next.js", "Node.js", "AI/ML", "Blockchain",
  "UI/UX Design", "Animations", "Performance", "Scalability",
  "Cybersecurity", "Cloud Computing", "IoT", "Data Science",
  "DevOps", "GraphQL", "TypeScript", "Microservices", "API Design"
];

const Footer = () => {
   const [typedText, setTypedText] = useState("");
  const fullText = "Coding dreams into digital reality — one futuristic idea at a time.";
  
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, idx));
      idx++;
      if (idx > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);
  return (
    <footer className="relative w-full h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden flex flex-col justify-between items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-600 rounded-full mix-blend-lighten blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen blur-2xl opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute top-2/3 right-1/6 w-60 h-60 bg-pink-500 rounded-full mix-blend-screen blur-2xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Floating Buzzwords */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {techBuzzwords.map((word, i) => (
          <span
            key={i}
            className="absolute text-xs sm:text-sm text-gray-600 animate-float z-0"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
              whiteSpace: "nowrap",
            }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center flex-grow backdrop-blur-sm bg-white/5 rounded-xl shadow-inner shadow-cyan-500/10 px-6 py-8">
        {/* Your Name */}
        <h1
          className="text-[3rem] sm:text-[5rem] md:text-[7rem] font-[rejoice] tracking-tight leading-none mb-6 animate-pulse-light"
          style={{
            textShadow:
              "0 0 12px rgba(0,255,255,0.5), 0 0 20px rgba(0,255,255,0.4)",
          }}
        >
          <span>deepak</span> <span className="ml-4">kumar</span>
        </h1>

        {/* Enhanced Tagline */}
        <p className="mt-4 text-base sm:text-xl text-gray-300 z-10 italic tracking-wide font-light max-w-2xl">
         {typedText}
        </p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-gray-400 uppercase tracking-widest text-sm sm:text-base mt-12 mb-10 z-10">
          {["Home", "About", "Work", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition duration-300 ease-in-out font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-8 mt-8 z-10 text-gray-400">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-400 transition duration-300 transform hover:scale-110 ease-in-out group relative"
          >
            <FaGithub />
            <span className="absolute inset-0 bg-green-400 rounded-full opacity-0 blur-sm group-hover:opacity-30 transition duration-300"></span>
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition duration-300 transform hover:scale-110 ease-in-out group relative"
          >
            <FaLinkedin />
            <span className="absolute inset-0 bg-blue-400 rounded-full opacity-0 blur-sm group-hover:opacity-30 transition duration-300"></span>
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-cyan-400 transition duration-300 transform hover:scale-110 ease-in-out group relative"
          >
            <FaTwitter />
            <span className="absolute inset-0 bg-cyan-400 rounded-full opacity-0 blur-sm group-hover:opacity-30 transition duration-300"></span>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-center text-sm text-gray-500 mt-auto pb-4">
        © {new Date().getFullYear()} Deepak Kumar. Crafted with creativity ⚡
      </div>
    </footer>
  );
};

export default Footer;
