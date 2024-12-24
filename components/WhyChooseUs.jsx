"use client";
import { useState, useEffect } from "react";

const CountCard = ({
  icon,
  heading,
  text,
  count,
  unit,
  subtext,
  datatranslatekeyheading,
  datatranslatekeytext,
  subtextdatakey,
}) => {
  return (
    <div className="relative group border rounded-3xl shadow-lg p-7 py-10 flex flex-col items-start justify-between overflow-hidden">
      <div className="relative z-10 pb-6 mb-6">
        <img src={icon} alt={heading} />
        <h3
          className="text-2xl lg:text-3xl font-medium  mt-10 mb-5 text-primary"
          data-translate-key={datatranslatekeyheading}
        >
          {heading}
        </h3>
        <p
          className="text-textcolor text-base sm:text-lg"
          data-translate-key={datatranslatekeytext}
        >
          {text}
        </p>
      </div>
      <div className="relative z-10 text-start border-t py-5 w-full">
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-primary">
          {count}
          {unit}
        </h3>
        <p
          className="text-textcolor mt-3 text-lg font-semibold"
          data-translate-key={subtextdatakey}
        >
          {subtext}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = ({
  heading,
  heading2,
  heading3,
  text,
  text2,
  text3,
  datatranslatekeyheading,
  datatranslatekeytext,
  datatranslatekeyheading2,
  datatranslatekeytext2,
  datatranslatekeyheading3,
  datatranslatekeytext3,
}) => {
  const [counts, setCounts] = useState([0, 0, 0]);

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
    const values = [1000, 500, 99];
    values.forEach((value, index) => startCountAnimation(index, value));
  }, []);

  return (
    <div id="why-choose-us" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3
            className="text-secondary sm:text-lg md:text-xl font-semibold"
            data-translate-key="main_page_why_choose"
          >
            Why Choose Us?
          </h3>
          <h2
            className="text-3xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold  text-primary my-8"
            data-translate-key="main_page_why_chooseheading"
          >
            Why Choose Gulf Horizon Telecom Est?
          </h2>
          <p
            className="text-textcolor text-base sm:text-lg md:w-1/2 w-full mx-auto"
            data-translate-key="main_page_why_choosepra"
          >
            Core Values are what support the vision, shape the culture and
            reflect what an organization values. They are the essence of the
            organization’s identity – the principles, beliefs or philosophy of
            values:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CountCard
            icon="/icon-why-choose-1.svg"
            heading={heading}
            text={text}
            count={counts[0]}
            unit="+"
            subtext="Projects Delivered"
            subtextdatakey="Projects_Delivered"
            datatranslatekeyheading={datatranslatekeyheading}
            datatranslatekeytext={datatranslatekeytext}
          />
          <CountCard
            icon="/icon-why-choose-2.svg"
            heading={heading2}
            text={text2}
            count={counts[1]}
            unit="+"
            subtext="Happy Clients"
            subtextdatakey="Happy_Clients"
            datatranslatekeyheading={datatranslatekeyheading2}
            datatranslatekeytext={datatranslatekeytext2}
          />
          <CountCard
            icon="/icon-why-choose-3.svg"
            heading={heading3}
            text={text3}
            count={counts[2]}
            unit="%"
            subtext="Client Satisfaction"
            subtextdatakey="Client_Satisfaction"
            datatranslatekeyheading={datatranslatekeyheading3}
            datatranslatekeytext={datatranslatekeytext3}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
