import Image from "next/image";
import React from "react";

const TechStackSection = () => {
  const ICONS = [
    [
      {
        label: "html",
        name: "HTML5",
      },
      {
        label: "css",
        name: "CSS3",
      },
      {
        label: "js",
        name: "JavaScript",
      },
      {
        label: "ts",
        name: "TypeScript",
      },
      {
        label: "react",
        name: "React.js",
      },
      {
        label: "next",
        name: "Next.js",
      },
      {
        label: "react-query",
        name: "React Query",
      },
      {
        label: "cypress",
        name: "Cypress",
      },
      {
        label: "zod",
        name: "ZOD",
      },

      {
        label: "mui",
        name: "MUI",
      },
    ],
    [
      {
        label: "node",
        name: "Node.js",
      },
      {
        label: "express",
        name: "Express.js",
      },
      {
        label: "nest",
        name: "Nest.js",
      },
      {
        label: "prisma",
        name: "Prisma",
      },
      {
        label: "jest",
        name: "Jest",
      },
      {
        label: "postresql",
        name: "PostgreSQL",
      },
      {
        label: "mysql",
        name: "MySQL",
      },
      {
        label: "mongo",
        name: "MongoDB",
      },
    ],
    [
      {
        label: "postman",
        name: "Postman",
      },
      {
        label: "git",
        name: "Git",
      },
      {
        label: "docker",
        name: "Docker",
      },
      {
        label: "vite",
        name: "Vite",
      },
      {
        label: "vscode",
        name: "VSCode",
      },
      {
        label: "figma",
        name: "Figma",
      },
      {
        label: "npm",
        name: "NPM",
      },
      {
        label: "prettier",
        name: "Prettier",
      },
    ],
  ];

  return (
    <div id="stack" className="w-[80vw] sm:w-[65vw] bg-[#5A3AC7] m-auto rounded-lg p-5">
      <h1 className="text-white font-medium text-3xl flex items-center">
        <span className="bg-[#FF00F5] h-7 w-[0.2rem] mr-2"></span>Tech stack
      </h1>
      {ICONS.map((el, idx) => (
        <div
          key={idx}
          className="w-[90%] sm:max-w-[80%] my-7 m-auto bg-[#311E71] justify-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4 rounded-lg"
        >
          {el.map(({ name, label }) => (
            <div
              key={name}
              className="p-3 bg-white flex items-center justify-center rounded-lg mauto w-24 h-20 relative group"
            >
              <div>
                <Image
                  src={`/${label}-min.png`}
                  className="max-w-full m-auto w-fit"
                  alt={label}
                  width={60}
                  height={60}
                />
                <span className="absolute -bottom-8 -left-1 w-full text-center text-white font-semibold text-xs z-20 after:rounded-md after:w-20 after:h-8 after:absolute after:-bottom-2 after:left-3 after:bg-[#7BA8FF] after:text-center after:-z-10 before:-z-20 before:w-5 before:h-5 before:bg-[#7BA8FF] before:absolute before:bottom-2 before:left-10 before:rotate-45 after:opacity-0 before:opacity-0 opacity-0 group-hover:opacity-100 group-hover:after:opacity-100 group-hover:before:opacity-100 transition-opacity duration-300">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechStackSection;
