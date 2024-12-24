"use client";
import Link from "next/link";
import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-primary pt-4 sm:pt-6 lg:pt-8">
      <div className="pt-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {/* About Section */}
            <div className="col-span-full lg:col-span-2">
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
            </div>

            {/* Our Services Section */}
            <div>
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
            </div>

            {/* Company Section */}
            <div>
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
            </div>

            {/* Contact Us Section */}
            <div>
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
            </div>
          </div>

          <div className="border-t py-8 text-center text-[16px] text-white">
            Copyright © 2024 GHTE. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
