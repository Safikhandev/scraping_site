"use client";

import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaUsers, FaDatabase, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import "@/app/globals.css";

const VideoPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <section className="bg-lightgrey py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              About <span className="text-blue-600">Us</span>
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left Card */}
            <div className="p-6 text-center">
              <FaUsers className="text-blue-600 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                CUSTOMER FOCUS
              </h3>
              <p className="text-gray-600">
                We firmly believe &apos;Customer Happiness&apos; will pave the
                way for remarkable customer experiences. Our customers value
                working with us, which is one of the main reasons for our
                excellent retention rate of 98%!
              </p>
            </div>

            {/* Middle Card */}
            <div className="p-6 text-center">
              <FaDatabase className="text-blue-600 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                DATA QUALITY
              </h3>
              <p className="text-gray-600">
                Our experienced experts perform rigorous data quality processes
                and validations using automated and manual methods. The result
                of these efforts preserves value for our customers at no
                additional cost!
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-darkblue text-white p-6 rounded-lg shadow-md">
              <FaGlobe className="text-white text-6xl mx-auto mb-4" />
              <p className="text-md mb-4">
                Web Scraping is a Data Scraping Company and web scraping service
                provider in the USA, India, Australia, UK, UAE, Canada, Germany,
                Spain, Singapore, Dubai, South Korea, France, Netherlands,
                Italy, Russia, and other worlds, established in 2009 with the
                vision of providing technology for continuous business
                advancements and innovations. We assist enterprise customers
                with our web data crawling for easily integrating software
                products as well as solutions.
              </p>
              <button className="px-6 py-2 text-black bg-white rounded-lg shadow-lg hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* --------------- --------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------ */}
      <section className="relative mb-20 isolate overflow-hidden bg-black py-24 sm:py-32">
        <Image
          src="/images/banner/banner.webp"
          alt="image"
          width={700}
          height={500}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-black opacity-60"></div>
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr bg-[#291E3B] opacity-10"></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr bg-[#291E3B]  opacity-10"></div>
        </div>
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-4xl text-white font-bold text-center mb-8">
            We Are Top IT Expert Services Agency
          </h2>
          <button
            className="relative flex items-center mx-auto justify-center bg-transparent text-white p-4 rounded-full transition"
            onClick={togglePopup}
          >
            <span className="absolute inset-0 w-full h-full rounded-full bg-blue-500 animate-pulse wave-animation"></span>
            <FaPlayCircle className="relative z-10 text-8xl text-white" />
          </button>

          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <div className="relative bg-white p-6 rounded-lg max-w-xl w-full">
                <button
                  className="absolute top-3 right-3 text-gray-800 hover:text-red-600"
                  onClick={togglePopup}
                >
                  ✖
                </button>
                <video
                  className="w-full h-64 rounded-lg shadow-lg"
                  controls
                  src="/videos/video1.mp4"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* // ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ //
      ------------------------------------------------------------------ */}
    </>
  );
};

export default VideoPopup;

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// "use client";
// // components/VideoCarousel.js
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import "@/app/globals.css";

// const VideoCarousel = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const videos = [
//     { src: "/videos/video1.mp4", title: "Video 1" },
//     { src: "/videos/video1.mp4", title: "Video 2" },
//     { src: "/videos/video1.mp4", title: "Video 3" },
//     { src: "/videos/video1.mp4", title: "Video 4" },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <NextArrow onClick={() => {}} />,
//     prevArrow: <PrevArrow onClick={() => {}} />,
//   };

//   if (!isClient) return null;

//   return (
//     <section className="bg-navyblue py-12">
//       <div className="w-full max-w-5xl mx-auto">
//         <h2 className="text-3xl text-white font-bold text-center text-gray-800 mb-8">
//           Our Video Gallery
//         </h2>
//         <Slider {...settings}>
//           {videos.map((video, index) => (
//             <div key={index} className="p-4">
//               <div className="relative">
//                 <video
//                   className="w-full h-64 rounded-lg shadow-lg"
//                   controls
//                   src={video.src}
//                 />
//                 {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div> */}
//                 {/* <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
//                   {video.title}
//                 </h3> */}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// // Type definition for custom arrow props
// type ArrowProps = {
//   onClick?: () => void;
// };

// const NextArrow = ({ onClick }: ArrowProps) => (
//   <div
//     className="absolute top-1/2 text-white right-4 transform -translate-y-1/2 z-10 cursor-pointer text-gray-800 hover:text-blue-600"
//     onClick={onClick}
//   >
//     <FaChevronRight size={30} />
//   </div>
// );

// const PrevArrow = ({ onClick }: ArrowProps) => (
//   <div
//     className="absolute top-1/2 text-white left-4 transform -translate-y-1/2 z-10 cursor-pointer text-gray-800 hover:text-blue-600"
//     onClick={onClick}
//   >
//     <FaChevronLeft size={30} />
//   </div>
// );
// export default VideoCarousel;
