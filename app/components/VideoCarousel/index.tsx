"use client";
// components/VideoCarousel.js
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import "@/app/globals.css";

const VideoCarousel = () => {
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

  return (
    <section className="bg-navyblue py-12">
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
export default VideoCarousel;
