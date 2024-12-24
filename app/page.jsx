"use client";
import Navbar from "@/components/Navbar";
import PrimaryBtn from "@/components/PrimaryBtn";
import TransparentBtn from "@/components/TransparentBtn";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectSection";
import CtaBox from "@/components/CtaBox";
import VendorSlider from "@/components/Vendor";
import ContactUs from "@/components/ContactUs";

const containerAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Increased duration for smoothness
      ease: "easeOut", // Smooth easing
      staggerChildren: 0.3, // Slightly more delay between child animations
    },
  },
};

const childAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6, // Smooth entry for each child
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.1, // Start animation when 10% of the element is in view
    triggerOnce: true, // Allow repeated animations
  });

  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat md:mt-10 md:mx-10 md:rounded-[40px] px-4 scroll-smooth">
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
        <motion.div
          ref={ref}
          className="relative mx-auto sm:px-6 lg:px-8 py-[150px] sm:py-[150px] md:py-[240px] text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          variants={containerAnimation}
        >
          <div className="max-w-5xl mx-auto">
            <motion.h3
              className="text-secondary sm:text-lg md:text-xl font-bold"
              data-translate-key="welcome"
              variants={childAnimation}
            >
              Welcome to Gulf Horizon Telecom Est
            </motion.h3>
            <motion.h2
              className="text-3xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-yellow-500 mt-2"
              data-translate-key="welcome_heading"
              variants={childAnimation}
            >
              Explore how Gulf Horizon Telecom Est can help you achieve your
              goals.
            </motion.h2>
            <motion.p
              className="text-white text-lg lg:text-xl mt-4"
              data-translate-key="welcome_description"
              variants={childAnimation}
            >
              Your One-Stop Engineering Solution for Power, Security & IT Across
              the Kingdom. At Gulf Horizon Telecom Est, we are best at providing
              perfect and reliable solutions for power security systems, IT
              infrastructure, and advanced security technologies. Even if you
              want uninterrupted energy, dependable data protection, or digital
              IT support, we are committed to ensuring your operations work
              smoothly and safely.
            </motion.p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
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
            </div>
          </div>
        </motion.div>
      </div>

      <About />
      <Portfolio />
      <WhyChooseUs
        heading="Complete Power, Security, and IT Solutions"
        text="At Gulf Horizon Telecom Est, we provide a large variety of services, containing uninterrupted power supply (UPS) systems, cybersecurity solutions, CCTV systems, and the highest working IT and networking equipment. We have a commitment to smooth operations for businesses in Saudi Arabia with assisting, trusted solutions for each requirement."
        heading2="Expertise and Experience You Can Trust"
        text2="With more than 17 years of experience, we have fully more than 1,000 projects, earning the belief of 400+ long-term clients. Our team provides high-quality, customized solutions using digital technologies, guaranteeing that your power, security, and IT infrastructure work smoothly and safely."
        heading3="End-to-End Services and Support"
        text3="From installation to post-sales support, Gulf Horizon Telecom Est provides 24/7 customer service and expert assistance in every step of your project. We partner with guiding brands such as Schneider Electric, HikVision, and Sony to offer top-class products and guarantee your structure's longevity and trust."
      />
      <ProjectsSection />
      <CtaBox />
      <VendorSlider />
      <ContactUs />
    </>
  );
}
