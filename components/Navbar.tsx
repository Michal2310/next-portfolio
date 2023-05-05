"use client";
import Image from "next/image";
import logo from "../public/logo-min.png";
import { useGlobalContext } from "../app/context/store";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
  return (
    <header className="flex justify-between items-center px-8 py-2 sticky top-0 bg-transparent z-10 backdrop-blur-sm">
      <div className="">
        <Image src={logo} alt="Logo picture" width={120} className="min-h-max" />
      </div>
      <div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-between w-8 h-2 focus:outline-none"
        >
          <span className="bg-white h-0.5 w-full"></span>
          <span className="bg-white h-0.5 w-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
