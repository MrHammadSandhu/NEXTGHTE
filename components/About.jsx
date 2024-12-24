"use client";
import React from "react";
import CompanyBTn from "./CompanyBTn";
import Reach from "./Reach";

const About = () => {
  return (
    <div className="container mx-auto py-16 lg:py-32 px-4 sm:px-0">
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 lg:grid-cols-2 sm:gap-x-8 xl:gap-0">
        {/* Image Section */}
        <div className="w-full">
          <img
            className="w-full rounded-2xl md:hidden lg:flex xl:w-[80%]"
            src="/about.png"
            alt="About image"
          />
        </div>

        {/* Text Section */}
        <div className="mt-4 md:mt-0 text-center lg:text-start">
          {/* Heading */}
          <h3
            className="text-secondary sm:text-lg md:text-xl font-semibold"
            data-translate-key="Aboutus"
          >
            About Us
          </h3>

          {/* Subheading */}
          <h2
            className="mb-4 text-3xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold text-primary"
            data-translate-key="Aboutheading"
          >
            Gulf Horizon Telecom Est.
          </h2>

          {/* Paragraph */}
          <p
            className=" text-lg lg:text-xl my-10 w-full text-textcolor"
            data-translate-key="Aboutdescription"
          >
            With a powerful respect in the market, Gulf Horizon Telecom Est is
            pleased to partner with world-famous producers to make premier
            products and systems specially made for long-term reliability. Our
            clients believe us as a reliable solution for all projects required,
            from establishment to post-sales guidance.
          </p>

          {/* Reach Section */}
          <div>
            <Reach />
          </div>

          {/* Button */}
          <div>
            <CompanyBTn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
