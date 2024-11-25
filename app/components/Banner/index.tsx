"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircleIcon, // For Web Data Scraping
  CogIcon, // For Web Automation
  ShoppingBagIcon, // For E-commerce Data Scraping
} from "@heroicons/react/24/outline";

const Banner = () => {
  const targetValues = [1000, 250, 10, 1];
  const labels = [
    "Projects",
    "Happy Clients",
    "Years of Experience",
    "Pages Crawled Everyday",
  ];
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((count, index) =>
          count < targetValues[index] ? count + 1 : count
        )
      );
    }, 50); // Adjust the interval timing as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative h-[450px] z-0 bg-cover bg-center mb-10 "
        style={{ backgroundImage: `url("/images/banner/banner.webp")` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content with two columns */}
        <div className="relative z-10 text-white h-full flex items-center">
          <div className="container mx-auto grid grid-cols-1  gap-4 p-4">
            <div>
              <button className="text-blue mb-5 bg-lightblue hover:shadow-xl text-xs md:text-sm font-bold px-6 py-1 rounded-3xl tracking-wider sm:text-sm hover:text-white hover:bg-black">
                DESIGN AGENCY
              </button>
              <h1 className="text-4xl mb-5 lg:text-60xl md:text-5xl sm:text-3xl font-bold text-white">
                Dedicated to bring your <br /> ideas to life
              </h1>
              <p>
                Your content for the first column goes here.Your content for the
                Your content for the <br />
                first column goes here. Your content for the Your content for
                the first column
                <br /> goes here.Your content for the first column goes here.
              </p>
              <div className="my-7 sm:text-start lg:text-start">
                <Link href="/contact-us">
                  <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-3 md:px-7 rounded-full hover:bg-hoblue">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 my-16"> */}
        {/* COLUMN-1 */}

        {/* {/* <div className="mx-auto sm:mx-0">
          <div className="py-3 text-center lg:text-start">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              DESIGN AGENCY
            </button>
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-6xl lg:text-80xl font-bold text-darkpurple">
              Dedicated to <br /> bring your <br /> ideas to life.
            </h1>
          </div>
          <div className="my-7 text-center lg:text-start">
            <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
              Get Started
            </button>
          </div>
        </div> */}

        {/* COLUMN-2 */}

        {/* <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <Image
            src="/images/banner/banner.svg"
            alt="hero-image"
            width={800}
            height={642}
          />
        </div>
      </div> */}
      </div>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {counters.map((count, index) => (
            <div
              key={index}
              // <<<<<<< HEAD
              className="flex flex-col items-center justify-center p-4 bg-blue-500 text-dark rounded-lg md:shadow-lg shadow-lg"
            >
              <h2 className="text-4xl font-bold">
                {index === 3 ? `${count}M` : count}
                <span className="text-red-500">+</span>{" "}
              </h2>
              <hr className="my-2 border-gray-300 w-12 mx-auto" />
              <p className="text-gray-600">{labels[index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------------------------------------------- */}
      {/* ----------------- image and content section  -------------------------------------- */}
      <section className="bg-lightgrey py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
          {/* Left Column */}
          <div className="lg:py-10 py-10 px-5 md:px-10 animate-fade-in-left opacity-0">
            <div>
              <button className="text-blue mb-5 bg-lightblue hover:shadow-xl text-xs sm:text-sm md:text-sm font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
                DESIGN AGENCY
              </button>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5">
                Dedicated to bring your ideas to life
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-5">
                Your content for the first column goes here. Your content for
                the
                <br /> first column goes here. Your content for the first column
                goes here.
                <br /> first column goes here. Your content for the first column
                goes here.
              </p>
              <div className="mt-7 sm:text-start lg:text-start">
                <Link href="/contact-us">
                  <button className="text-xs sm:text-sm md:text-lg font-semibold hover:shadow-xl bg-blue text-white py-2 sm:py-3 px-4 sm:px-6 md:px-7 rounded-full hover:bg-hoblue">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          {/* <<<<<<< HEAD */}
          <div className="lg:py-10 py-10 flex justify-center sm:justify-center animate-fade-in-right opacity-0">
            {/* ======= */}
            {/* <div className="lg:py-10 py-10 flex justify-center sm:justify-center ">
>>>>>>> main */}
            <Image
              src="/images/banner/webs.webp"
              alt="hero-image"
              width={450}
              height={142}
              className="max-w-md md:max-w-lg rounded"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      <section className="bg-gradient-to-t from-blue-50 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-gray-800">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our range of web scraping and automation services designed
            to help you extract and utilize data effectively.
          </p>

          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {/* Web Data Scraping */}
            <Link href="/website-data-scraping-services">
              <div className="bg-navyblue text-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Web Data Scraping
                </h3>
                <p className="text-gray-600 mt-4">
                  Extract valuable data from websites with our expert web
                  scraping services using advanced tools and techniques.
                </p>
              </div>
            </Link>
            {/* Web Automation */}
            <Link href="/professional-web-automation-services">
              <div className="bg-navyblue text-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CogIcon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Web Automation
                </h3>
                <p className="text-gray-600 mt-4">
                  Automate data collection seamlessly and integrate web scraping
                  APIs into your workflows for real-time insights.
                </p>
              </div>
            </Link>
            {/* Ecommerce Data Scraping */}
            <div className="bg-navyblue text-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBagIcon className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Ecommerce Data Scraping
              </h3>
              <p className="text-gray-600 mt-4">
                Extract essential product and pricing data from eCommerce
                platforms to gain a competitive edge in the market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
