"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface Review {
  id: number;
  image: string;
  text: string;
  author: string;
}
const Index = () => {
  // Define a TypeScript interface for the review object
  const reviews: Review[] = [
    {
      id: 1,
      image: "/images/screnshot/screenshot1.png",
      text: "Great product! It has changed my life.",
      author: "John Doe",
    },
    {
      id: 2,
      image: "/images/screnshot/screenshot1.png",
      text: "Fantastic experience, highly recommend!",
      author: "Jane Smith",
    },
    {
      id: 3,
      image: "/images/screnshot/screenshot1.png",
      text: "I love it! The best decision I ever made.",
      author: "Alice Johnson",
    },
    {
      id: 4,
      image: "/images/screnshot/screenshot1.png",
      text: "Worth every penny, would buy again.",
      author: "Bob Brown",
    },
    {
      id: 5,
      image: "/images/screnshot/screenshot1.png",
      text: "Excellent value for money.",
      author: "Charlie Davis",
    },
    {
      id: 6,
      image: "/images/screnshot/screenshot1.png",
      text: "Best purchase ever!",
      author: "Danielle Evans",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow < reviews.length ? prevIndex + slidesToShow : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - slidesToShow >= 0
        ? prevIndex - slidesToShow
        : reviews.length - slidesToShow
    );
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesToShow]);

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
              <h1 className="text-4xl mb-5 text-center lg:text-6xl md:text-5xl sm:text-3xl font-bold text-white">
                Services
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

      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      <div className="bg-lightgrey my-16 py-10 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-navyblue">
                    <svg
                      className="h-6 w-6 text-white"
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
                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    </svg>
                  </div>
                  Push to deploy
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi. Odio urna massa nunc massa.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-navyblue">
                    <svg
                      className="h-6 w-6 text-white"
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
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  SSL certificates
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget. Sem sodales gravida quam turpis enim lacus amet.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-navyblue">
                    <svg
                      className="h-6 w-6 text-white"
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
                  Simple queues
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Quisque est vel vulputate cursus. Risus proin diam nunc
                  commodo. Lobortis auctor congue commodo diam neque.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-navyblue">
                    <svg
                      className="h-6 w-6 text-white"
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
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Advanced security
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt
                  mattis aliquet hac quis. Id hac maecenas ac donec pharetra
                  eget.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}
      <section
        className="py-12 bg-gray-100 relative h-auto z-0 bg-cover bg-center mb-10"
        style={{ backgroundImage: `url("/images/banner/banner.webp")` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web Data Scraping Card */}
            <div className="bg-white border border-navyblue rounded-lg shadow-lg shadow-gray-100 p-6 hover:shadow-md transition-shadow duration-300 relative z-20">
              {/* Icon for Web Data Scraping */}
              <div className="flex justify-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navyblue">
                  <svg
                    className="h-6 w-6 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Web Data Scraping
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Automate data extraction from websites and gather valuable
                information efficiently.
              </p>
              <div className="flex justify-center">
                <Link href="/website-data-scraping-services">
                  <button className="flex items-center px-4 py-2 bg-navyblue text-white border border-transparent rounded-md hover:bg-white hover:text-navyblue hover:border-navyblue transition-colors duration-200">
                    Learn More
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

            {/* Web Automation Card */}
            <div className="bg-white border border-navyblue rounded-lg shadow-lg shadow-gray-100 p-6 hover:shadow-md transition-shadow duration-300 relative z-20">
              {/* Icon for Web Automation */}
              <div className="flex justify-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navyblue">
                  <svg
                    className="h-6 w-6 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Web Automation
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Streamline repetitive tasks with automation tools tailored to
                your needs.
              </p>
              <div className="flex justify-center">
                <Link href="/professional-web-automation-services">
                  <button className="flex items-center px-4 py-2 bg-navyblue text-white border border-transparent rounded-md hover:bg-white hover:text-navyblue hover:border-navyblue transition-colors duration-200">
                    Learn More
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
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}

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
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* // review section */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl lg:max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-6">
            Customer Reviews
          </h2>
          <div className="flex justify-center items-center">
            <button
              className="mr-4 p-2 text-dark bg-gray-800 rounded hover:bg-gray-700 flex items-center"
              onClick={prevSlide}
            >
              <ChevronLeftIcon className="h-10 w-10 text-dark" />
            </button>
            <div className="flex justify-center space-x-4">
              {reviews
                .slice(currentIndex, currentIndex + slidesToShow)
                .map((review) => (
                  <div key={review.id} className="flex flex-col items-center">
                    <Image
                      src={review.image}
                      alt={`Review from ${review.author}`}
                      className="rounded-lg shadow-lg cursor-pointer"
                      width={500} // Increase width
                      height={500} // Increase height
                      onClick={() => openModal(review.image)}
                    />
                    <p className="mt-4 text-lg text-center">{review.text}</p>
                    <span className="mt-2 text-sm font-semibold text-gray-600">
                      {review.author}
                    </span>
                  </div>
                ))}
            </div>
            <button
              className="ml-4 p-2 text-dark bg-gray-800 rounded hover:bg-gray-700 flex items-center"
              onClick={nextSlide}
            >
              <ChevronRightIcon className="h-10 w-10 text-dark" />
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative">
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <Image
                src={selectedImage}
                alt="Zoomed review"
                className="rounded-lg"
                width={900}
                height={900}
                onClick={closeModal}
              />
            </div>
          </div>
        )}
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
    </>
  );
};

export default Index;
