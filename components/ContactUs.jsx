"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="bg-light bg-center bg-cover py-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Sidebar */}
          <div className="bg-primary text-center rounded-3xl p-8 pb-0">
            {/* Phone Info */}
            <div className="my-8">
              <img
                src="/icon-phone.svg"
                alt="Phone Icon"
                className="mx-auto w-12 mb-4"
              />
              <p className="text-white opacity-75 font-semibold text-lg">
                Call Support Center 24/7
              </p>
              <h3 className="text-white text-2xl font-semibold mt-2">
                +966 122 873 071
              </h3>
            </div>

            {/* Email Info */}
            <div className="my-8">
              <img
                src="/icon-mail.svg"
                alt="Mail Icon"
                className="mx-auto w-12 mb-4"
              />
              <p className="text-white opacity-75 font-semibold text-lg">
                Write to us
              </p>
              <h3 className="text-white text-xl xl:text-2xl font-semibold mt-2 ">
                Info@gulfhorizontele.com
              </h3>
            </div>

            {/* Robot Image */}
            <div className="mx-auto w-32 md:w-48">
              <img
                src="/robotphone.png"
                alt="Robot Phone"
                className="grayscale hover:grayscale-0 transition"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-14">
            <div className="mb-8">
              <h3 className="text-secondary sm:text-lg md:text-xl font-semibold">
                Contact Us
              </h3>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                Get in touch with us
              </h2>
            </div>

            <form id="inquiry-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                  placeholder="Enter your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                  placeholder="Phone number"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                  placeholder="Subject"
                  required
                />
              </div>

              <textarea
                name="msg"
                id="msg"
                rows="4"
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                placeholder="Message"
                required
              ></textarea>

              <div className="flex justify-start">
                <Link
                  href="project.html"
                  className="group relative text-white flex items-center justify-between py-3 px-8 rounded-xl border-light border-[1px] bg-secondary overflow-hidden transition-all duration-300"
                >
                  {/* Sliding Background */}
                  <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

                  {/* Button Text */}
                  <span className="relative z-10">Submit</span>

                  {/* Arrow Icon */}
                  <img
                    src="/arrow.svg"
                    alt="svg"
                    className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
