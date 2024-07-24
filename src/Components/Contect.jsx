import React from "react";
import { GrLinkNext } from "react-icons/gr";
import contactIMG from "../Assets/content";
import { motion } from "framer-motion";
import { PiCaretDoubleUpBold } from "react-icons/pi";
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
const TopToDown = (delay, duration) => ({
  from: { y: -100, opacity: 0 },
  to: {
    y: 0,
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

function Contect() {
  return (
    <div
      id="contect"
      className="text-purple-200 flex flex-col gap-20 border-b border-slate-800  "
    >
      <motion.div
        variants={TopToDown(0.2, 1)}
        initial="from"
        whileInView="to"
        className="pt-5"
      >
        <p className=" hover:text-purple-500  hover:duration-400 hover:cursor-pointer text-center text-sm text-slate-400">
          Get in Touch
        </p>
        <h1 className=" hover:text-purple-500  hover:duration-400 hover:cursor-pointer text-4xl lg:text-6xl text-center ">
          Contact Me
        </h1>
      </motion.div>
      <div>
        <div className="md:flex md:justify-center md:gap-20">
          <motion.div
            variants={LeftToRight(0.2, 1.3)}
            initial="from"
            whileInView="to"
            className=" hidden md:block w-[20rem]"
          >
            <img src={contactIMG} className="rounded-xl" alt="" />
          </motion.div>
          <form className="flex flex-col items-center gap-10 pb-20">
            <motion.input
              variants={RightToLeft(0.2, 1.3)}
              initial="from"
              whileInView="to"
              type="text"
              className=" hover:bg-purple-300 bg-purple-200 text-purple-950 font-semibold  rounded-lg p-2 px-4 w-72"
              name="name"
              placeholder="Your Name"
              required
            />
            <motion.input
              variants={RightToLeft(0.2, 1.5)}
              initial="from"
              whileInView="to"
              type="email"
              className="hover:bg-purple-300 bg-purple-200 text-purple-950 font-semibold   rounded-lg p-2 px-4 w-72"
              name="email"
              placeholder="Your Email"
              required
            />
            <motion.input
              variants={RightToLeft(0.2, 1.7)}
              initial="from"
              whileInView="to"
              type="tel"
              className="hover:bg-purple-300 bg-purple-200 text-purple-950 font-semibold   rounded-lg p-2 px-4 w-72"
              name="Number"
              placeholder="Your Mobile Number"
              required
            />
            <motion.textarea
              variants={RightToLeft(0.2, 1.9)}
              initial="from"
              whileInView="to"
              name="message"
              className="hover:bg-purple-300 bg-purple-200 text-purple-950 font-semibold   rounded-lg p-2 px-4 w-72"
              placeholder="Your message"
              required
            ></motion.textarea>
            <motion.button
              variants={RightToLeft(0.2, 2)}
              initial="from"
              whileInView="to"
              type="submit"
              className="flex items-center justify-center gap-1 bg-purple-400 text-purple-950 w-40 rounded-lg p-2"
            >
              Submit <GrLinkNext />
            </motion.button>
          </form>
        </div>
      </div>
      <motion.a
        variants={popUp(0.5, 3)}
        initial="from"
        whileInView="to"
        href="#home"
        className="absolute  hidden 2xl:block text-3xl font-semibold ms-[85%] mt-[35%]"
      >
        <PiCaretDoubleUpBold className=" hover:text-blue-400 duration-300 hover:text-3xl " />
      </motion.a>
    </div>
  );
}

export default Contect;
