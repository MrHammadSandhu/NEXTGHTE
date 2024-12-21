"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const MissionVision = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  // Animation Variants
  const containerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const childAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      ref={ref}
      className="py-44"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerAnimation}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerAnimation}
        >
          {/* Mission */}
          <motion.div
            className="bg-white px-8 rounded-3xl shadow-lg flex flex-col items-start border border-textcolor/50 py-16"
            variants={childAnimation}
          >
            <div className="mb-4 flex justify-center">
              <img
                src="/icon-our-mission.svg"
                alt="Our Mission Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-textcolor text-base font-medium md:text-lg">
              Our goal is to become Saudi Arabia's leading and most preferred
              provider of engineering solutions and services, delivering
              excellence and innovation across all projects.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white px-8 rounded-3xl shadow-lg flex flex-col items-start border border-textcolor/50 py-16"
            variants={childAnimation}
          >
            <div className="mb-4 flex justify-center">
              <img
                src="/icon-our-vision.svg"
                alt="Our Vision Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-textcolor text-base font-medium md:text-lg">
              We provide quality products, empower employees, ensure shareholder
              returns, uphold ethical standards, and actively contribute to the
              socio-economic development of our country.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="bg-white px-8 rounded-3xl shadow-lg flex flex-col items-start border border-textcolor/50 py-16"
            variants={childAnimation}
          >
            <div className="mb-4 flex justify-center">
              <img
                src="/icon-our-values.svg"
                alt="Our Values Icon"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Values
            </h3>
            <p className="text-textcolor text-base font-medium md:text-lg">
              Our core values shape our culture, emphasizing fairness,
              diversity, respect, quality, long-term commitment, and meaningful
              results. These principles define our organizational identity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionVision;
