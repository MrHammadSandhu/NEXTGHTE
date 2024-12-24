"use client";
import React from "react";
import SecondaryBtn from "./SecondaryBtn";

const CtaBox = () => {
  return (
    <div className="bg-primary my-20 p-8 sm:p-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-row items-center">
          {/* Content Section */}
          <div className="lg:w-1/2 sm:w-2/3 w-full lg:text-left flex flex-col items-start">
            <h2
              className="text-3xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold text-white mb-4"
              data-translate-key="cta_heading"
            >
              Let’s Work on Something Great Together!
            </h2>

            <p
              className="text-white text-lg lg:text-xl my-8"
              data-translate-key="cta_description"
            >
              We are coupled with Gulf Horizon Telecom Est and undergo
              exceptional service, quality, and innovation. Let’s make your
              engineering imagination come to life with solutions that stand
              with the time.
            </p>

            <div>
              <SecondaryBtn
                text="Get a Free Quote Today!"
                datatranslatekey="cta_button"
                href=""
                className="hover:text-white hover:border-white hover:border border border-secondary"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="absolute sm:static w-40 right-0 bottom-0 lg:w-1/2 sm:w-2/6 mt-8 lg:mt-0 sm:flex justify-end">
            <img
              src="/manphone.png"
              alt="Man with Phone"
              className="lg:max-w-full h-auto sm:full sm:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBox;
