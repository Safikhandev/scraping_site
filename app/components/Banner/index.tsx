"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Banner = () => {
  const targetValues = [45, 250, 500, 150];
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
      {/* ////////    counter  */}

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {counters.map((count, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-blue-500 text-dark rounded-lg md:shadow-lg shadow-lg"
            >
              <h2 className="text-4xl">
                {count}
                <span className="text-red-500">+</span>{" "}
              </h2>
              <hr className="my-2 border-gray-300 w-12 mx-auto" />
              <p className="text-gray-600">Years in Market</p>
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
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
          {/* Left Column */}
          <div className="lg:py-10 py-10 px-5 md:px-10">
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
          <div className="lg:py-10 py-10 flex justify-center sm:justify-center">
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
    </>
  );
};

export default Banner;
