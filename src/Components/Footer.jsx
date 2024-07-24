import { motion } from "framer-motion";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Links } from "../Assets/content";

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

function Footer() {
  return (
    <div className="text-white ">
      <div className="flex flex-row justify-center mt-5 gap-5">
        <motion.a
          href={Links.linkedIn}
          variants={LeftToRight(1.6, 1)}
          initial="from"
          whileInView="to"
        >
          <FaLinkedin className="text-3xl" />
        </motion.a>
        <motion.a
          href={Links.github}
          variants={LeftToRight(1.3, 1)}
          initial="from"
          whileInView="to"
        >
          <FaGithub className="text-3xl" />
        </motion.a>
        <motion.a
          href={Links.insta}
          variants={LeftToRight(1, 1)}
          initial="from"
          whileInView="to"
        >
          <FaInstagram className="text-3xl" />
        </motion.a>
        <motion.a
          href={Links.facebook}
          variants={LeftToRight(0.7, 1)}
          initial="from"
          whileInView="to"
        >
          <FaFacebook className="text-3xl" />
        </motion.a>
        <motion.a
          href={Links.x}
          variants={LeftToRight(0.4, 1)}
          initial="from"
          whileInView="to"
        >
          <FaXTwitter className="text-3xl" />
        </motion.a>
      </div>
      <div>
        <ul className="flex gap-5 justify-center my-8">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contect">Contact</a>
        </ul>
      </div>
      <div className="flex justify-center items-center text-sm">
        <p>Copyright </p>
        <FaRegCopyright />
        <p>2024</p>
        <h1 className="ms-2">
          Developed by:
          <span className="text-purple-500 ms-1">Anshu Patidar</span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
