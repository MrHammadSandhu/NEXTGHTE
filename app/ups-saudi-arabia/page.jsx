"use client";
import CtaBox from "@/components/CtaBox";
import PageHeader from "@/components/PageHeader";
import ServiceBenefit from "@/components/ServiceBenefit";
import ServiceSingle from "@/components/ServiceSingle";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  const images = ["/ups1.png", "/ups2.png", "/ups3.png"];
  const categories = [
    { name: "Batteries", link: "/batteries.html" },
    { name: "Load Banks", link: "/loadbank.html" },
    { name: "Generators", link: "/generators.html" },
    { name: "AVRs", link: "/avrs.html" },
  ];
  const contact = {
    message:
      "If you cannot find an answer to your question in our FAQ, you can always contact us.",
    details: [
      {
        icon: "/icon-white-mail.svg",
        text: "Info@gulfhorizontele.com",
        link: "#",
        alt: "Mail Icon",
      },
      {
        icon: "/icon-white-phone.svg",
        text: "+966 122 873 071",
        link: "#",
        alt: "Phone Icon",
      },
    ],
  };
  const name = "UPS System";
  const description =
    "At Gulf HorizonTelecom, we consider the important role Uninterruptible Power Supply (UPS) systems play in the safety of your operations. We committed that each system is unique and designed by proper personal planning. Our considerable portfolio of UPS systems ensures uninterrupted power for a large range of applications. Preservation of loss of data and business quality mainly depends on UPS solutions. As authorized dealers for Schneider Electric and the single distributors for RELIABILITY POWER SYSTEMS in the MENA region, we guarantee to deliver high-quality products and exceptional support. With almost 20+ years of experience, a hard-working team of factory-trained engineers, and more than 500 satisfied clients, we provide dependable and customized power protection solutions to fulfil your basic requirements. During voltage fluctuations or power outages, UPS provides a huge power source that delivers electricity to various vital equipment.";
  const categoryTitle = "Our UPS Solutions Categories";
  const products = [
    {
      name: "Outdoor UPS Systems",
      description:
        "Outdoor UPS systems are committed to remarkable power systems in severe conditions. These solutions are best for remote locations and challenging climates, providing outdoor power protection systems that take the experiment of time. Ups provide stable and clear power supply in various types of equipment.in case of power failure, it has its own stored backup data.",
    },
    {
      name: "Industrial UPS Solutions",
      description:
        "Our industrial-grade UPS systems are mainly designed for heavy-duty applications, providing robust power protection for factories, manufacturing plants, and other preferable environments. With industrial UPS solutions, your operations can always remain uninterrupted, even during power outages.",
    },
    {
      name: "Modular UPS Solutions",
      description:
        "Scalability is basic for businesses with developing power demands. Our modular UPS systems are manufactured to modify according to your requirements. These solutions offer moderate configurations, making them best for data centres, corporate facilities, and many more.",
    },
    {
      name: "Data Center UPS Systems",
      description:
        "Our data centre UPS solutions are designed for harsh environments within capacities that range between 600VA to 2 MVA. These high-power capacity systems guarantee your IT system to operate smoothly and safely for your vital data.",
    },
  ];
  const features = [
    "Powersteady series",
    "Power pure RT series",
    "Power clever series",
    "Power modular series",
  ];

  const benefitItems = [
    {
      icon: "/icon-service-benefit-1.svg",
      heading: "Engineering Services",
      description:
        "We provide expert UPS engineering services and troubleshooting support to ensure seamless operation and reliability of your power protection systems.",
      delay: "0s",
    },
    {
      icon: "/icon-service-benefit-2.svg",
      heading: "Maintenance Services",
      description:
        "We offer comprehensive UPS maintenance services to maximize system performance and ensure uninterrupted power protection for your operations.",
      delay: "0.25s",
    },
    {
      icon: "/icon-service-benefit-3.svg",
      heading: "Rental Solutions",
      description:
        "We provide flexible UPS rental solutions to meet your temporary power needs, ensuring reliable protection for any situation.",
      delay: "0.5s",
    },
  ];

  return (
    <>
      <PageHeader
        title="UPS System"
        backgroundImage="/upsbanner.jpg"
        backto="Home"
        breadcrumbs={[{ name: "UPS", link: "", active: true }]}
      />
      <ServiceSingle
        images={images}
        categories={categories}
        contact={contact}
        name={name}
        description={description}
        products={products}
        features={features}
        categoryTitle={categoryTitle}
      />
      <ServiceBenefit items={benefitItems}></ServiceBenefit>
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
      <CtaBox />
      <VendorSlider />
    </>
  );
};

export default page;
