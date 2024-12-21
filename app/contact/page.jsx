"use client";
import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/PageHeader";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        backgroundImage="/conatctbanner.png"
        backto="Home"
        breadcrumbs={[{ name: "Contact us", link: "", active: true }]}
      />
      <ContactUs />
    </>
  );
};

export default page;
