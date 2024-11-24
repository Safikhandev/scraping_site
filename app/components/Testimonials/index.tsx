"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user1.svg",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user2.svg",
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user3.svg",
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user1.svg",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user2.svg",
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user3.svg",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <>
        <div
          className="bg-testimonial bg-lightgrey pb-12 lg:py-12"
          id="testimonial-section"
        >
          <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
            <div className="text-center">
              <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">
                See what others are saying.
              </h3>
              <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">
                See what others are saying.
              </h3>
              <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">
                See what others are saying.
              </h3>
            </div>

            <Slider {...settings}>
              {postData.map((items, i) => (
                <div key={i} className="relative">
                  <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={71}
                      height={71}
                      className="inline-block m-auto absolute test-pos"
                    />
                    <h4 className="text-base font-medium text-testColor my-4">
                      {items.comment}
                    </h4>
                    <hr style={{ color: "lightgrey" }} />
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-base font-medium pt-4 pb-2">
                          {items.name}
                        </h3>
                        <h3 className="text-xs font-medium  pb-2 opacity-50">
                          {items.profession}
                        </h3>
                      </div>
                      <div className="flex">
                        <StarIcon width={20} className="star" />
                        <StarIcon width={20} className="star" />
                        <StarIcon width={20} className="star" />
                        <StarIcon width={20} className="star" />
                        <StarIcon width={20} className="star" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        <div className="bg-gray-50 mt-16 min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
            {/* Left Section */}
            <div className="relative bg-gray-100 p-8 rounded-lg shadow-md">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/banner/webs.webp')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Content */}
              <div className="relative">
                <p className="text-sm text-white font-semibold mb-2">
                  IT&apos;S JUST A CLICK AWAY!
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Web Scraping Provide Local On-Site Support
                </h1>
                <p className="text-white mb-6">
                  Our on-demand maintenance services dispatch skilled engineers
                  to your clients&apos; locations, resolving IT equipment issues
                  in offices, data centers, and beyond, regardless of their
                  geographical location.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span> Web scraping
                    Coverage 24×7
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span> Expert
                    Engineers
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span> Service
                    Level Agreements (SLAs)
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span> Regional
                    Presence and Support
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get a Quote
              </h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Which Describes You Best?
                  </label>
                  <select
                    id="role"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>-- Please choose an option --</option>
                    <option>Web Data Scraping</option>
                    <option>Web Automation</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="Please provide specific details and requirements..."
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-navyblue bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        <section className="bg-lightgrey py-5 mt-5">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
            {/* Left Column */}
            <div className="lg:py-10 py-10 px-5 md:px-10 animate-fade-in-left opacity-0">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl font-bold text-black mb-5">
                  Request a Quote
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-5">
                  We use the time and money of customers through automating
                  their data abstractions using smooth data scraping services.
                </p>
                <div className="mt-7 sm:text-start lg:text-start">
                  <Link href="/contact-us">
                    <button className="text-xs sm:text-sm md:text-lg font-semibold hover:shadow-xl bg-blue text-white py-2 sm:py-3 px-4 sm:px-6 md:px-7 rounded-full hover:bg-hoblue">
                      Request a Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:py-10 py-10 flex justify-center sm:justify-center animate-fade-in-right opacity-0">
              <Image
                src="/images/banner/webs.webp"
                alt="hero-image"
                width={250}
                height={120}
                className="max-w-md md:max-w-lg rounded"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
