import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    title: "STC Headquarters",
    description:
      "GHTE, with UPTIME, tested data centers to maximum capacity expertly.",
    image: "/stc.png",
    link: "STCHeadQuarter.html",
  },
  {
    title: "Riyadh Metro",
    description:
      "Riyadh Metro UPS Testing ensures smooth operations during power outages.",
    image: "/riyadhmetro.png",
    link: "Riyadh-metro.html",
  },
  {
    title: "National CyberCrime Agency",
    description:
      "National CyberCrime Agency Load Testing ensures efficient, secure high-demand operations.",
    image: "/cybercrime.png",
    link: "Cybercrime.html",
  },
  {
    title: "Batterjee Medical College",
    description:
      "Batterjee Medical College tests power systems to ensure reliable operations.",
    image: "/batterjee.png",
    link: "BatterjeeMedicalCollege.html",
  },
];

const ProjectsSection = () => {
  return (
    <div className="py-16 px-4 lg:px-20 flex flex-col items-center justify-between">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-xl font-medium text-secondary"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Projects
        </motion.h3>
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-primary mt-2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Selected Projects
        </motion.h2>
        <motion.p
          className="text-textcolor mt-4 max-w-2xl mx-auto"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our projects cover a wide range of services, including testing and
          commissioning of critical systems at locations like STC Headquarters
          and Riyadh Metro, along with engineering services for healthcare
          facilities. We also specialize in power systems and security
          solutions, providing reliable UPS installations and advanced CCTV
          setups for various sectors.
        </motion.p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden mx-auto max-w-sm text-center group"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl relative">
              <Link href={project.link} className="block relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
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
                {project.title}
              </motion.h3>
              <motion.p
                className="text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>
              <motion.a
                href={project.link}
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
      </div>

      {/* View Projects Button */}
      <motion.div
        className="text-center mt-12"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          href="project.html"
          className="group relative text-white flex items-center justify-between py-3 sm:py-4 lg:py-4 rounded-xl border-light border-[1px] px-4 sm:px-6 lg:px-8 text-base sm:text-lg lg:text-xl font-semibold bg-secondary overflow-hidden transition-all duration-300"
          data-key="project_btn"
        >
          {/* Sliding Background */}
          <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

          {/* Button Text */}
          <span className="relative z-10">View Projects</span>

          {/* Arrow Icon */}
          <img
            src="/arrow.svg"
            alt="svg"
            className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
