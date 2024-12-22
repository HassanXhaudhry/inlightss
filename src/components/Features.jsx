import React, { Fragment } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import video_img from "../assets/2nd_img.png";
import { FaPlay } from "react-icons/fa6";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const gridItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const gridContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const images = [img1, img2, img3, img4, img5, img6];
  const titles = [
    "Fully Responsive",
    "Multiple Layouts",
    "Faster Loading",
    "Super Support",
    "Rich Documentation",
    "Lifetime Updates",
  ];
  const colors = [
    "bg-[#5454D41A]",
    "bg-[#F040371A]",
    "bg-[#FEDC5A1A]",
    "bg-[#F040371A]",
    "bg-[#FEDC5A1A]",
    "bg-[#5454D41A]",
  ];
  return (
    <Fragment>
      <section
        id="features"
        className="flex flex-col bg-[#0d1849f7] font-poppins text-white justify-center items-center"
      >
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <p className="text-2xl md:text-4xl font-bold">Why Orinix would be?</p>
          <p className="text-2xl md:text-4xl font-bold">your best fit?</p>
          <p className="pt-4 md:text-sm text-xs">
            Watch this 1 min video to learn about Orinix.
          </p>
        </div>
        <div className="relative ">
          <img src={video_img} alt="" className="z-5" />
          <button className="md:py-8 py-6 md:px-8 px-6 bg-[#6A65FF] rounded-full absolute hover:text-[#6A65FF] hover:bg-white z-30 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaPlay className="md:text-3xl text-xl text-center " />
          </button>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-6 gap-8 md:gap-20 py-10"
          variants={gridContainerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 justify-center items-center"
              variants={gridItemVariant}
            >
              <div
                className={`w-16 h-16 flex justify-center items-center rounded-full ${colors[index]}`}
              >
                <img
                  src={image}
                  alt={`Feature ${index + 1}`}
                  className="w-8 h-6"
                />
              </div>
              <p className="text-xl font-bold">{titles[index]}</p>
              <p className="text-xs">
                With lots of unique blocks, you can <br /> easily build a page
                without coding.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Fragment>
  );
};

export default Features;
