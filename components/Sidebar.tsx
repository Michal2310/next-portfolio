"use client";
import Image from "next/image";
import React, { useState } from "react";
import email from "../public/email-min.gif";
import heart from "../public/heart-min.gif";
import { Link } from "react-scroll";
import { useGlobalContext } from "../app/context/store";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("about");
  const handleSetActiveLink = (to: string) => {
    setActiveLink(to);
  };
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

  return (
    <div
      className={`z-20 p-16 fixed overflow-hidden top-0 right-0 w-full sm:w-[80vw] h-screen bg-white text-black flex justify-around transition duration-150 ease-in ${
        isMenuOpen ? "" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-6 right-6 bg-[#5A3AC7] text-white px-5 py-3 rounded-full text-3xl z-50"
      >
        X
      </button>
      <div className="hidden lg:flex flex-col justify-center h-screen">
        <span className="flex items-center">
          <Image src={email} alt="" className="w-20" />
          <p className="font-semibold text-xl">michal.kozlowski0@outlook.com</p>
        </span>
        <span className="flex items-center">
          <Image src={heart} alt="" className="w-20" />
          <p className="font-semibold text-xl">github.com/Michal2310</p>
        </span>
      </div>
      <div className="z-50 text-black flex flex-col text-right justify-around items-center text-4xl sm:text-5xl">
        <Link
          className={`cursor-pointer ${activeLink === "about" ? "text-purple-500" : ""}`}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          delay={500}
          onSetActive={handleSetActiveLink}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          About
        </Link>
        <Link
          className={`cursor-pointer ${activeLink === "stack" ? "text-purple-500" : ""}`}
          to="stack"
          spy={true}
          smooth={true}
          duration={500}
          delay={500}
          onSetActive={handleSetActiveLink}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Tech Stack
        </Link>
        <Link
          className={`cursor-pointer ${activeLink === "projects" ? "text-purple-500" : ""}`}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          delay={500}
          onSetActive={handleSetActiveLink}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Projects
        </Link>
        <Link
          className={`cursor-pointer ${activeLink === "footer" ? "text-purple-500" : ""}`}
          to="footer"
          spy={true}
          smooth={true}
          duration={500}
          delay={500}
          onSetActive={handleSetActiveLink}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
