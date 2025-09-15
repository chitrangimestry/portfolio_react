import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Footer from "./components/Footer";
import Certifications from "../pages/Certifications";

function App() {
  const [activeTab, setActiveTab] = useState("meee");

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-6">
        <section id="meee" className="min-h-screen scroll-mt-20">
          <Home />
        </section>

        <section id="skills" className="min-h-screen scroll-mt-20">
        {console.log("activeTab:", activeTab, "")}
          <Skills />
        </section>

        <section id="projects" className="min-h-screen scroll-mt-20">
          <Projects />
        </section>

        <section id="experience" className="min-h-screen scroll-mt-20">
          <Experience />
        </section>

        <section id="certifications" className="min-h-screen scroll-mt-20">
          <Certifications />
        </section>

        <section id="contact" className="min-h-screen scroll-mt-20">
          <Contact />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
