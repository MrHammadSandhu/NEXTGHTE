"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = ({ heading, heading2, heading3, text, text2, text3 }) => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const startCountAnimation = (index, endValue) => {
    let start = 0;
    const duration = 2000; // Total duration in ms
    const increment = Math.ceil(endValue / (duration / 16)); // Smooth increment
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(interval);
      }
      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = start;
        return newCounts;
      });
    }, 16); // 60fps for smooth count
  };

  useEffect(() => {
    if (inView) {
      const values = [1000, 500, 99];
      values.forEach((value, index) => startCountAnimation(index, value));
    } else {
      setCounts([0, 0, 0]); // Reset counts when out of view
    }
  }, [inView]);

  const containerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Smooth duration
        ease: "easeInOut", // Smooth easing
        staggerChildren: 0.3, // Delay for child animations
      },
    },
  };

  const childAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8, // Smooth duration for child animations
        ease: "easeInOut", // Smooth easing
      },
    },
  };

  return (
    <div id="why-choose-us" className="py-16" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerAnimation}
      >
        {/* Section Title */}
        <motion.div className="text-center mb-12" variants={childAnimation}>
          <h3 className="text-lg text-secondary font-bold">Why Choose Us?</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-primary my-8">
            Why Choose Gulf Horizon Telecom Est?
          </h2>
          <p className="text-textcolor text-base sm:text-lg md:w-1/2 w-full mx-auto">
            Core Values are what support the vision, shape the culture and
            reflect what an organization values. They are the essence of the
            organization’s identity – the principles, beliefs or philosophy of
            values:
          </p>
        </motion.div>

        {/* Animated Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerAnimation}
        >
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              className="relative group border rounded-3xl shadow-lg p-7 py-10 flex flex-col items-start justify-between overflow-hidden"
              variants={childAnimation}
            >
              <div className="relative z-10 pb-6 mb-6">
                <img
                  src={`/icon-why-choose-${item}.svg`}
                  alt={`icon-why-choose-${item}`}
                />
                <h3 className="text-xl lg:text-2xl font-semibold mb-7 mt-4 text-primary">
                  {item === 1 && `${heading}`}
                  {item === 2 && `${heading2}`}
                  {item === 3 && `${heading3}`}
                </h3>
                <p className="text-textcolor text-base sm:text-lg">
                  {item === 1 && `${text}`}
                  {item === 2 && `${text2}`}
                  {item === 3 && `${text3}`}
                </p>
              </div>
              <div className="relative z-10 text-start border-t py-5 w-full">
                <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary">
                  {counts[index]}
                  {item === 1 || item === 2 ? "+" : "%"}
                </h3>
                <p className="text-textcolor mt-3 text-lg font-semibold">
                  {item === 1 && "Projects Delivered"}
                  {item === 2 && "Happy Clients"}
                  {item === 3 && "Client Satisfaction"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
