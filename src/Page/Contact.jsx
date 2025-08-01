import React, { useState } from "react";
import hand from "../assets/Image/Hand.png";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const handleMessage = () => {
    console.log({
      name: name,
      email: email,
      message: message,
    });
  };
  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden bg-black p-4 font-[Orbitron]">
      {/* 🔴 System Online Indicator */}
      <div className="absolute top-6 left-6 z-50 flex items-center space-x-2 text-[#FF5C5C] font-semibold text-sm">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
        <span className="tracking-widest">SYSTEM ONLINE</span>
      </div>

      {/* 🕒 Session Timer */}
      <div className="absolute top-16 right-12 z-50 text-xs bg-black/60 px-4 py-2 border border-green-500 text-green-400 font-mono rounded-md animate-pulse">
        SESSION TIME LEFT: 00:42
      </div>

      {/* 🔳 Background Grid Animation */}
      <div
        className="absolute inset-0 z-0 animate-[gridMove_60s_linear_infinite] bg-[length:60px_60px] opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0l-6-6-6 6 6 6 6-6zM2 2v-2h2v2H0zm56 56v-2h2v2h-2zM4 0h56v56h-56V0zm58 0v60H0V0h60zM0 60v-2h2v2H0zm58-2h2v2h-2v-2zM0 0h2v2H0V0zm58 2h2v-2h-2v2zm0 58h2v-2h-2v2zM2 58v2H0v-2h2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 🔵 Pulsing Glow Orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-400 opacity-10 blur-3xl animate-pulse-fast"></div>

      {/* 🔘 Holographic Floating Rings */}
      <div className="absolute top-[30%] left-[5%] w-32 h-32 border border-cyan-400 rounded-full animate-pulse blur-sm opacity-20"></div>
      <div className="absolute top-[60%] left-[12%] w-20 h-20 border border-pink-500 rounded-full animate-spin blur-md opacity-10"></div>

      {/* 📌 Contact Heading */}
      <h1
        className="text-transparent font-[CustomFont1] font-extrabold text-[8rem] md:text-[6rem] sm:text-[4rem] absolute top-4 left-1/2 -translate-x-1/2 z-40 text-center"
        style={{
          WebkitTextStroke: "2px #A2A2A2",
        }}
      >
        Contact Me
      </h1>

      {/* 🧱 Layered Background Shapes */}
      <div
        className="bg-neutral-800 w-full h-[400px]"
        style={{
          clipPath:
            "polygon(0% 6.11%, 2.9% 0%, 54.8% 0%, 62.6% 10.91%, 97.67% 10.91%, 100% 17.62%, 100% 83.81%, 91.33% 100%, 66.72% 100%, 50.12% 76.64%, 35.11% 76.64%, 31.84% 83.81%, 2.3% 83.81%, 0% 76.64%)",
        }}
      ></div>
      <div
        className="bg-neutral-800 w-full h-[270px]"
        style={{
          clipPath:
            "polygon(0% 0%, 2.97% 7.7%, 33.84% 7.7%, 36.67% 0%, 49.17% 0%, 64.17% 26.4%, 87.33% 26.4%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* 🟦 Decorative Panel */}
      <div
        className="absolute top-0 left-0 z-10 w-[400px] h-[300px] bg-white/10 backdrop-blur-[2px] rounded-xl border border-white/30 shadow-lg"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 30.59%, 89.65% 43.7%, 36.87% 56.88%, 17.75% 100%, 0% 100%)",
        }}
      />

      {/* ⬛ Top Glow Strip */}
      <div
        className="bg-neutral-800 w-[624px] py-4 px-3 h-[40px] flex justify-end absolute top-4 right-14"
        style={{
          clipPath: "polygon(0% 0%, 89.75% 0%, 100% 100%, 16.75% 100%)",
        }}
      >
        <div className="w-[100%] bg-white h-full mr-2 rounded-full blur-[6px]"></div>
      </div>

      {/* 📬 Contact Form */}
      <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 z-30 w-[460px] bg-[rgba(0,0,0,0.3)] border border-cyan-400/30 backdrop-blur-md shadow-2xl p-6 rounded-[20px] hover:shadow-cyan-500/30 transition-shadow duration-700">
        <p className="text-sm text-neutral-400 mb-6 text-center animate-typing whitespace-nowrap overflow-hidden border-r-2 border-cyan-500 pr-2 w-fit mx-auto">
          Let’s connect and build something amazing!
        </p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent border border-cyan-700 px-4 py-2 w-full mb-4 rounded-md text-white placeholder:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-cyan-700 px-4 py-2 w-full mb-4 rounded-md text-white placeholder:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
        />
        <textarea
          rows="4"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-transparent border border-cyan-700 px-4 py-2 w-full mb-4 rounded-md text-white placeholder:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
        ></textarea>

        {/* 🔘 Submit Button */}
        <button
          onClick={handleMessage}
          className="w-full relative overflow-hidden py-2 px-4 border border-cyan-500 rounded-lg text-white font-bold hover:text-cyan-300 transition-all duration-300 group"
        >
          <span className="absolute inset-0 bg-cyan-500 opacity-10 blur-md group-hover:opacity-30 transition-all duration-300"></span>
          <span className="relative z-10">Send Transmission </span>
        </button>
      </div>
      <div className="absolute bottom-16 right-4 z-50">
        <div className="mb-2 text-cyan-400 text-xs font-mono tracking-widest">
          SIGNAL STRENGTH
        </div>
        <div className="w-[200px] h-[12px] bg-white/10 border border-cyan-400/40 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-signalPulse" />
          <div className="absolute left-0 top-0 h-full bg-cyan-500 rounded-full animate-signalBar" />
        </div>
      </div>
      <div className="absolute bottom-6 right-4 z-50">
        <div className="mb-1 text-cyan-300 text-xs font-mono tracking-widest">
          ENERGY SCALE
        </div>
        <div className="relative w-[240px] h-[10px] border border-cyan-400 rounded-full overflow-hidden bg-gradient-to-r from-[#021b1e] to-[#062b2f] shadow-inner">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-cyan-400 opacity-10 blur-md animate-pulse"></div>

          {/* Animated Inner Bar */}
          <div className="absolute h-full bg-cyan-500 animate-barScale rounded-full" />
        </div>
      </div>

      {/* 🖐 Helmet Model or Hand Image */}
      <div className="w-xl absolute top-[-150px]">
        <img src={hand} />
      </div>
    </div>
  );
};

export default Contact;
