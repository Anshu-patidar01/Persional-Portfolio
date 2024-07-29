import React from "react";
import { GrLinkNext } from "react-icons/gr";
import contactIMG from "../Assets/content";
import { motion } from "framer-motion";
import { PiCaretDoubleUpBold } from "react-icons/pi";

function Contect() {
  return (
    <div
      id="contect"
      className="text-purple-200 flex flex-col gap-20 border-b border-slate-800  "
    >
      <div className="pt-5">
        <p className=" hover:text-purple-500  hover:duration-400 hover:cursor-pointer text-center text-sm text-slate-400">
          Get in Touch
        </p>
        <h1 className=" hover:text-purple-500  hover:duration-400 hover:cursor-pointer text-4xl lg:text-6xl text-center ">
          Contact Me
        </h1>
      </div>
      <div>
        <div className="md:flex md:justify-center md:gap-20">
          <div className=" hidden md:block w-[20rem]">
            <img src={contactIMG} className="rounded-xl" alt="" />
          </div>
          <form className="flex flex-col items-center gap-10 pb-20">
            <input
              type="text"
              className=" hover:bg-purple-300 bg-purple-200 text-purple-950 font-semibold  rounded-lg p-2 px-4 w-72"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className="hover:bg-purple-300 bg-purple-200 text-purple-950 font-semibold   rounded-lg p-2 px-4 w-72"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              className="hover:bg-purple-300 bg-purple-200 text-purple-950 font-semibold   rounded-lg p-2 px-4 w-72"
              name="Number"
              placeholder="Your Mobile Number"
              required
            />
            <textarea
              name="message"
              className="hover:bg-purple-300 bg-purple-200 text-purple-950 font-semibold   rounded-lg p-2 px-4 w-72"
              placeholder="Your message"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-1 bg-purple-400 text-purple-950 w-40 rounded-lg p-2"
            >
              Submit <GrLinkNext />
            </button>
          </form>
        </div>
      </div>
      <a
        href="#home"
        className="absolute  hidden 2xl:block text-3xl font-semibold ms-[85%] mt-[35%]"
      >
        <PiCaretDoubleUpBold className=" hover:text-blue-400 duration-300 hover:text-3xl " />
      </a>
    </div>
  );
}

export default Contect;
