"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CompanyBTn from "./CompanyBTn";
import Reach from "./Reach";

const containerAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Increased duration for smoothness
      ease: "easeOut", // Smooth easing
      staggerChildren: 0.3, // Slightly more delay between child animations
    },
  },
};

const childAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6, // Smooth entry for each child
      ease: "easeOut",
    },
  },
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Start animation when 10% of the element is in view
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <motion.div
      ref={ref}
      className="container mx-auto py-16 lg:py-32 px-4 sm:px-0"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
      variants={containerAnimation}
    >
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 lg:grid-cols-2 sm:gap-x-8 xl:gap-0">
        {/* Image Section */}
        <motion.div className="w-full" variants={childAnimation}>
          <img
            className="w-full rounded-2xl md:hidden lg:flex xl:w-[80%]"
            src="/about.png"
            alt="About image"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="mt-4 md:mt-0 text-center lg:text-start"
          variants={childAnimation}
        >
          {/* Heading */}
          <h3
            className="text-lg text-secondary font-bold"
            data-translate-key="Aboutus"
          >
            About Us
          </h3>

          {/* Subheading */}
          <h2
            className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary"
            data-translate-key="Aboutheading"
          >
            Gulf Horizon Telecom Est.
          </h2>

          {/* Paragraph */}
          <p
            className="mb-6 font-semibold text-base md:text-lg w-full text-textcolor"
            data-translate-key="Aboutdescription"
          >
            With a powerful respect in the market, Gulf Horizon Telecom Est is
            pleased to partner with world-famous producers to make premier
            products and systems specially made for long-term reliability. Our
            clients believe us as a reliable solution for all projects required,
            from establishment to post-sales guidance.
          </p>

          {/* Reach Section */}
          <motion.div variants={childAnimation}>
            <Reach />
          </motion.div>

          {/* Button */}
          <motion.div variants={childAnimation}>
            <CompanyBTn />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
