"use client";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const page = () => {
  const services = [
    {
      category: "Power",
      items: [
        {
          title: "Saudia Technic",
          description:
            "Saudia Technic projects include power systems supply, installation, testing, and commissioning.",
          image: "saudiatechnic.png",
          link: "/ups",
        },
        {
          title: "Royal Comission of AlUla",
          description:
            "AlUla UPS Systems supply, installation, testing, and commissioning ensure continuous power.",
          image: "/AlUla.png",
          link: "/loadbank",
        },
        {
          title: "National Water Company Jeddah",
          description:
            "National Water Company Load Banks ensure reliable backup power during outages.",
          image: "/natonalwatercompany.png",
          link: "/loadbank",
        },
        {
          title: "King Abdulaziz Endowment",
          description:
            "AVR System for King Abdulaziz Endowment ensures stable voltage and reliable power.",
          image: "/endowment.png",
          link: "/loadbank",
        },
        {
          title: "⁠King Salman Air Base",
          description:
            "Outdoor UPS Systems at King Salman Air Base ensure reliable backup power during outages.",
          image: "/kingsalmanairbase.jpg",
          link: "/loadbank",
        },
      ],
    },
    {
      category: "Security",
      items: [
        {
          title: "Al Kofeia Restaurant",
          description:
            "CCTV Solution for Al Kofeia Restaurant ensures enhanced security and surveillance.",
          image: "/alkofia.png",
          link: "/cctv",
        },
        {
          title: "Al Falah Bukhari Restaurant Jeddah",
          description:
            "CCTV Solution for Al Falah Bukhari Restaurant ensures continuous security monitoring.",
          image: "/alfalah.png",
          link: "/cctv",
        },
        {
          title: "⁠ASIC",
          description:
            "ASIC projects include testing, commissioning, and security solutions for reliable performance.",
          image: "/asic.png",
          link: "/cctv",
        },
      ],
    },
    {
      category: "IT",
      items: [
        {
          title: "The Ritz-Carlton Hotel",
          description:
            "Ritz-Carlton Hotel projects include power and security solutions for seamless operations.",
          image: "/Ritzhotel.png",
          link: "/servercomputer",
        },
      ],
    },
    {
      category: "Testing & Comissioning",
      items: [
        {
          title: "STC HeadQuarters",
          description:
            "UPTIME GHTE led data center testing with engineers and load banks.",
          image: "/stc.png",
          link: "/servercomputer",
        },
        {
          title: "King Faisal Air Academy",
          description:
            "King Faisal Air Academy projects include power and security solutions for reliable performance.",
          image: "/KingFaisalAirAccadmy.png",
          link: "/servercomputer",
        },
        {
          title: "King Abdulaziz International Airport",
          description:
            "King Abdulaziz Airport projects include power and security systems for reliable operations.",
          image: "/KingAbdulazizinternationaairport.jpg",
          link: "/servercomputer",
        },
        {
          title: "Riyadh Metro",
          description:
            "Riyadh Metro UPS Testing ensures smooth operations during power outages.",
          image: "/riyadhmetro.png",
          link: "/servercomputer",
        },
        {
          title: "Ma’aden",
          description:
            "Ma’aden projects include power systems supply, installation, testing, and commissioning.",
          image: "/Ma’aden.png",
          link: "/servercomputer",
        },
        {
          title: "NEOM",
          description:
            "NEOM Generator Testing ensures reliable backup power during outages.",
          image: "/neom.png",
          link: "/servercomputer",
        },
        {
          title: "Aramco",
          description:
            "Aramco projects include power and security systems supply, installation, and testing.",
          image: "/Aramco.jpg",
          link: "/servercomputer",
        },
        {
          title: "Mecca Haram",
          description:
            "Makkah Haram projects included power and security systems installation and testing.",
          image: "/MakkahHaram.png",
          link: "/servercomputer",
        },
        {
          title: "National CyberCrime Agency",
          description:
            "CyberCrime Agency Data Center Testing ensures efficient and reliable high-demand operations.",
          image: "/cybercrime.png",
          link: "/servercomputer",
        },
      ],
    },
    {
      category: "Enggineering",
      items: [
        {
          title: "King Salman Hospital Madinah",
          description:
            "King Salman Hospital project ensures reliable power, data, and infrastructure systems.",
          image: "/samanhospita.png",
          link: "/servercomputer",
        },
        {
          title: "⁠Batterjee Medical College",
          description:
            "Batterjee College tests data center and power systems for reliable operations.",
          image: "/batterjee.png",
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
    <>
      {/* <PageHeader
        title="Our Projects"
        backgroundImage="/projectbanner.png"
        backto="Home"
        breadcrumbs={[{ name: "PROJECTS", link: "", active: true }]}
      /> */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-2 md:px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">
              Our projects
            </h3>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-primary">
              OUR SELECTED PROJECTS
            </h2>
            <p className="lg:w-2/3 mx-auto text-base sm:text-lg text-textcolor mt-4">
              Our projects cover a wide range of services, including testing and
              commissioning of critical systems at locations like STC
              Headquarters and Riyadh Metro, along with engineering services for
              healthcare facilities. We also specialize in power systems and
              security solutions, providing reliable UPS installations and
              advanced CCTV setups for various sectors.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center">
            <ul className="flex flex-wrap space-x-2 space-y-2 items-center justify-center">
              <li
                className={`px-4 py-2 rounded cursor-pointer mt-2 ${
                  selectedCategory === "All"
                    ? "bg-secondary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
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
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden rounded-3xl relative">
                  <Link href={service.link} className="block relative">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full rounded-lg aspect-[1/1.2] object-cover transition-transform duration-300 group-hover:scale-105"
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    />
                    <div className="absolute inset-0  bg-gradient-to-b from-black/50 via-black/50 to-black/70 rounded-lg"></div>
                  </Link>
                </div>

                {/* Project Info */}
                <motion.div
                  className="absolute bottom-12 left-6 right-6 bg-opacity-0 text-left transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-100 transition-all duration-500"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-xl font-bold text-white capitalize mb-7"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.a
                    href={service.link}
                    className="absolute text-secondary font-semibold capitalize text-lg hover:text-white flex items-center justify-start -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    View more
                    <img
                      src="/arrow.svg"
                      alt="svg"
                      className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;
