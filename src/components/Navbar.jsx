import React, { useState, useEffect } from "react";
import logo from "../assets/Chitrang.png";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("meee");

  const tabs = [
    { id: "meee", label: "Meee" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact Me" },
  ];

  const handleScroll = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.3, // section becomes active when 60% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-3 sticky top-0 bg-[#1e1e1e] border-b-2 border-gray-700 z-50">
      <div>
        <img
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="bg-stone-800 rounded-full"
        />
      </div>
      <div className="flex flex-row gap-10 text-lg font-medium text-gray-200">
        {tabs.map((tab) => (
          <p
            key={tab.id}
            onClick={() => handleScroll(tab.id)}
            className={`cursor-pointer transition relative 
              ${
                activeTab === tab.id
                  ? "text-amber-500 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-amber-500 after:left-0 after:-bottom-1"
                  : "hover:text-amber-300"
              }`}
          >
            {tab.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
