"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import CompanyBTn from "./CompanyBTn";
import Reach from "./Reach";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  // Animation variants for different elements
  const imageAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const headingAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const subheadingAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} className="container mx-auto py-16 lg:py-32 px-4 sm:px-0">
      <motion.div
        className="grid grid-cols-1 justify-items-center sm:grid-cols-1 lg:grid-cols-2 sm:gap-x-8 xl:gap-0"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Image Section */}
        <motion.div className="w-full" variants={imageAnimation}>
          <img
            className="w-full rounded-2xl md:hidden lg:flex xl:w-[80%]"
            src="/about.png"
            alt="About image"
          />
        </motion.div>

        {/* Text Section */}
        <div className="mt-4 md:mt-0 text-center lg:text-start">
          {/* Heading */}
          <motion.h3
            className="text-lg text-secondary font-bold"
            variants={headingAnimation}
            data-translate-key="Aboutus"
          >
            About Us
          </motion.h3>

          {/* Subheading */}
          <motion.h2
            className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary"
            variants={headingAnimation}
            data-translate-key="Aboutheading"
          >
            Gulf Horizon Telecom Est.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="mb-6 font-semibold text-base md:text-lg w-full text-textcolor"
            variants={paragraphAnimation}
            data-translate-key="Aboutdescription"
          >
            With a powerful respect in the market, Gulf Horizon Telecom Est is
            pleased to partner with world-famous producers to make premier
            products and systems specially made for long-term reliability. Our
            clients believe us as a reliable solution for all projects required,
            from establishment to post-sales guidance.
          </motion.p>

          {/* Reach Section */}
          <motion.div variants={subheadingAnimation}>
            <Reach />
          </motion.div>

          {/* Button */}
          <motion.div variants={buttonAnimation}>
            <CompanyBTn />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
