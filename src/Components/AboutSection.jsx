import React from "react";
import EdProfile from "../Assets/EducationProfile.png";
import { IoSchoolSharp } from "react-icons/io5";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { ABOUT_TEXT, EDUCATION } from "../Assets/content";
import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";

function AboutSection() {
  return (
    <div
      id="about"
      className=" text-purple-200 border-b border-slate-500 lg:h-screen"
    >
      <div className="mt-5">
        <p className=" hover:text-purple-300  hover:duration-400 capitalize lg:pt-5 text-slate-400 text-[10px] lg:text-[20px] text-center">
          Get to know more
        </p>
        <h1 className=" hover:text-purple-500  hover:duration-400 hover:cursor-pointer capitalize text-2xl lg:text-5xl text-center">
          About Me
        </h1>
      </div>
      <div className=" lg:flex lg:justify-center lg:h-[80%] lg:gap-10">
        <div className="mt-10 flex items-center justify-center lg:w-[28rem] ">
          <img
            src={EdProfile}
            className="rounded-3xl w-48 lg:w-[28rem] lg:[28rem]"
            alt="About Image"
          />
        </div>

        <div className="mt-10 ms-5 lg:w-[35rem] lg:flex lg:justify-center lg:flex-col">
          <h1 className=" flex items-center text-[1.1rem] lg:text-[2.2rem]">
            <VscDebugBreakpointData className="m-1" />
            Educatition
          </h1>
          <div className="flex justify-center flex-col lg:flex-row lg:gap-4 ">
            <div className="border border-purple-400 tracking-wide flex flex-col items-center p-2 lg:p-1 gap-1 mt-5 rounded-3xl">
              <IoSchoolSharp className="text-2xl" />
              <h1 className=" capitalize text-slate-50 text-[14px] lg:text-[20px] font-semibold text-center">
                {EDUCATION[0].degree}
              </h1>
              <h2 className=" capitalize text-[10px] lg:text-[14px] text-slate-200">
                {EDUCATION[0].colleg}
              </h2>
              <p className="text-[9px] lg:text-[11px] text-slate-400">
                {EDUCATION[0].Year}
              </p>
            </div>
            <div className="border border-purple-400 tracking-wide flex flex-col items-center p-2 gap-1 mt-5 rounded-3xl">
              <IoSchoolSharp className="text-2xl" />
              <h1 className="text-slate-50 text-[14px] lg:text-[20px] font-semibold text-center">
                {EDUCATION[1].degree}
              </h1>
              <h2 className="text-[10px] lg:text-[14px] text-slate-200">
                {EDUCATION[1].colleg}
              </h2>
              <p className="text-[9px] lg:text-[11px] text-slate-400">
                {EDUCATION[1].Year}
              </p>
            </div>
          </div>
          <div className="my-[2.7rem] lg:my-[1rem]">
            <p className=" hover:text-slate-50 hover:duration-400 hover:text-[16px] hover:cursor-pointer text-[9px] lg:text-[14px] p-4 lg:p-1 tracking-wide lg:tracking-wider text-slate-300">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
      <a
        href="#skills"
        className=" absolute hidden 2xl:block text-2xl font-semibold ms-[85%]"
      >
        <FaAnglesDown className=" hover:text-blue-400 duration-300 hover:text-3xl " />
      </a>
    </div>
  );
}

export default AboutSection;
