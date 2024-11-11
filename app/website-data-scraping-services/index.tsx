"use client";

import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
interface FaqItemProps {
  question: string;
  answer: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState("scraping");

  const tabs = [
    {
      id: "crawling",
      label: "Crawling",
      content:
        "Scraping is the collection of data on pages visited by the crawler. It might be similar to selecting the data and copying it to a clipboard. In this scenario, a human could be scraping. Data scraping is done using “web scrapers-specialized software, tools, and scripts that help perform the scraping quicker. Someone refers to the procedure as data scraping, web scraping, or",
    },
    {
      id: "scraping",
      label: "Scraping",
      content:
        "Scraping is the collection of data on pages visited by the crawler. It might be similar to selecting the data and copying it to a clipboard. In this scenario, a human could be scraping. Data scraping is done using “web scrapers-specialized software, tools, and scripts that help perform the scraping quicker. Someone refers to the procedure as data scraping, web scraping, or screen scraping.",
    },
    {
      id: "extracting",
      label: "Extracting",
      content:
        "Scraping is the collection of data on pages visited by the crawler. It might be similar to selecting the data and copying it to a clipboard. In this scenario, a human could be scraping. Data scraping is done using “web.",
    },
    {
      id: "formatting",
      label: "Formatting",
      content:
        "Scraping is the collection of data on pages visited by the crawler. It might be similar to selecting the data and copying it to a clipboard. In this scenario, a human could be scraping. Data scraping is done.",
    },
    {
      id: "exporting",
      label: "Exporting",
      content:
        "Scraping is the collection of data on pages visited by the crawler. It might be similar to selecting the data and copying it to a clipboard. In this scenario, a human could be scraping. Data scraping is done using “web scrapers-specialized software, tools, and scripts that help perform the scraping quicker. Someone refers to the procedure as data scraping, web scraping, or screen scraping. The terms refer to whether you gather data from the web or use the internet to gather data.",
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videos = [
    { src: "/videos/video1.mp4", title: "Video 1" },
    { src: "/videos/video1.mp4", title: "Video 2" },
    { src: "/videos/video1.mp4", title: "Video 3" },
    { src: "/videos/video1.mp4", title: "Video 4" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  if (!isClient) return null;
  // ------------------------------------------------------
  const faqs: FaqItemProps[] = [
    {
      question: "What is the purpose of this application?",
      answer:
        "This application provides users with answers to commonly asked questions regarding our services and features.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We prioritize data security by implementing best practices and encryption protocols to protect user information.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We prioritize data security by implementing best practices and encryption protocols to protect user information.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We prioritize data security by implementing best practices and encryption protocols to protect user information.",
    },
    // Add more FAQs here as needed
  ];

  return (
    <>
      <div
        className="relative h-[350px] z-0 bg-cover bg-center mb-10"
        style={{ backgroundImage: `url("/images/banner/banner.webp")` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-white h-full flex items-center">
          <div className="container mx-auto grid grid-cols-1 gap-4 p-4">
            <div className="justify-center">
              <h1 className="text-4xl mb-5 text-center lg:text-5xl md:text-5xl sm:text-3xl font-bold text-white">
                Web Data Scraping
              </h1>
              <div className="my-7 flex justify-center  sm:text-start lg:text-start">
                <Link href="/contact-us">
                  <button className="text-sm md:text-sm font-semibold hover:shadow-xl bg-blue text-white py-3 px-3 md:py-3 md:px-7 rounded-full hover:bg-hoblue">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}
      {/* -------------------------------------------------------------- */}

      <section className="bg-lightgrey flex flex-col items-center justify-center mb-10 py-8 sm:py-12 lg:py-16">
        {/* Horizontal line for styling */}
        <hr className="w-16 border-t-4 border-navyblue mb-4" />

        {/* Heading */}
        <h2 className="text-4xl text-center lg:text-4xl md:text-4xl sm:text-3xl font-bold text-black mb-4">
          Web Data Scraping
        </h2>

        {/* Paragraph */}
        <p className="text-center max-w-2xl text-base sm:text-lg text-gray-700 px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quia
          eligendi. Cumque reprehenderit sequi distinctio, repudiandae dolore
          unde mollitia? Ipsam animi quibusdam esse officiis, illo unde cum est,
          vitae id reiciendis, tenetur placeat.
        </p>

        <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center relative">
          {/* Left Column with Content Box */}
          <div
            className="relative bg-white px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-10 rounded-lg shadow-lg w-full mx-auto sm:mx-0 sm:-mr-10 md:-mr-16 lg:-mr-20"
            style={{ zIndex: "1" }}
          >
            <div className="border-l-4 border-navyblue pl-4 mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Web Data Scraping Service Provider
              </h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6">
              3i Data Scraping provides web data scraping services in the USA to
              scrape data from multiple websites and online sources. Our
              professional web scraping service includes data extraction
              services, web scraping APIs, Python web scraping, web scraper
              tools, and mobile app scraping.
            </p>
            <div className="flex">
              <Link href="/contact-us">
                <button className="flex items-center px-4 py-2 bg-navyblue text-white border border-transparent rounded-md hover:bg-white hover:text-navyblue hover:border-navyblue transition-colors duration-200">
                  Contact Us
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.293a1 1 0 001.414 0l4.293-4.293a1 1 0 000-1.414l-4.293-4.293a1 1 0 10-1.414 1.414L13.586 10H3a1 1 0 100 2h10.586l-3.293 3.293a1 1 0 000 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column with Background Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg sm:-ml-10 md:-ml-16 lg:-ml-20">
            {/* Black Overlay on Image with Lower Z-Index */}
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg"></div>

            <Image
              src="/images/banner/webs.webp"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      <div
        className="relative h-[750px] sm:h-[350px] z-0 bg-cover bg-center mb-10"
        style={{ backgroundImage: `url("/images/banner/banner.webp")` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-white h-full flex items-center">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="flex flex-col justify-center">
              <hr className="border-b-2 w-12 mb-5" />
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 text-start font-bold text-white">
                Web Data Scraping
              </h2>
              <p className="text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates molestiae soluta inventore labore libero fugit culpa
                perspiciatis esse quas eum dolor praesentium, deserunt ratione
                alias quibusdam laborum sint aliquam quasi? perspiciatis esse
                quas eum dolor praesentium, deserunt ratione alias quibusdam
                laborum sint aliquam quasi?
              </p>
            </div>
            <div className="p-4 max-w-full mx-auto">
              <div className="shadow-lg rounded-lg bg-white overflow-hidden">
                <div className="flex flex-wrap border-b text-black">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-2 py-2 w-full sm:w-auto sm:px-4   ${
                        activeTab === tab.id
                          ? "bg-green-500 text-white bg-navyblue border-green-500"
                          : "bg-white text-black hover:text-green-500 border-transparent"
                      } focus:outline-none`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="mt-4 p-2 sm:p-4">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={activeTab === tab.id ? "block" : "hidden"}
                    >
                      <p className="text-black text-sm sm:text-base md:text-lg">
                        {tab.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
          {/* Right Column */}
          <div className="lg:py-20 py-10 flex justify-center sm:justify-center">
            <Image
              src="/images/banner/webs.webp"
              alt="hero-image"
              width={750}
              height={0}
              className="max-w-md md:max-w-lg rounded"
            />
          </div>
          {/* Left Column */}
          <div className="lg:py-20 py-10 px-5 md:px-10">
            <div>
              {/* <button className="text-blue mb-5 bg-lightblue hover:shadow-xl text-xs sm:text-sm md:text-sm font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
                DESIGN AGENCY
              </button> */}
              <div className="flex items-center mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg me-3">
                  <svg
                    className="h-6 w-6 text-navyblue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <p>Premium Architectures Lifestyle</p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5">
                Dedicated to bring your ideas to life
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-5">
                Your content for the first column goes here. Your content for
                the
                <br /> first column goes here. Your content for the first column
                goes here.
                <br /> first column goes here. Your content for the first column
                goes here. Your content for the first column goes here. Your
                content for the first column goes here. Your content for the
                first column goes here.
                <br /> The first column goes here. Your content for the first
                column goes here.
              </p>
              <div className="mt-7 sm:text-start lg:text-start">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-2 text-white bg-navyblue  rounded" />
                    Simple & unified building approach of future
                  </li>
                  <li className="flex items-center">
                    <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-2 text-white bg-navyblue  rounded" />
                    Experienced & committed to our clients from heart
                  </li>
                  <li className="flex items-center">
                    <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-2 text-white bg-navyblue  rounded" />
                    Beautifully designed for large capacity apartments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
          {/* Left Column */}
          <div className="lg:py-20 py-10 px-5 md:px-10">
            <div>
              {/* <button className="text-blue mb-5 bg-lightblue hover:shadow-xl text-xs sm:text-sm md:text-sm font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
                DESIGN AGENCY
              </button> */}
              <div className="flex items-center mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg me-3">
                  <svg
                    className="h-6 w-6 text-navyblue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <p>Premium Architectures Lifestyle</p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5">
                Dedicated to bring your ideas to life
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-5">
                Your content for the first column goes here. Your content for
                the
                <br /> first column goes here. Your content for the first column
                goes here.
                <br /> first column goes here. Your content for the first column
                goes here. Your content for the first column goes here. Your
                content for the first column goes here. Your content for the
                first column goes here.
                <br /> The first column goes here. Your content for the first
                column goes here.
              </p>
              <div className="mt-7 sm:text-start lg:text-start">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-2 text-white bg-navyblue  rounded" />
                    Simple & unified building approach of future
                  </li>
                  <li className="flex items-center">
                    <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-2 text-white bg-navyblue  rounded" />
                    Experienced & committed to our clients from heart
                  </li>
                  <li className="flex items-center">
                    <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-2 text-white bg-navyblue  rounded" />
                    Beautifully designed for large capacity apartments
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="lg:py-20 py-10 flex justify-center sm:justify-center">
            <Image
              src="/images/banner/webs.webp"
              alt="hero-image"
              width={750}
              height={0}
              className="max-w-md md:max-w-lg rounded"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      <section className="bg-navyblue py-12 my-10">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-3xl text-white font-bold text-center text-gray-800 mb-8">
            Our Video Gallery
          </h2>
          <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index} className="p-4">
                <div className="relative">
                  <video
                    className="w-full h-64 rounded-lg shadow-lg"
                    controls
                    src={video.src}
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div> */}
                  {/* <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  {video.title}
                </h3> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      {/* --------------------------------------------------------------- */}
      <div className="max-w-5xl mx-auto p-8 mb-10 bg-lightgrey rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </>
  );
};

interface FaqItemComponentProps {
  faq: FaqItemProps;
}

const FaqItem = ({ faq }: FaqItemComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${faq.question}`}
    >
      <div className="flex justify-between bg-navyblue text-white items-center p-4 bg-gray-50 rounded-t-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
        <span
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 ease-in-out text-gray-500`}
        >
          &#x25BC;
        </span>
      </div>
      {isOpen && (
        <p
          className="p-4 text-gray-700 bg-white rounded-b-lg transition-opacity duration-300 ease-in-out"
          id={`faq-answer-${faq.question}`}
        >
          {faq.answer}
        </p>
      )}
    </div>
  );
};
// Type definition for custom arrow props
type ArrowProps = {
  onClick?: () => void;
};

const NextArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-1/2 text-white right-4 transform -translate-y-1/2 z-10 cursor-pointer text-gray-800 hover:text-blue-600"
    onClick={onClick}
  >
    <FaChevronRight size={30} />
  </div>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-1/2 text-white left-4 transform -translate-y-1/2 z-10 cursor-pointer text-gray-800 hover:text-blue-600"
    onClick={onClick}
  >
    <FaChevronLeft size={30} />
  </div>
);

export default Index;
