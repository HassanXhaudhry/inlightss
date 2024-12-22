import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { SiPython } from "react-icons/si";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FaNodeJs, FaSass, FaMagento } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { BsPentagonFill } from "react-icons/bs";
import {
  TbOvalVerticalFilled,
  TbTriangles,
  TbBrandVscode,
  TbBrandRedux,
} from "react-icons/tb";
import { SiVitess, SiTailwindcss } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import start from "../assets/star.png";
import circle from "../assets/circle.png";
import SliderTwo from "./SliderTwo";

const icons = [
  SiPython,
  RiCheckboxBlankFill,
  FaMagento,
  CgFigma,
  FaNodeJs,
  BsPentagonFill,
  TbBrandRedux,
  TbOvalVerticalFilled,
  FaSass,
  TbTriangles,
  TbBrandVscode,
  SiVitess,
  BiLogoJquery,
  SiTailwindcss,
];

const Usecase = () => {
  return (
    <Fragment>
      <section
        id="usecase"
        className="bg-[#0D1849] text-white font-poppins relative"
      >
        <div className="flex flex-col py-32 justify-center items-center">
          <div className="flex flex-col relative justify-center items-center md:text-5xl text-2xl font-bold gap-2">
            <p>Useful software</p>
            <p>that We assist.</p>
            <img
              src={start}
              alt=""
              className="absolute md:left-[-200px] left-1 top-[50px]"
            />
            <img
              src={start}
              alt=""
              className="absolute md:right-[-200px] right-1 top-[-40px]"
            />
          </div>
          <motion.section
            id="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="grid md:grid-cols-7 md:grid-rows-2 grid-cols-2 grid-rows-7 gap-12 justify-center items-center pt-24 text-4xl"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  style={{
                    borderWidth: "3px",
                    borderStyle: "solid",
                    borderColor: "#6B7280",
                  }}
                  className="rounded-3xl p-3"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ y: [0, -7.5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2 + index * 0.1,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
        <span className="absolute w-[350px] h-[150px] bg-[#1E50FF] rounded-full filter blur-[750px] left-[-10px] top-[150px] transform -translate-x-1/2"></span>
        <span className="absolute w-[250px] h-[300px] bg-[#9C08FF] rounded-full filter blur-[900px] md:right-[-100px] right-[-150px] bottom-[-20px]"></span>
        <div className="relative">
          <img
            src={start}
            alt=""
            className="absolute bottom-12 md:right-[300px] right-1"
          />
          <img
            src={circle}
            alt=""
            className="absolute bottom-10 md:left-[150px] left-4 h-10 w-10"
          />
        </div>
      </section>
      
      <div className="flex flex-col relative bg-[#0d1849f7] font-poppins text-white justify-center items-center py-16">
        <p className="md:text-3xl text-xl font-bold pb-16 px-2 text-center">What people are saying about Circle</p>
        <SliderTwo />
        <span className="absolute w-[250px] h-[300px] bg-[#FFFFFF] rounded-full filter blur-[500px] md:right-[-80px] right-[-150px] bottom-[-80px] z-10"></span>
      </div>
    </Fragment>
  );
};

export default Usecase;
