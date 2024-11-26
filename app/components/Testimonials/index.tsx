"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import HomeContact from "@/components/homepagecontact";
import ClientProvider from "@/components/ClientProvider";
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
          <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
            <div className="text-center">
              {/* Section Title with scroll animation */}
              <h3
                className="text-4xl sm:text-6xl font-bold text-black my-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                See what others are saying.
              </h3>

              {/* Subtitle with different scroll animation */}
              <h3
                className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                See what others are saying.
              </h3>

              {/* Subtitle with fade-up animation */}
              <h3
                className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 my-4"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                See what others are saying.
              </h3>
            </div>

            {/* Slider with scroll animation */}
            <Slider {...settings}>
              {postData.map((items, i) => (
                <div
                  key={i}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay={`${i * 200}`} // Adding delay to each item for staggered animation
                >
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
                        <h3 className="text-xs font-medium pb-2 opacity-50">
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
        <div className="bg-gray-50 mt-16 min-h-fit flex items-center justify-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
            {/* Left Section */}
            <div
              className="relative bg-gray-100 p-4 md:p-6 rounded-lg shadow-md h-auto md:h-auto"
              data-aos="fade-right" // Animation for left section
              data-aos-duration="1000"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/banner/webs.webp')",
                  height: "100%",
                }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Content */}
              <div className="relative">
                <p
                  className="text-sm md:text-base text-white font-semibold mb-2"
                  data-aos="fade-up" // Animation for the paragraph text
                  data-aos-duration="1200"
                >
                  IT&apos;S JUST A CLICK AWAY!
                </p>
                <h1
                  className="text-2xl md:text-4xl font-bold text-white mb-4"
                  data-aos="zoom-in" // Animation for the main heading
                  data-aos-duration="1400"
                >
                  Web Scraping Provide Local On-Site Support
                </h1>
                <p
                  className="text-white text-base md:text-lg mb-6"
                  data-aos="fade-up" // Animation for the second paragraph
                  data-aos-duration="1600"
                >
                  Our on-demand maintenance services dispatch skilled engineers
                  to your clients&apos; locations, resolving IT equipment issues
                  in offices, data centers, and beyond, regardless of their
                  geographical location.
                </p>
                <ul className="space-y-2">
                  <li
                    className="flex items-center text-white text-base md:text-lg"
                    data-aos="fade-up" // Animation for the list items
                    data-aos-duration="1800"
                  >
                    <span className="text-yellow-500 mr-2">✔</span> Web scraping
                    Coverage 24×7
                  </li>
                  <li
                    className="flex items-center text-white text-base md:text-lg"
                    data-aos="fade-up" // Animation for the list items
                    data-aos-duration="2000"
                  >
                    <span className="text-yellow-500 mr-2">✔</span> Expert
                    Engineers
                  </li>
                  <li
                    className="flex items-center text-white text-base md:text-lg"
                    data-aos="fade-up" // Animation for the list items
                    data-aos-duration="2200"
                  >
                    <span className="text-yellow-500 mr-2">✔</span> Service
                    Level Agreements (SLAs)
                  </li>
                  <li
                    className="flex items-center text-white text-base md:text-lg"
                    data-aos="fade-up" // Animation for the list items
                    data-aos-duration="2400"
                  >
                    <span className="text-yellow-500 mr-2">✔</span> Regional
                    Presence and Support
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div
              data-aos="fade-left" // Animation for the right section
              data-aos-duration="1000"
            >
              <ClientProvider />
              <HomeContact />
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
            <div
              className="lg:py-10 py-10 px-5 md:px-10"
              data-aos="fade-left" // Fade-in effect from the left for the entire left column
              data-aos-duration="1000"
            >
              <div className="align-middle flex items-center justify-center h-full">
                <div>
                  <h2
                    className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl font-bold text-black mb-5"
                    data-aos="zoom-in" // Zoom-in effect for the title
                    data-aos-duration="1200"
                  >
                    Request a Quote
                  </h2>
                  <p
                    className="text-sm sm:text-base lg:text-lg text-gray-700 mb-5"
                    data-aos="fade-up" // Fade-up effect for the paragraph text
                    data-aos-duration="1500"
                  >
                    We use the time and money of customers through automating
                    their data abstractions using smooth data scraping services.
                  </p>
                  <div
                    className="mt-7 sm:text-start lg:text-start"
                    data-aos="fade-up" // Fade-up effect for the button container
                    data-aos-duration="1800"
                    data-aos-delay="500" // Delay for the button animation to appear after text
                  >
                    <Link href="/contact-us">
                      <button className="text-xs sm:text-sm md:text-lg font-semibold hover:shadow-xl bg-blue text-white py-2 sm:py-3 px-4 sm:px-6 md:px-7 rounded-full hover:bg-hoblue">
                        Request a Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="lg:py-10 py-10 flex justify-center sm:justify-center"
              data-aos="fade-right" // Fade-in effect from the right for the right column
              data-aos-duration="1000"
            >
              <Image
                src="/images/home/home.png"
                alt="hero-image"
                width={390}
                height={120}
                className="max-w-md md:max-w-lg rounded"
                data-aos="zoom-out" // Zoom-out effect for the image
                data-aos-duration="1300"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
