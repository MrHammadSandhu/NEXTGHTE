import React from "react";
import "tailwindcss/tailwind.css";
import { motion } from "motion/react";

const VendorSlider = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto">
        {/* Title and Description */}
        <motion.div className="text-center mb-8" variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            PRINCIPAL PARTNERS
          </h2>
          <p className="text-textcolor mt-6 md:w-1/2 mx-auto w-full sm:text-lg text-base">
            At GHTE, we collaborate with industry-leading partners to deliver
            cutting-edge technologies and innovative solutions. Our partnerships
            with renowned global brands ensure our clients receive the highest
            quality products backed by expertise and reliability across various
            industries.
          </p>
        </motion.div>

        {/* Slider Animation */}
        <motion.div
          className="overflow-hidden relative mt-20"
          variants={fadeIn}
        >
          <div className="flex animate-scroll whitespace-nowrap">
            {Array(14)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex-none w-48 h-24 mx-4 rounded-md flex items-center justify-center"
                >
                  <img
                    src={`/vendor${(index % 8) + 1}.png`}
                    alt={`Vendor ${(index % 8) + 1}`}
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-12rem * 7));
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default VendorSlider;
