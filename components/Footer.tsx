import Image from "next/image";
import React from "react";
import logo from "../public/logo-min.png";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-[95vw] sm:w-[80vw] m-auto justify-center flex items-center mt-10"
    >
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="w-[20vw] sm:w-[15vw] lg:w-[10vw]"
      />
      <h3 className="text-[#FFFFFF] ml-4 text-xs sm:text-base">
        © Copyright 2023. Powered by Michał Kozłowski
      </h3>
    </footer>
  );
};

export default Footer;
