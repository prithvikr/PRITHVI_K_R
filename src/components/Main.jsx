import React from "react";
import resume from "../assets/Resume/Prithvi_K_ R _Resume.pdf"
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x "
        src="https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?size=626&ext=jpg"
        alt="Background image here"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-zinc-950">
            I'm Prithvi K R
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "FrontEnd Developer",
                1000,
                "BackEnd Developer",
                1000,
                "MERN Stack Developer",
                1000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full ">
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-300 "
              href="https://github.com/prithvikr"
              target="_blank"
            >
              <FaGithub className="cursor-pointer" size={30} />
            </a>
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-300"
              href="https://www.linkedin.com/in/prithvi-k-r/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer" size={30} />
            </a>
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-300"
              href="https://leetcode.com/prithvi_k_r/"
              target="_blank"
            >
              <SiLeetcode className="cursor-pointer" size={30} />
            </a>
          </div>
          <button className="button px-8 shadow-gray-500 shadow-md border border-gray-800 py-5 mt-5 bg-gradient-to-t from-gray-500 rounded-full to-slate-500 hover:from-gray-700 hover:to-gray-100">
            <a
              className="button"
              href={resume}
              download="Prithvi_K_R_Resume.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
