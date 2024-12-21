"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import CompanyBTn from "./CompanyBTn";

const CompanyHistory = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  // Animation Variants
  const textAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  const experienceBoxAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Content Section */}
        <motion.div variants={textAnimation}>
          {/* Section Title */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-secondary mb-2">
              Our History
            </h3>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              Crafting structures that last a lifetime
            </h2>
          </div>

          {/* Description */}
          <p className="text-textcolor md:text-xl text-base leading-relaxed mb-6">
            Since 2007, we have been proudly serving the Kingdom of Saudi Arabia
            with a wide range of engineering services. From power management
            solutions like UPS systems and generators to advanced security
            installations such as CCTV, we ensure the highest standards of
            quality and reliability. Our offerings also include cutting-edge
            software solutions, load banks, data center services, server
            management, and computer systems. With over a decade of experience,
            we continue to support the diverse engineering needs of our clients
            across various sectors in Saudi Arabia.
          </p>

          {/* Buttons & Support */}
          <div className="flex flex-wrap items-center gap-6">
            <CompanyBTn />
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div className="relative" variants={imageAnimation}>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/about3.png"
              alt="Company History"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Experience Box */}
          <motion.div
            className="absolute bottom-0 left-0 bg-primary text-white px-6 py-4 rounded-tr-lg"
            variants={experienceBoxAnimation}
          >
            <h3 className="text-3xl lg:text-5xl font-bold">
              <span className="counter">20</span>+
            </h3>
            <p className="text-base md:text-lg">Years of Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyHistory;
