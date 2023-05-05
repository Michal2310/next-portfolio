import React from "react";
import image from "../public/Vector-min.png";
import Image from "next/image";
import mouseScrollDown from "../public/mouseScolllDown-min.gif";
import heroImage from "../public/heroImage-min.png";

const HeroSection = () => {
  return (
    <div className=" flex overflow-x-hidden">
      <div className="min-w-[60vw] sm:min-w-[100vw] min-h-[89vh] flex flex-col justify-between ml-2 md:ml-20">
        <div className="flex my-auto mr-auto animate-slideLeft">
          <Image src={image} alt="" className="h-72 sm:h-[45vh] md:h-96 " />
          <div className="w-80 sm:w-96 md:w-80 lg:w-96 flex flex-col justify-between mx-8">
            <div>
              <p className="text-[#7BA8FF] text-xl sm:text-2xl flex items-center mb-3">
                <span className="bg-[#7BA8FF] h-7 w-[0.2rem] mr-2"></span>
                Aspiring Web Developer
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-5xl text-white font-medium">
                Hello, my name&apos;s Michał. <br /> I&apos;m a aspiring <br /> Junior Front-end{" "}
                <br /> Developer
              </h2>
            </div>
            <div className="relative w-fit">
              <button className="text-white bg-[#5A3AC7] z-1  bg-opacity-80 px-4 py-2 hover:scale-110 transform transition-all duration-300  ">
                Download resume
              </button>
              <span className="after:absolute after:w-8 after:h-8 after:bg-[#FF00F5] after:-right-3 after:-bottom-3 after:rounded-full after:z-10 after:opacity-50 after:blur-[2px] before:absolute before:w-10 before:h-6 before:bg-[#FF00F5] before:-top-2 before:-left-2 before:blur-[3px] before:-z-10"></span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-center mx-auto absolute-center w-screen animate-showUp delay-1000">
          <p className="-rotate-90 p-6 text-white">Scroll down</p>
          <Image
            src={mouseScrollDown}
            alt="Mouse scroll down animation gif"
            width={80}
            className=""
          />
        </div>
      </div>
      <div className="bg-[#5A3AC7] hidden min-h-screen sm:hidden md:w-[35vw] lg:min-w-[40vw] absolute top-0 right-0 md:flex justify-center items-center">
        <Image
          src={heroImage}
          alt="Hero section image"
          width={400}
          className="md:w-[100%] lg:w-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
