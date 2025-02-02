import { motion } from "framer-motion";
import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { VscDebugBreakpointData } from "react-icons/vsc";

function Skills() {
  return (
    <div
      id="skills"
      className="text-purple-200 flex flex-col  items-center border-b lg:h-[100vh] border-slate-500"
    >
      <div className="lg:mt-5">
        <p className="hover:text-purple-300  hover:duration-400 hover:cursor-pointer text-sm text-center text-slate-400 pt-5">
          Explore My
        </p>
        <h1 className="hover:text-purple-500  hover:duration-400 hover:cursor-pointer text-4xl text-center lg:text-6xl">
          Skills
        </h1>
      </div>
      <div className="h-full  flex flex-col justify-center mb-5 lg:flex-row lg:h-[26rem] lg:mt-40 lg:gap-36  gap-10">
        <div className=" border border-purple-400 rounded-3xl p-12">
          <h1 className="text-2xl lg:text-4xl text-slate-300 font-bold tracking-wider">
            {" "}
            Frontend Development
          </h1>
          <div className="gap-2 mt-2 text-xl">
            <div className=" grid grid-cols-2 ">
              <div>
                <h1>HTML</h1>
                <p className="text-slate-500 text-sm">Intermediate</p>
              </div>
              <div>
                <h1>CSS</h1>
                <p className="text-slate-500 text-sm">Intermediate</p>
              </div>
              <div>
                <h1>Javascript</h1>
                <p className="text-slate-500 text-sm">Intermediate</p>
              </div>
            </div>
            <div className="mt-5 ">
              <h1 className="text-2xl lg:text-4xl text-slate-300 font-bold tracking-wider">
                Technology
              </h1>
              <div className="gap-2 mt-2 grid grid-cols-2">
                <div>
                  <h1>Reactjs</h1>
                  <p className="text-slate-500 text-sm">Intermediate</p>
                </div>
                <div>
                  <h1>Bootstrap</h1>
                  <p className="text-slate-500 text-sm">Basic</p>
                </div>
                <div>
                  <h1>Tailwind</h1>
                  <p className="text-slate-500 text-sm">Basic</p>
                </div>
                <div>
                  <h1>Framer Motion</h1>
                  <p className="text-slate-500 text-sm">Basic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-purple-400 rounded-3xl p-12">
          <h1 className="text-2xl lg:text-4xl text-slate-300 font-bold tracking-wider">
            Programming Language
          </h1>
          <div className="gap-2 mt-2 text-xl">
            <div className=" grid grid-cols-2 ">
              <div>
                <h1>C</h1>
                <p className="text-slate-500 text-sm">Intermediate</p>
              </div>
              <div>
                <h1>C++</h1>
                <p className="text-slate-500 text-sm">Basic</p>
              </div>
              <div>
                <h1>Java</h1>
                <p className="text-slate-500 text-sm">Intermediate</p>
              </div>
              <div>
                <h1>Python</h1>
                <p className="text-slate-500 text-sm">Basic</p>
              </div>
            </div>
            <div className="mt-5 ">
              <h1 className="text-2xl lg:text-4xl text-slate-300 font-bold tracking-wider">
                Technical Skills
              </h1>
              <div className="gap-2 mt-2 grid grid-cols-2">
                <div>
                  <h1>DSA</h1>
                  <p className="text-slate-500 text-sm">Intermediate</p>
                </div>
                <div>
                  <h1>OOP's Concept</h1>
                  <p className="text-slate-500 text-sm">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="  border border-purple-400 rounded-3xl p-8">
          <h1 className="text-xl">Programming Language</h1>
          <div className=" grid grid-cols-2">
            <div>C</div>
            <div>Java</div>
            <div>C++</div>
          </div>
        </div> */}
      </div>
      <a
        href="#project"
        className="absolute  hidden 2xl:block text-2xl font-semibold ms-[85%] mt-[44%]"
      >
        <FaAnglesDown className=" hover:text-blue-400 duration-300 " />
      </a>
    </div>
  );
}

export default Skills;
