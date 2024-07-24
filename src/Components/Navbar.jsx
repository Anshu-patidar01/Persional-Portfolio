import { delay, motion } from "framer-motion";
import React from "react";
import { FiMenu } from "react-icons/fi";
const LeftToRight = (delay) => ({
  from: { x: -100, opacity: 0 },
  to: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const RightToLeft = (delay) => ({
  from: { x: 100, opacity: 0 },
  to: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Navbar() {
  return (
    <div className=" text-white flex justify-between px-2 mt-8">
      <div>
        <motion.h1
          variants={LeftToRight(0.1)}
          initial="from"
          animate="to"
          className="text-4xl font-semibold hover:text-red-500 cursor-pointer"
        >
          Anshu
        </motion.h1>
      </div>
      <div className="flex items-center">
        <ul className="gap-10 text-2xl text-slate-200 hidden  lg:flex ">
          <motion.li variants={RightToLeft(0)} animate="to" initial="from">
            <a href="" className=" hover:text-red-500  hover:duration-500">
              Home
            </a>
          </motion.li>
          <motion.li variants={RightToLeft(0)} animate="to" initial="from">
            <a
              href="#about"
              className=" hover:text-red-500  hover:duration-500"
            >
              About
            </a>
          </motion.li>
          <motion.li variants={RightToLeft(0.2)} animate="to" initial="from">
            <a
              href="#skills"
              className=" hover:text-red-500  hover:duration-400"
            >
              Skills
            </a>
          </motion.li>
          <motion.li variants={RightToLeft(0.4)} animate="to" initial="from">
            <a
              href="#project"
              className=" hover:text-red-500  hover:duration-500"
            >
              Projects
            </a>
          </motion.li>
          <motion.li variants={RightToLeft(0.6)} animate="to" initial="from">
            <a
              href="#contect"
              className=" hover:text-red-500  hover:duration-500"
            >
              Contect
            </a>
          </motion.li>
        </ul>
        <div className="flex items-center justify-center   text-3xl  lg:hidden">
          <FiMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
