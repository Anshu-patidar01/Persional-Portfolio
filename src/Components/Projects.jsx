import React from "react";
import { Links, PROJECTS } from "../Assets/content";
import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
const LeftToRight = (delay, duration) => ({
  from: { x: -100, opacity: 0 },
  to: {
    x: 0,
    opacity: 1,
    transition: { duration: duration, delay: delay },
  },
});
const RightToLeft = (delay, duration) => ({
  from: { x: 100, opacity: 0 },
  to: {
    x: 0,
    opacity: 1,
    transition: { duration: duration, delay: delay },
  },
});
const popUp = (delay, duration) => ({
  from: { x: 0, opacity: 0 },
  to: {
    x: 0,
    opacity: 1,
    transition: { duration: duration, delay: delay },
  },
});

function Projects() {
  return (
    <div
      id="project"
      className="text-white flex flex-col items-center border-b border-slate-500 pb-10 lg:pb-20"
    >
      <motion.p
        variants={LeftToRight(0.2, 1)}
        initial="from"
        whileInView="to"
        className=" hover:text-red-300  hover:duration-400 hover:cursor-pointer capitalize mt-10 text-sm text-slate-400"
      >
        Browse my recent
      </motion.p>
      <motion.h1
        variants={LeftToRight(0.2, 1)}
        initial="from"
        whileInView="to"
        className=" hover:text-red-500  hover:duration-400 hover:cursor-pointer text-4xl lg:text-6xl "
      >
        Projects
      </motion.h1>
      <motion.div
        variants={popUp(0.5, 3)}
        initial="from"
        whileInView="to"
        className="flex flex-col lg:flex-row mt-20 gap-10"
      >
        {PROJECTS.map((item, index) => (
          <div
            key={index}
            className="flex felx-row flex-col gap-5 w-72 items-center p-5 lg:p-10 justify-between bg-slate-700 rounded-2xl"
          >
            <div>
              <img className="w-60 rounded-lg " src={item.image} alt="" />
              <h1 className="text-xl font-semibold mt-5 text-center">
                {item.title}
              </h1>
              <p className="text-slate-300">{item.discription}</p>
            </div>
            <div className="flex felx-row justify-center gap-5">
              <a
                href=""
                className="border text-lg border-slate-300 rounded-md p-1 hover:bg-slate-900 hover:border-black"
              >
                GitHub
              </a>
              <button className="border text-lg border-black bg-slate-900 rounded-md p-1 hover:bg-slate-700 hover:border-slate-300">
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.a
        variants={popUp(0.5, 3)}
        initial="from"
        whileInView="to"
        href="#contect"
        className="absolute  hidden 2xl:block text-2xl font-semibold ms-[85%] mt-[44%]"
      >
        <FaAnglesDown className=" hover:text-blue-400 duration-300 hover:text-3xl " />
      </motion.a>
    </div>
  );
}

export default Projects;
