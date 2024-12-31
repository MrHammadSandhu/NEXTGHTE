"use client";
import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/PageHeader";
import React from "react";

const page = () => {
  const pageHeader = {
    title: "Contact Us",
    titleKey: "",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Contact Us",
        titlekey: "",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/conatctbanner.png",
  };
  return (
    <>
      <PageHeader pageHeader={pageHeader} />
      <ContactUs />
    </>
  );
};

export default page;
