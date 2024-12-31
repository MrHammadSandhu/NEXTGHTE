"use client";
import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";

const PageHeader = ({ pageHeader }) => {
  const router = useRouter();
  return (
    <div
      className="relative bg-black bg-opacity-40 md:rounded-3xl md:m-10 m-0 rounded-none"
      style={{
        backgroundImage: `url(${pageHeader.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="container mx-auto px-4 py-40 ">
        <div className="text-center relative z-10 ">
          {/* Page Header Box Start */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
            data-translate-key={pageHeader.titleKey}
          >
            {pageHeader.title}
          </h1>
          <nav>
            <ol className="flex justify-center space-x-4 text-sm md:text-lg font-semibold">
              {pageHeader.breadcrumbs.map((breadcrumb, index) => (
                <li
                  key={index}
                  className={`capitalize ${
                    breadcrumb.active
                      ? "text-secondary font-bold text-2xl"
                      : "text-white"
                  }`}
                >
                  <button
                    onClick={() => {
                      router.push(breadcrumb.link);
                    }}
                    className="text-white"
                    data-translate-key={pageHeader.backtokey}
                  >
                    {pageHeader.backto}
                  </button>{" "}
                  /{" "}
                  <span data-translate-key={pageHeader.titleKey}>
                    {breadcrumb.name}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
          {/* Page Header Box End */}
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  backgroundImage: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  title: "About Us",
  breadcrumbs: [
    { name: "home", link: "index.html", active: false },
    { name: "about us", link: "", active: true },
  ],
  backgroundImage: "https://via.placeholder.com/1920x1080", // Placeholder image
};

export default PageHeader;
