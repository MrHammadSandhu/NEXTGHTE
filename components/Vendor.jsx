"use client";
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VendorSlider = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const titleDescriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto">
        {/* Title and Description */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate={controls}
          variants={titleDescriptionVariants}
        >
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

        {/* Slider */}
        <div className="overflow-hidden relative mt-20">
          <div className="flex animate-scroll whitespace-nowrap">
            {Array(14)
              .fill(null)
              .map((_, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-48 h-24 mx-4 rounded-md flex items-center justify-center"
                  initial="hidden"
                  animate={controls}
                  variants={logoVariants}
                >
                  <img
                    src={`/vendor${(index % 8) + 1}.png`}
                    alt={`Vendor ${(index % 8) + 1}`}
                    className="object-contain max-h-full"
                  />
                </motion.div>
              ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
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
    </section>
  );
};

export default VendorSlider;
