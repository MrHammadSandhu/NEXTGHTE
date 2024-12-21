"use client";
import About from "@/components/About";
import CompanyHistory from "@/components/CompanyHistory";
import ContactUs from "@/components/ContactUs";
import CtaBox from "@/components/CtaBox";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/PageHeader";
import VendorSlider from "@/components/Vendor";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        backgroundImage="/about.png"
        backto="Home"
        breadcrumbs={[{ name: "About us", link: "", active: true }]}
      />

      <div className="">
        <About />
        <CompanyHistory />
        <MissionVision />
        <CtaBox />
        <VendorSlider />
        <ContactUs />
      </div>
    </>
  );
};

export default page;
