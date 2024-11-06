"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Define a TypeScript interface for the review object
interface Review {
  id: number;
  image: string;
  text: string;
  author: string;
}

const ReviewCarousel = () => {
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
  const [selectedImage, setSelectedImage] = useState<string>("");
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
  );
};

export default ReviewCarousel;
