"use client";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectSection";
import CtaBox from "@/components/CtaBox";
import VendorSlider from "@/components/Vendor";
import ContactUs from "@/components/ContactUs";
import PrimaryBtn from "@/components/PrimaryBtn";
import TransparentBtn from "@/components/TransparentBtn";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat md:mt-10  md:mx-10 md:rounded-[40px] px-4">
        <Navbar />
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source src="/herogb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto sm:px-6 lg:px-8 py-[150px] sm:py-[150px] md:py-[240px] text-center">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h3
              className="text-secondary sm:text-lg md:text-xl font-bold"
              variants={fadeInUp}
              data-translate-key="welcome"
            >
              Welcome to Gulf Horizon Telecom Est
            </motion.h3>
            <motion.h2
              className="text-3xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-yellow-500 mt-2"
              variants={fadeInUp}
              data-translate-key="welcome_heading"
            >
              Explore how Gulf Horizon Telecom Est can help you achieve your
              goals.
            </motion.h2>
            <motion.p
              className="text-white text-lg lg:text-xl mt-4 "
              variants={fadeInUp}
              data-translate-key="welcome_description"
            >
              Your One-Stop Engineering Solution for Power, Security & IT Across
              the Kingdom At Gulf Horizon Telecom Est, we are best at providing
              perfect and reliable solutions for power security systems, IT
              infrastructure, and advanced security technologies. Even if you
              want uninterrupted energy, dependable data protection, or digital
              IT support, we are committed to ensuring your operations work
              smoothly and safely.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap justify-center gap-4"
              variants={fadeInUp}
            >
              <PrimaryBtn
                href=""
                text="Get Started"
                datatranslatekey="primary_btn_text1"
              />
              <TransparentBtn
                href=""
                text="View Projects"
                datatranslatekey="primary_btn_text2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <About />
      <Portfolio />
      <WhyChooseUs
        heading="Innovation solutions"
        text="We blend creativity and technology to tackle your toughest
                  challenges. Our forward-thinking approach and cutting-edge
                  tools ensure solutions that exceed expectations and drive
                  real, impactful results."
        heading2=" Quality craftsmanship"
        text2="We pride ourselves on meticulous attention to detail and
                  superior craftsmanship. Our commitment to excellence ensures
                  every project is completed with precision, delivering results
                  that stand the test of time."
        heading3="Expertise and Experience"
        text3=" With years of industry experience and deep expertise, we bring
                  a wealth of knowledge to every project. Our skilled team
                  delivers exceptional results, leveraging proven methods to
                  achieve your goals effectively."
      />
      <ProjectsSection />
      <CtaBox />
      <VendorSlider />
      <ContactUs />
    </>
  );
}
