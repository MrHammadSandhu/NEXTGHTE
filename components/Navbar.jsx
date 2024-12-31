"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import LanguageTranslator from "./LanguageTranslator";
import { useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  // const handleClick = () => {
  //   if (toggle) toggle();

  // };

  return (
    <button
      className={`${className} relative group text-[18px] text-light hover:text-secondary`}
      // onClick={handleClick}
      onClick={() => {
        router.push(`${href}`);
      }}
    >
      {title}
      <span
        className={`inline-block w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-700`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is open
  const router = useRouter();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null); // Close all dropdowns when menu closes
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="w-full px-4 py-10 font-medium flex items-center justify-between  lg:px-16 border-b-2 border-light/20 relative z-50">
      {/* Logo */}
      <div className="text-dark font-bold text-xl">
        <img src="/logo.png" alt="" className="w-36" />
      </div>

      {/* Mobile menu toggle button */}
      <button
        className="flex flex-col justify-center items-center xl:hidden bg-primary p-3 px-2 rounded-md"
        onClick={toggleMenu}
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden xl:flex space-x-8 px-5 items-center">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />

        {/* Desktop Dropdowns */}
        {["Power", "Security", "IT"].map((category) => (
          <div key={category} className="relative group text-light text-[18px]">
            <button className="flex items-center gap-x-2 group-hover:font-semibold ">
              {category}
              {/* Add Down Arrow Icon */}
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-primary text-light shadow-lg py-4 rounded-lg w-[200px] -left-5">
              {category === "Power" && (
                <>
                  <button
                    onClick={() => {
                      router.push("/ups-saudi-arabia");
                    }}
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    UPS System
                  </button>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Batteries
                  </Link>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Generators
                  </Link>
                  <button
                    onClick={() => {
                      router.push("/load-bank-rental-saudi-arabia");
                    }}
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Load Bank
                  </button>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    AVR's
                  </Link>
                </>
              )}
              {category === "Security" && (
                <>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    CCTV
                  </Link>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Access Control
                  </Link>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Fire-Fighting
                  </Link>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Cyber Security
                  </Link>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Sound System
                  </Link>
                </>
              )}
              {category === "IT" && (
                <>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Racks
                  </Link>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Networking / Switches
                  </Link>
                  <Link
                    href="/projects/project1"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                  >
                    Server's / Computer's
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}

        <CustomLink href="/project" title="Projects" />
        <CustomLink href="/articles" title="Contact Us" />
        <LanguageTranslator />
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-w-[70vw] flex flex-col justify-between items-center absolute top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg backdrop-blur-md py-20 !transform bg-primary xl:hidden"
        >
          <CustomLink
            href="/"
            title="Home"
            toggle={closeMenu}
            className="mb-4"
          />
          <CustomLink
            href="/about"
            title="About"
            toggle={closeMenu}
            className="mb-4"
          />

          {/* Mobile Dropdowns */}
          {["Power", "Security", "IT"].map((category) => (
            <div
              key={category}
              className="w-full flex flex-col items-center mb-4"
            >
              <button
                className="w-full text-center text-light flex items-center justify-center hover:text-secondary transition-all text-[18px]"
                onClick={() => toggleDropdown(category)}
              >
                {category}
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {activeDropdown === category && (
                <div className="w-full flex flex-col items-center justify-center py-2 rounded-md">
                  {category === "Power" && (
                    <>
                      <button
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={() => {
                          router.push("/ups-saudi-arabia");
                        }}
                      >
                        UPS System
                      </button>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Batteries
                      </Link>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Genrator's
                      </Link>
                      <button
                        onClick={() => {
                          router.push("/load-bank-rental-saudi-arabia");
                        }}
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                      >
                        Load Bank's
                      </button>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        AVR's
                      </Link>
                    </>
                  )}
                  {category === "Security" && (
                    <>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        CCTV
                      </Link>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Access Control
                      </Link>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Fire-Fighting
                      </Link>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Cyber Security
                      </Link>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Sound System
                      </Link>
                    </>
                  )}
                  {category === "IT" && (
                    <>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Racks
                      </Link>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Networking / Switches
                      </Link>
                      <Link
                        href="/projects/project1"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                      >
                        Server's / Computer's
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          <CustomLink href="/articles" title="Articles" toggle={closeMenu} />
          <LanguageTranslator className="bg-secondary mt-8" />
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
