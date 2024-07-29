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

function Footer() {
  return (
    <div className="text-white ">
      <div className="flex flex-row justify-center mt-5 gap-5">
        <a href={Links.linkedIn}>
          <FaLinkedin className="text-3xl" />
        </a>
        <a href={Links.github}>
          <FaGithub className="text-3xl" />
        </a>
        <a href={Links.insta}>
          <FaInstagram className="text-3xl" />
        </a>
        <a href={Links.facebook}>
          <FaFacebook className="text-3xl" />
        </a>
        <a href={Links.x}>
          <FaXTwitter className="text-3xl" />
        </a>
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
