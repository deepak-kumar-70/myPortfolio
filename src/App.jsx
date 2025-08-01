import React from "react";
import Home from "./Page/Home";
import About from "./Page/About";
import Projects from "./Page/Projects";
import Contact from "./Page/Contact";
import Footer from "./Page/Footer";

const App = () => {
  return (
    <div className="text-white">
      <Home />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
