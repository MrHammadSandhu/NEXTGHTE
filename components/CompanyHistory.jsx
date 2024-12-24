"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CompanyBTn from "./CompanyBTn";

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

const CompanyHistory = () => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Start animation when 10% of the element is in view
    triggerOnce: true, // Allow repeated animations
  });

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
      variants={containerAnimation}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Content Section */}
        <motion.div variants={childAnimation}>
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
        <motion.div className="relative" variants={childAnimation}>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/about3.png"
              alt="Company History"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Experience Box */}
          <div className="absolute bottom-0 left-0 bg-primary text-white px-6 py-4 rounded-tr-lg">
            <h3 className="text-3xl lg:text-5xl font-bold">
              <span className="counter">20</span>+
            </h3>
            <p className="text-base md:text-lg">Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyHistory;
