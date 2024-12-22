import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import main_img from "../assets/main_img.png";
import decoration from "../assets/decoration.png";
import img_1st from "../assets/img_1st.png";
import img_2nd from "../assets/img_2nd.png";
import Slider from "./Slider";
import { TiTick } from "react-icons/ti";
import { FaBuilding } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const imageVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className=" bg-[#0D1849] text-white font-poppins">
      <div className="relative flex flex-col items-center py-20 h-full max-w-screen-2xl mx-4 md:mx-auto z-10">
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-8 items-center text-center"
        >
          <motion.h1
            className="text-2xl font-bold xl:text-5xl pt-16"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-2">
              <p>Integrate AI for a</p>
              <p>competitive analysis for</p>
              <p>your business⭐️</p> 
            </div>
          </motion.h1>
          <motion.p
            className="max-w-[400px] text-white/80 md:text-sm text-xs leading-loose font-Poppins"
            variants={itemVariants}
          >
            Elevate your advertising game with creatives that consistently
            outperform your competitors, setting your brand apart.
          </motion.p>
          <div className="flex items-center gap-6">
            <button className="bg-[#6A65FF] md:px-6 md:py-3 px-3 py-2 rounded-lg font-poppins text-sm font-semibold mt-4 hover:bg-[#5751ff] text-white transition-all duration-300 hover:translate-y-2">
              Join The waitlist
            </button>
            <button className="border md:px-6 md:py-3 px-3 py-2 rounded-lg font-poppins text-sm font-semibold mt-4 hover:bg-[#9C08FF] hover:border-[#9C08FF] transition-all duration-300 hover:translate-y-2">
              Know More
            </button>
          </div>
        </motion.div>

        <span className="relative flex justify-center items-center my-20">
          <img src={main_img} alt="" />
          <div className="bg-[#6A65FF] w-screen absolute z-10 py-3 bottom-[-30px]">
            <Slider />
          </div>
        </span>

        <div
          ref={ref}
          className="relative flex flex-col lg:flex-row items-center min-h-[700px] w-full px-4 py-12 md:py-20 md:px-10"
        >
          <motion.div
            className="relative w-full lg:w-1/2 lg:h-[500px] flex justify-center lg:justify-start"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="relative h-[300px] lg:h-[500px] w-full max-w-md lg:max-w-none">
              <img
                src={img_1st}
                alt="Decoration"
                className="absolute top-0 left-0 w-full h-full object-contain z-20"
              />
              <img
                src={decoration}
                alt="First overlay"
                className="absolute top-1/4 left-0 lg:left-28 w-[30%] lg:w-[20%] object-contain z-10"
              />
              <img
                src={img_2nd}
                alt="Second overlay"
                className="absolute top-3/4 left-2/3 transform -translate-x-1/2 lg:left-2/3 w-[60%] lg:w-1/2 h-auto object-contain z-30"
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-8 lg:mt-0 lg:ml-auto lg:w-1/2 w-full"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <div className="flex flex-col font-poppins gap-6 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Help You Find The Best Analysis For Your Business
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div className="p-3 bg-[#6A65FF] rounded-lg shrink-0">
                    <div className="p-[2px] bg-white rounded-full">
                      <TiTick className="text-[#6A65FF] text-xl" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Trusted and Accurate</p>
                    <p className="text-xs">
                      Amet minim mollit non deserunt ullamco est sit dolor do
                      amet sint. Velit officia consequat duis
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div className="p-3 bg-[#6A65FF] rounded-lg shrink-0">
                    <div className="p-1">
                      <FaBuilding className="text-xl text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Hired By Top Company</p>
                    <p className="text-xs">
                      Amet minim mollit non deserunt ullamco est sit dolor do
                      amet sint. Velit officia consequat duis
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div className="p-3 bg-[#6A65FF] rounded-lg shrink-0">
                    <div className="p-1">
                      <PiBagFill className="text-xl text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Various Categories</p>
                    <p className="text-xs">
                      Amet minim mollit non deserunt ullamco est sit dolor do
                      amet sint. Velit officia consequat duis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <span className="absolute w-[250px] h-[150px] bg-[#1E50FF] rounded-full filter blur-[750px] left-[10px] top-[150px] transform -translate-x-1/2 z-50"></span>
      <span className="absolute w-[350px] h-[350px] bg-[#9C08FF] rounded-full filter blur-[900px] left-[350px] bottom-[-100px] md:block hidden z-0"></span>
      <span className="absolute w-[300px] h-[300px] bg-[#1E50FF] rounded-full filter blur-[900px] right-[20px] bottom-[-150px] md:block hidden"></span>
    </section>
  );
};

export default Home;
