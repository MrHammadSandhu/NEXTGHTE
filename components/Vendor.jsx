"use client";
import React from "react";
import "tailwindcss/tailwind.css";

const VendorSlider = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8"
            data-translate-key="section_title_vendor"
          >
            PRINCIPAL PARTNERS
          </h2>
          <p
            className="text-textcolor mt-6 md:w-1/2 mx-auto w-full  text-lg lg:text-xl"
            data-translate-key="section_description_vendor"
          >
            At GHTE, we collaborate with industry-leading partners to deliver
            cutting-edge technologies and innovative solutions. Our partnerships
            with renowned global brands ensure our clients receive the highest
            quality products backed by expertise and reliability across various
            industries.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative mt-20">
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
