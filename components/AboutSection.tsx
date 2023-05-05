"use client";
import Image from "next/image";
import { Link } from "react-scroll";

const AboutSection = () => {
  return (
    <div id="about" className="w-[80vw] sm:w-[65vw] m-auto mt-0 mb-24 sm:my-24">
      <h2 className="text-white font-medium text-3xl flex items-center">
        <span className="bg-[#FF00F5] h-7 w-[0.2rem] mr-2"></span>About me
      </h2>
      <div>
        <p className="text-[#7BA8FF] tracking-wide text-2xl my-6 w-[90%] md:w-auto">
          Hi, my name is Michał. I am a student of Computer Science. <br /> I have been learning web
          technologies for over a year and a half to become a front-end developer.
        </p>
        <div className="flex items-center">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-base sm:text-xl bg-[#FF5C00] px-6 py-2 text-center text-white rounded-md mr-5 hover:scale-105 transform transition-all duration-300"
          >
            Contact me
          </Link>
          <button className="text-base sm:text-xl text-white border-[#FF00F5] border-b-2 border-spacing-2 bg-transparent text-center hover:scale-105 transform transition-all duration-300">
            Download CV
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          <div className="bg-white rounded-lg text-center p-3 ">
            <Image
              src="/coding-min.gif"
              alt="Coding animate gif"
              width={130}
              height={130}
              className="m-auto"
            />
            <p className="text-2xl font-semibold">CODING</p>
          </div>
          <div className="bg-white rounded-lg text-center p-3">
            <Image
              src="/responsive-min.gif"
              alt="Responsive web design animate gif"
              width={130}
              height={130}
              className="m-auto"
            />
            <p className="text-2xl font-semibold">RWD</p>
          </div>
          <div className="bg-white rounded-lg text-center p-3">
            <Image
              src="/testing-min.gif"
              alt="Testing animate gif"
              width={130}
              height={130}
              className="m-auto"
            />
            <p className="text-2xl font-semibold">TESTING</p>
          </div>
          <div className="bg-white rounded-lg text-center p-3">
            <Image
              src="/designing-min.gif"
              alt="Design animate gif"
              width={130}
              height={130}
              className="m-auto"
            />
            <p className="text-2xl font-semibold">DESIGNING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
