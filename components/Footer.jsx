"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

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
    <footer className="bg-primary pt-4 sm:pt-6 lg:pt-8" ref={ref}>
      <motion.div
        className="pt-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerAnimation}
      >
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            <motion.div
              className="col-span-full lg:col-span-2"
              variants={childAnimation}
            >
              <div className="mb-4 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo"
                >
                  <h1 className="text-5xl text-white ">GHTE</h1>
                </a>
              </div>

              <p className="mb-6 text-white sm:pr-8 text-[16px] font-semibold">
                Having a prominent position in the Power Electronics market,
                GHTE has partnered with world-renowned leading manufacturers to
                provide our valued customers with quality products and systems
                for long-term service.
              </p>
              <SocialIcons />
            </motion.div>

            {/* Our Services Section */}
            <motion.div variants={childAnimation}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                Our Services
              </div>
              <nav className="flex flex-col gap-4">
                {[
                  "Load Bank",
                  "Access Control",
                  "Generators",
                  "Cyber Security",
                ].map((service, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                  >
                    <img src="/arrow.svg" alt="" />
                    {service}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Company Section */}
            <motion.div variants={childAnimation}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                Company
              </div>
              <nav className="flex flex-col gap-4">
                {["About Us", "Projects", "Company Profile", "Contact Us"].map(
                  (item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                    >
                      <img src="/arrow.svg" alt="" />
                      {item}
                    </Link>
                  )
                )}
              </nav>
            </motion.div>

            {/* Contact Us Section */}
            <motion.div variants={childAnimation}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                Contact Us
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/icon-phone.svg" alt="" className="w-6 h-6" />
                  +966 122 873 071
                </Link>
                <Link
                  href="#"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/icon-mail.svg" alt="" className="w-6 h-6" />
                  Info@gulfhorizontele.com
                </Link>
                <Link
                  href="#"
                  className="text-white flex items-start justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/icon-location.svg" alt="" className="w-6 h-6" />
                  Gulf Horizon Telecom Est, Level 7, Al Murjanah Tower, Prince
                  Sultan St., Jeddah 21433
                </Link>
              </nav>
            </motion.div>
          </div>

          <motion.div
            className="border-t py-8 text-center text-[16px] text-white"
            variants={childAnimation}
          >
            Copyright © 2024 GHTE. All Rights Reserved.
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
