import Image from "next/image";
import React from "react";
import mentoringMockup from "../public/mentoringmockup.svg";
import portfolioMockup from "../public/portfoliomockup.svg";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <div id="projects" className="w-[80vw] m-auto my-24">
      <h2 className="text-white font-medium text-3xl flex items-center">
        <span className="bg-[#FF00F5] h-7 w-[0.2rem] mr-2"></span>Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
        <div className="bg-[#311E71]  rounded-lg flex flex-col items-center p-4 relative">
          <Image src={mentoringMockup} alt="" className="absolute left-1/5 -top-10" />
          <h2 className="text-2xl text-white mt-40">MentoringPlatform</h2>
          <p className="w-[90%] sm:w-[70%] text-white text-center m-auto py-4">
            I have created a Full-stack free mentoring platform that allows you to contact a mentor
            of your choice to start learning together, add your favorite mentors to your profile.
            Ability to log in/register, change your password, update your profile and much more.
          </p>
          <div className="flex flex-col w-full md:w-auto md:flex-row">
            <Link
              target="_blank"
              href="https://github.com/Michal2310/mentoringplatform"
              className="text-xl bg-[#FF5C00] px-6 py-2 text-center text-white rounded-md mr-5 hover:scale-105 transform transition-all duration-300 w-full my-2 sm:w-auto"
            >
              Github Repo
            </Link>
            <Link
              target="_blank"
              href="https://backend-ten-lime.vercel.app/"
              className="text-xl bg-[#FF5C00] px-6 py-2 text-center text-white rounded-md mr-5 hover:scale-105 transform transition-all duration-300 w-full my-2 sm:w-auto"
            >
              Live preview
            </Link>
          </div>
        </div>
        <div className="bg-[#311E71]  rounded-lg flex flex-col items-center p-4 relative mt-10 lg:m-0">
          <Image src={portfolioMockup} alt="" className="absolute left-1/5 -top-10" />
          <h2 className="text-2xl text-white mt-40">Portfolio</h2>
          <p className="w-[90%] sm:w-[70%] text-white text-center m-auto py-4">
            I have created a portfolio website to showcase my work and skills. It features a clean
            and modern design with easy navigation, and includes a variety of my projects. Visitors
            can also learn more about me and my background through an About Me section.
          </p>
          <div className="flex flex-col w-full md:w-auto md:flex-row">
            <Link
              href=""
              className="text-xl bg-[#FF5C00] px-6 py-2 text-center text-white rounded-md mr-5 hover:scale-105 transform transition-all duration-300 w-full my-2 sm:w-auto"
            >
              Github Repo
            </Link>
            <Link
              href=""
              className="text-xl bg-[#FF5C00] px-6 py-2 text-center text-white rounded-md mr-5 hover:scale-105 transform transition-all duration-300 w-full my-2 sm:w-auto"
            >
              Live preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
