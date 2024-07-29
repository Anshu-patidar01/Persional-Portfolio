import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import ProfilePic from "../Assets/ProgilePic.png";
// import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
import Navbar from "./Navbar";
import { Links } from "../Assets/content";

function Hero() {
  return (
    <>
      <Navbar />
      <div
        id="home"
        className=" text-purple-200 border-b border-slate-500 h-screen flex flex-col xl:flex-row  justify-center gap-10 md:gap-10 lg:gap-20 items-center  "
      >
        <div className="mb-10 lg:mb-28 md:mb-14">
          <ul className=" flex flex-col pb-6 gpa-6">
            <li className="text-center pt-22 lg:pt-20 text-sm tracking-wider text-slate-300">
              Hello, I'm
            </li>
            <li className="text-center py-1 text-5xl tracking-wider font-bold">
              Anshu Patidar
            </li>
            <li className="text-center py-1 text-3xl tracking-widervfont-bold text-slate-300">
              Frontend Developer
            </li>
          </ul>
          <div className="flex flex-row gap-5 items-center justify-center">
            <a
              href="#"
              // download={"../Assets/resume.pdf"}
              className="border-2 p-3 text-sm border-white font-semibold rounded-full hover:bg-white hover:text-black"
            >
              Download CV
            </a>
            <a
              href="#contect"
              className="border-2 p-3 text-sm text-black bg-white font-semibold rounded-full hover:bg-black hover:text-purple-200 "
            >
              Contact Info
            </a>
          </div>
          <div className="flex flex-row py-5 justify-center items-center gap-5">
            <a href={Links.linkedIn}>
              <FaLinkedinIn className="text-3xl hover:text-4xl hover:text-blue-400" />
            </a>
            <a href={Links.github} className="p-1 rounded-full hover:bg-white">
              <VscGithub className="text-3xl  hover:text-4xl hover:text-black" />
            </a>
          </div>
        </div>
        <div>
          <img
            className="w-[10rem] md:w-[15rem] lg:w-[25rem] rounded-full"
            src={ProfilePic}
            alt=""
          />
        </div>
        <a
          href="#about"
          className="absolute  hidden 2xl:block text-2xl font-semibold  ms-[85%] mt-[35%]"
        >
          <FaAnglesDown className=" hover:text-blue-400 duration-300 hover:text-3xl " />
        </a>
      </div>
    </>
  );
}

export default Hero;
