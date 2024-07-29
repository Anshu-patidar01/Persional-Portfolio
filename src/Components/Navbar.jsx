import { delay, motion } from "framer-motion";
import React from "react";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <div className=" text-purple-200 flex justify-between px-2 mt-8">
      <div>
        <h1 className="text-4xl font-semibold text-purple-200 hover:text-purple-500 cursor-pointer">
          Anshu
        </h1>
      </div>
      <div className="flex items-center">
        <ul className="gap-10 text-2xl text-slate-200 hidden  lg:flex ">
          <li>
            <a href="" className=" hover:text-purple-500  hover:duration-500">
              Home
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#about"
              className=" hover:text-purple-500  hover:duration-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className=" hover:text-purple-500  hover:duration-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#project"
              className=" hover:text-purple-500  hover:duration-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contect"
              className=" hover:text-purple-500  hover:duration-500"
            >
              Contect
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center   text-3xl  lg:hidden">
          <FiMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
