"use client";
import React from "react";
import { motion } from "motion/react";
import SecondaryBtn from "./SecondaryBtn";

const CtaBox = () => {
  // Animation Variants (same as footer component)
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Ensure animation triggers multiple times
      className="bg-primary my-20 p-8 sm:p-4 relative"
    >
      <div className="container mx-auto">
        <motion.div
          className="flex flex-row items-center"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* Content Section */}
          <motion.div
            className="lg:w-1/2 sm:w-2/3 w-full lg:text-left flex flex-col items-start"
            variants={fadeInFromLeft}
          >
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4"
              variants={fadeInFromLeft}
            >
              Let's work on something great together!
            </motion.h2>

            <motion.p
              className="text-white md:text-lg text-base my-6"
              variants={fadeInFromBottom}
            >
              Don't wait any longer to bring your engineering visions to life.
              Partner with us and experience unmatched service and quality.
            </motion.p>

            <motion.div variants={fadeInFromBottom}>
              <SecondaryBtn
                text="Get Free Quote"
                href=""
                className="hover:text-white hover:border-white hover:border border border-secondary"
              />
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="absolute sm:static w-40 right-0 bottom-0 lg:w-1/2 sm:w-2/6 mt-8 lg:mt-0 sm:flex justify-end"
            variants={scaleUp}
          >
            <img
              src="/manphone.png"
              alt="Man with Phone"
              className="lg:max-w-full h-auto sm:full sm:h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CtaBox;
