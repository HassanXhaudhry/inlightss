import React, { Fragment } from "react";
import img from "../assets/bottom_img.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Fragment>
      <section
        id="blog"
        className="flex flex-col bg-[#0d1849f7] font-poppins text-white justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center py-16">
          <div className="flex flex-col justify-center items-center gap-6 py-10">
            <p className="md:text-4xl text-xl font-bold">
              Frequently Asked Question
            </p>
            <p className="md:text-sm text-xs text-center">
              Create custom landing pages with Omega that converts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 text-start gap-16 px-4 justify-center py-8">
            <div className="flex flex-col items-start max-w-sm gap-4">
              <p className="md:text-xl text-lg font-semibold">
                What’s gonna be your question?
              </p>
              <p className="text-xs">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without any design or custom coding. with
                Omega that converts more visitors than any website.
              </p>
            </div>
            <div className="flex flex-col items-start max-w-sm gap-4">
              <p className="md:text-xl text-lg font-semibold">
                What’s gonna be your question?
              </p>
              <p className="text-xs">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without any design or custom coding. with
                Omega that converts more visitors than any website.
              </p>
            </div>
            <div className="flex flex-col items-start max-w-sm gap-4">
              <p className="md:text-xl text-lg font-semibold">
                What’s gonna be your question?
              </p>
              <p className="text-xs">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without any design or custom coding. with
                Omega that converts more visitors than any website.
              </p>
            </div>
            <div className="flex flex-col items-start max-w-sm gap-4">
              <p className="md:text-xl text-lg font-semibold">
                What’s gonna be your question?
              </p>
              <p className="text-xs">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without any design or custom coding. with
                Omega that converts more visitors than any website.
              </p>
            </div>
            <div className="flex flex-col items-start max-w-sm gap-4">
              <p className="md:text-xl text-lg font-semibold">
                What’s gonna be your question?
              </p>
              <p className="text-xs">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without any design or custom coding. with
                Omega that converts more visitors than any website.
              </p>
            </div>
            <div className="flex flex-col items-start max-w-sm gap-4">
              <p className="md:text-xl text-lg font-semibold">
                What’s gonna be your question?
              </p>
              <p className="text-xs">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without any design or custom coding. with
                Omega that converts more visitors than any website.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center md:text-sm text-xs py-6">
            <p>Didn’t find your answer?</p>
            <p href="" className="text-[#515DEF] cursor-pointer">
              &nbsp;Contact us here
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#0D1849] font-poppins text-white justify-center items-center p-16 w-full">
          <motion.div
            ref={ref}
            variants={animationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-[#515DEF] rounded-2xl p-12 flex md:flex-row flex-col gap-6 justify-between"
          >
            <div className="flex flex-col gap-6 items-start justify-center">
              <p className="md:text-3xl text-xl font-bold">
                Explore Free Version now!
              </p>
              <p className="md:text-sm text-xs">
                Search all the open positions on the web. Get your own
                personalized dashboard for lifetime
              </p>
              <div className="flex items-center gap-6">
                <button className="bg-white md:px-6 md:py-3 px-3 py-2 rounded-lg font-poppins md:text-sm text-xs mt-4 hover:text-white text-black hover:bg-[#5751ff] hover:border">
                  Join Waitlist
                </button>
                <button className="border md:px-6 md:py-3 px-3 py-2 rounded-lg font-poppins md:text-sm text-xs mt-4 hover:text-[#5751ff] hover:bg-white hover:border-white">
                  Contact
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src={img} alt="" className="w-[80%] h-[80%]" />
            </div>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
