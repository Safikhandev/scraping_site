"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const ContentSection = () => {
  // -----  couner section
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
      {/* ----------------- image and content section  -------------------------------------- */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
          {/* Left Column */}
          <div className="lg:py-20 py-10 px-5 md:px-10">
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
                <Link href="/portfolio">
                  <button className="text-xs sm:text-sm md:text-lg font-semibold hover:shadow-xl bg-blue text-white py-2 sm:py-3 px-4 sm:px-6 md:px-7 rounded-full hover:bg-hoblue">
                    Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:py-20 py-10 flex justify-center sm:justify-center">
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

      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ------ counter section  */}
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
      {/* ------ end counter section  */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      {/* ---------------------------------------- */}
      <section className="bg-lightgrey dark:bg-gray-900 my-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-dark">
              Designed for business teams like yours
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="bg-offwhite hover:bg-navyblue hover:text-white py-4 px-4">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">
                Marketing
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Plan it, create it, launch it. Collaborate seamlessly with all
                the organization and hit your marketing goals every month with
                our marketing plan.
              </p>
            </div>
            <div className="bg-navyblue py-4 text-white px-4  hover:bg-offwhite hover:text-black">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">Legal</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Protect your organization, devices and stay compliant with our
                structured workflows and custom permissions made for you.
              </p>
            </div>
            <div className="bg-offwhite py-4 px-4  hover:bg-navyblue hover:text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">
                Business Automation
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Auto-assign tasks, send Slack messages, and much more. Now power
                up with hundreds of new templates to help you get started.
              </p>
            </div>
            <div className="bg-offwhite py-4 px-4 hover:bg-navyblue hover:text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">Finance</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Audit-proof software built for critical financial operations
                like month-end close and quarterly budgeting.
              </p>
            </div>
            <div className="bg-navyblue py-4 text-white px-4 hover:bg-offwhite hover:text-black">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">
                Enterprise Design
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>
            <div className="bg-offwhite py-4 px-4 hover:bg-navyblue hover:text-white">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">
                Operations
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company&apos;s lights on with customizable, iterative,
                and structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      {/* ---------------------------------------------- */}
      <div
        className="relative h-[250px] z-0 bg-cover bg-center mb-10 "
        style={{ backgroundImage: `url("/images/banner/banner.webp")` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-white h-full flex items-center">
          <div className="container mx-auto max-w-4xl grid grid-cols-1  gap-4 p-4">
            <div className="justify-center">
              <h1 className="text-4xl mb-5 text-center lg:text-60xl md:text-5xl sm:text-3xl font-bold text-white">
                Our Culture
              </h1>

              <div className="my-7 flex justify-center text-center  sm:text-start lg:text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur velit adipisci delectus aut. Velit natus similique
                  hic ad cupiditate magni at consequuntur?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
