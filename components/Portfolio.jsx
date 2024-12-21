"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const Portfolio = () => {
  const services = [
    {
      category: "Power",
      categoryKey: "category_power",
      items: [
        {
          title: "UPS System",
          titleKey: "title_ups_system",
          description:
            "Our UPS ensures continuous power, offering peace of mind against unexpected outages and disruptions.",
          descriptionKey: "description_ups_system",
          image: "ups.png",
          link: "/ups",
        },
        {
          title: "Load Bank",
          titleKey: "title_load_bank",
          description:
            "Our load banks ensure reliable power for all your needs.",
          descriptionKey: "description_load_bank",
          image: "/loadbank.png",
          link: "/loadbank",
        },
        {
          title: "Batteries",
          titleKey: "title_batteries",
          description:
            "Our batteries ensure reliable power for all your needs.",
          descriptionKey: "description_batteries",
          image: "/batteries.png",
          link: "/loadbank",
        },
        {
          title: "AVR's",
          titleKey: "title_avrs",
          description:
            "Our AVRs and voltage stabilizers ensure stable power, protecting your equipment from voltage fluctuations.",
          descriptionKey: "description_avrs",
          image: "/avr.png",
          link: "/loadbank",
        },
        {
          title: "Generators",
          titleKey: "title_generators",
          description:
            "Our generators provide reliable backup power, ensuring your operations stay uninterrupted.",
          descriptionKey: "description_generators",
          image: "/genraters.png",
          link: "/loadbank",
        },
      ],
    },
    {
      category: "Security",
      categoryKey: "category_security",
      items: [
        {
          title: "CCTV",
          titleKey: "title_cctv",
          description:
            "Quality is our legacy; trust in reliable, long-lasting CCTV systems.",
          descriptionKey: "description_cctv",
          image: "/cctv.png",
          link: "/cctv",
        },
        {
          title: "Access Control",
          titleKey: "title_access_control",
          description:
            "Excellence is our legacy; trust in secure, reliable access control systems.",
          descriptionKey: "description_access_control",
          image: "/accesscontroll.png",
          link: "/cctv",
        },
        {
          title: "Fire Extinguishing Systems",
          titleKey: "title_fire_extinguishing",
          description:
            "Mastery reflects our legacy; trust in reliable fire extinguishing systems.",
          descriptionKey: "description_fire_extinguishing",
          image: "/fire.png",
          link: "/cctv",
        },
        {
          title: "Sound System",
          titleKey: "title_sound_system",
          description:
            "Immersive audio defines our legacy; trust in precision-engineered sound solutions.",
          descriptionKey: "description_sound_system",
          image: "/sound.png",
          link: "/cctv",
        },
        {
          title: "Cyber Security",
          titleKey: "title_cyber_security",
          description:
            "Commitment shapes our legacy; trust in reliable cybersecurity measures.",
          descriptionKey: "description_cyber_security",
          image: "/cybersecurity.png",
          link: "/cctv",
        },
      ],
    },
    {
      category: "IT",
      categoryKey: "category_it",
      items: [
        {
          title: "Servers / Computers",
          titleKey: "title_servers_computers",
          description:
            "Dedication builds our legacy; count on us for reliable server and computer solutions.",
          descriptionKey: "description_servers_computers",
          image: "/server.png",
          link: "/servercomputer",
        },
        {
          title: "Networking / Switches",
          titleKey: "title_networking_switches",
          description:
            "Commitment shapes our legacy; rely on us for high-performance switches.",
          descriptionKey: "description_networking_switches",
          image: "/networking.png",
          link: "/servercomputer",
        },
        {
          title: "Racks",
          titleKey: "title_racks",
          description:
            "Stability and organization shape our legacy; trust in durable and efficient rack solutions.",
          descriptionKey: "description_racks",
          image: "/racks.png",
          link: "/servercomputer",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services.flatMap((service) => service.items)
      : services.find((service) => service.category === selectedCategory)
          ?.items || [];

  const containerAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const childAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <div className="py-16 bg-light">
      <div className="container mx-auto px-4 sm:px-2 md:px-4 lg:px-8">
        <div className="text-center mb-12">
          <h3
            className="text-lg sm:text-xl font-semibold text-secondary mb-2"
            data-translate-key="service"
          >
            Let's make these solutions
          </h3>
          <h2
            className="text-3xl sm:text-5xl font-bold mb-4 text-primary"
            data-translate-key="serviceheading"
          >
            What Solutions Do We Offer
          </h2>
          <p
            className="lg:w-2/3 mx-auto text-base sm:text-lg text-textcolor mt-4"
            data-translate-key="servicedescription"
          >
            We provide one stop specialized services in Power, Security & IT
            products. Our solutions are designed to safeguard your systems and
            data against potential threats, ensuring optimal security for your
            operations. Additionally, our products deliver reliable and
            efficient energy solutions to support your technological and
            infrastructural requirements.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center">
          <ul className="flex space-x-4">
            <li
              className={`px-4 py-2 rounded cursor-pointer ${
                selectedCategory === "All"
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              data-translate-key="category_all"
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>
            {services.map((service, index) => (
              <li
                key={index}
                className={`px-4 py-2 rounded cursor-pointer ${
                  selectedCategory === service.category
                    ? "bg-secondary text-white"
                    : "bg-gray-200 text-textcolor font-semibold"
                }`}
                data-translate-key={service.categoryKey}
                onClick={() => setSelectedCategory(service.category)}
              >
                {service.category}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-3"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden mx-auto max-w-sm text-center group"
              variants={childAnimation}
            >
              <div className="overflow-hidden rounded-3xl relative">
                <a href={service.link} className="block relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-2xl aspect-[1/1.2] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70 rounded-lg"></div>
                </a>
              </div>
              <div className="absolute bottom-10 left-6 right-6 bg-opacity-0 text-left transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-100 transition-all duration-500">
                <h3
                  className="text-xl font-bold text-white capitalize mb-6 "
                  data-translate-key={service.titleKey}
                >
                  {service.title}
                </h3>
                <p
                  className="text-base md:text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                  data-translate-key={service.descriptionKey}
                >
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="absolute text-secondary font-semibold capitalize text-lg hover:text-white flex items-center justify-start -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                  data-translate-key="view_more"
                >
                  View more
                  <img
                    src="/arrow.svg"
                    alt="svg"
                    className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
