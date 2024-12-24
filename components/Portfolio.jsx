"use client";
import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const childAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Portfolio = () => {
  const services = [
    {
      category: "Power",
      categoryKey: "category_power",
      items: [
        {
          title: "(UPS) in Saudi Arabia",
          titleKey: "title_ups_system",
          description:
            "Invent Gulf Horizon Tele’s digital  UPS systems for each requirement, from industrial to modular solutions. As dealers for Schneider Electric and RELIABILITY POWER SYSTEMS, we are committed to remarkable power and unbeatable support.",
          descriptionKey: "description_ups_system",
          image: "ups.png",
          link: "/ups",
        },
        {
          title: "Load Bank Rental Services",
          titleKey: "title_load_bank",
          description:
            "Gulf Horizon Tele provides reliable AC and DC load banks for sale and rental usage perfect for generator experimenting, data centers, and industrial usage. With 15+ years of expertise, we offer modified solutions and expert support.",
          descriptionKey: "description_load_bank",
          image: "/loadbank.png",
          link: "/loadbank",
        },
        {
          title: "Reliable Battery Solutions",
          titleKey: "title_batteries",
          description:
            "Gulf Horizon Tele is particularly in the highest battery solutions, providing VRLA, Lithium-ion, and industrial batteries. With 20+ years of expertise, we make, install, and continue energy-systematic systems that monitor your requirements.",
          descriptionKey: "description_batteries",
          image: "/batteries.png",
          link: "/loadbank",
        },
        {
          title: "Automatic Voltage Regulator (AVR) Services",
          titleKey: "title_avrs",
          description:
            "At Gulf Horizon Tele, we are best at providing high-quality Automatic Voltage Regulators (AVRs) for homes, offices, and industrial applications. Save from your electrical systems with our remarkable solutions, containing 220V AVRs, 3-phase regulators, and generator-specific models.",
          descriptionKey: "description_avrs",
          image: "/avr.png",
          link: "/loadbank",
        },
        {
          title: "Reliable Generator Solutions",
          titleKey: "title_generators",
          description:
            "Gulf Horizon Tele provides the highest quality generator sales, rentals, maintenance, and spare parts guide to industrial, commercial, and domestic requirements. Even if you want diesel generators, portable solutions, or light tower rentals, we are committed to uninterrupted power with expert support and quick service.",
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
          title: "CCTV Systems Services",
          titleKey: "title_cctv",
          description:
            "Gulf HorizonTele provides premium CCTV solutions containing installation, maintenance, and digital custom plans for homes, businesses, and industries in Saudi Arabia. With expertise in guiding brands such as HikVision, we are committed to your property’s safety using the main parts of technology that fulfill your requirements.",
          descriptionKey: "description_cctv",
          image: "/cctv.png",
          link: "/cctv",
        },
        {
          title: "Access Control Systems",
          titleKey: "title_access_control",
          description:
            "Gulf Horizon Tele offers modern access control systems in Saudi Arabia, promoting biometric, mobile, and cloud-based solutions. Increase your security system with each level of technology and smooth integration.",
          descriptionKey: "description_access_control",
          image: "/accesscontroll.png",
          link: "/cctv",
        },
        {
          title: "Fire Fighting Systems",
          titleKey: "title_fire_extinguishing",
          description:
            "Gulf Horizon Tele delivers modern fire fighting systems that contain alarms, sprinklers, and suppression solutions, committed to security and compliance around Saudi Arabia.",
          descriptionKey: "description_fire_extinguishing",
          image: "/fire.png",
          link: "/cctv",
        },
        {
          title: "Sound System Services",
          titleKey: "title_sound_system",
          description:
            "Gulf Horizon Tele provides top-class sound system services in Saudi Arabia, promoting brands such as Sony, Bose, and JBL. Our service is from home theatres to car audio systems, we are committed to professional installation and affordable rates.",
          descriptionKey: "description_sound_system",
          image: "/sound.png",
          link: "/cctv",
        },
        {
          title: "Cybersecurity Services",
          titleKey: "title_cyber_security",
          description:
            "Gulf Horizon Tele provides complete cybersecurity services in Saudi Arabia, containing risky assessment, incident response, and dangers management, committed to your business protection.",
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
          title: "Server and Computer Solutions",
          titleKey: "title_servers_computers",
          description:
            "Gulf Horizon Tele delivers high class servers, firewalls, desktops, and laptops for businesses throughout Saudi Arabia, committed to smooth operations with remarkable and safe technology solutions.",
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
          title: "Racks and Power Distribution Units (PDUs)",
          titleKey: "title_racks",
          description:
            "Gulf Horizon Tele provides modified server racks and intelligent PDUs for data centers, IT frameworks, and businesses throughout Saudi Arabia. Our solutions guarantee smooth power distribution, logical management, and excellent performance.",
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

  const controls = useAnimation(); // For controlling animations
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger every time the element enters or leaves
    threshold: 0.1, // 30% of the section is visible
  });

  // Trigger animation based on inView
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="py-16 bg-light"
      variants={containerAnimation}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-4 sm:px-2 md:px-4 lg:px-8">
        {/* Heading Section */}
        <motion.div className="text-center mb-12" variants={childAnimation}>
          <h3
            className="text-lg sm:text-xl font-semibold text-secondary mb-2"
            data-translate-key="service"
          >
            Let’s Make These Solutions Together.
          </h3>
          <h2
            className="text-3xl sm:text-5xl font-bold mb-4 text-primary"
            data-translate-key="serviceheading"
          >
            What Solutions Do We Offer?
          </h2>
          <p
            className="lg:w-2/3 mx-auto text-base sm:text-lg text-textcolor mt-4"
            data-translate-key="servicedescription"
          >
            At Gulf Horizon Telecom Est, we deliver servers for particular
            services in Power, Security, and IT products, guaranteeing smooth
            operations while preventing prospective risks. Our solutions
            contain:
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-8 flex flex-wrap justify-center"
          variants={childAnimation}
        >
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
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-3"
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
                  className="text-xl font-bold text-white capitalize mb-6"
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
    </motion.div>
  );
};

export default Portfolio;
