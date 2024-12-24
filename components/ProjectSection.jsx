import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    title: "STC Headquarters",
    titleKey: "stc_headquarters_title",
    description:
      "Expert-led data center testing with UPTIME, employing load banks to commit maximum performance.",
    descriptionKey: "stc_headquarters_description",
    image: "/stc.png",
    link: "STCHeadQuarter.html",
  },
  {
    title: "Riyadh Metro",
    titleKey: "riyadh_metro_title",
    description:
      "UPS testing to ensure continuous metro operations between power outages.",
    descriptionKey: "riyadh_metro_description",
    image: "/riyadhmetro.png",
    link: "Riyadh-metro.html",
  },
  {
    title: "National CyberCrime Agency",
    titleKey: "national_cybercrime_agency_title",
    description:
      "Data center load testing to ensure clear and safe performance within the highest demanding situation.",
    descriptionKey: "national_cybercrime_agency_description",
    image: "/cybercrime.png",
    link: "Cybercrime.html",
  },
  {
    title: "Batterjee Medical College",
    titleKey: "batterjee_medical_college_title",
    description:
      "Charge testing for dependable data center operations providing critical academic framework.",
    descriptionKey: "batterjee_medical_college_description",
    image: "/batterjee.png",
    link: "BatterjeeMedicalCollege.html",
  },
];

const ProjectsSection = () => {
  return (
    <div className="py-16 px-4 lg:px-20 flex flex-col items-center justify-between">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3
          className="text-secondary sm:text-lg md:text-xl font-semibold"
          data-translate-key="projects_section_title"
        >
          Our Projects
        </h3>
        <h2
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-primary mt-2"
          data-translate-key="featured_projects_title"
        >
          Our Featured Projects
        </h2>
        <p
          className="text-textcolor  text-lg lg:text-xl my-8 max-w-4xl mx-auto"
          data-translate-key="projects_section_overview"
        >
          Our complete portfolio shows our expertise in power systems, IT
          solutions, and security services throughout various industries.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden mx-auto max-w-sm text-center group"
          >
            <div className="overflow-hidden rounded-3xl relative">
              <Link href={project.link} className="block relative ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full  aspect-[1/1.2] object-cover transition-transform duration-300 group-hover:scale-105 rounded-3xl"
                />
                <div className="absolute inset-0  bg-gradient-to-b from-black/50 via-black/50 to-black/70 rounded-lg"></div>
              </Link>
            </div>

            {/* Project Info */}
            <div className="absolute bottom-12 left-6 right-6 bg-opacity-0 text-left transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-100 transition-all duration-500">
              <h3
                className="text-xl font-bold text-white capitalize mb-7"
                data-translate-key={project.titleKey}
              >
                {project.title}
              </h3>
              <p
                className="text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                data-translate-key={project.descriptionKey}
              >
                {project.description}
              </p>
              <a
                href={project.link}
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
          </div>
        ))}
      </div>

      {/* View Projects Button */}
      <div className="text-center mt-12">
        <Link
          href="project.html"
          className="group relative text-white flex items-center justify-between py-3 sm:py-4 lg:py-4 rounded-xl border-light border-[1px] px-4 sm:px-6 lg:px-8 text-base sm:text-lg lg:text-xl font-semibold bg-secondary overflow-hidden transition-all duration-300"
        >
          {/* Sliding Background */}
          <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

          {/* Button Text */}
          <span
            className="relative z-10"
            data-translate-key="View_All_Projects"
          >
            View Projects
          </span>

          {/* Arrow Icon */}
          <img
            src="/arrow.svg"
            alt="svg"
            className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
