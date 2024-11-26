import React from "react";
import {
  CheckCircleIcon,
  LightBulbIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
const Index = () => {
  return (
    <>
      {/* <<<<<<< HEAD */}
      {/* <div className="relative  isolate overflow-hidden bg-gray-900 py-24 sm:py-32"> */}
      {/* ======= */}
      {/* <div className="relative mb-20 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
>>>>>>> main
        <Image
          src="/images/banner/banner.webp"
          alt="image"
          width={700}
          height={500}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Work with us
            </h2>
            <p className="mt-8 text-lg font-medium text-white sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">
                Open roles <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Internship program <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Our values <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Meet our leadership <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <section className="mt-16 bg-white py-10 px-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-full">
                    <CheckCircleIcon className="w-8 h-8 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      Quality Assurance
                    </h3>
                    <p className="text-sm text-gray-300">
                      Ensuring top-notch service with comprehensive checks.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-blue-500 rounded-full">
                    <PhoneIcon className="w-8 h-8 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      24/7 Support
                    </h3>
                    <p className="text-sm text-gray-300">
                      Available around the clock for your needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-purple-500 rounded-full">
                    <LightBulbIcon className="w-8 h-8 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      Innovation
                    </h3>
                    <p className="text-sm text-gray-300">
                      Continuously pushing the boundaries of what&apos;s
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div> */}

      <div className="relative mb-20 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        {/* Background Image */}
        <Image
          src="/images/banner/banner.webp"
          alt="image"
          width={700}
          height={500}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>

        {/* Background Gradient Animation */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
          data-aos="fade-up" // Fade-up animation for gradient
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/* Title */}
            <h2
              className="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
              data-aos="fade-down" // Fade-down animation for title
            >
              Work with us
            </h2>

            {/* Paragraph */}
            <p
              className="mt-8 text-lg font-medium text-white sm:text-xl/8"
              data-aos="fade-up" // Fade-up animation for paragraph
              data-aos-delay="200" // Slight delay for staggered effect
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            {/* Scrollable Text Animation */}
            <div className="overflow-hidden mt-5">
              <p
                className="animate-right-to-left text-white whitespace-nowrap text-xl font-bold"
                data-aos="slide-right" // Slide-right animation for text
              >
                Join our team and shape the future of innovation!
              </p>
            </div>

            {/* Section with Icons */}
            <section className="mt-16 bg-white py-10 px-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {/* Quality Assurance */}
                <div
                  className="flex items-center gap-4"
                  data-aos="fade-up" // Fade-up animation for QA section
                  data-aos-delay="300"
                >
                  <div className="p-4 bg-white rounded-full">
                    <CheckCircleIcon className="w-8 h-8 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      Quality Assurance
                    </h3>
                    <p className="text-sm text-gray-300">
                      Ensuring top-notch service with comprehensive checks.
                    </p>
                  </div>
                </div>

                {/* 24/7 Support */}
                <div
                  className="flex items-center gap-4"
                  data-aos="fade-up" // Fade-up animation for 24/7 Support section
                  data-aos-delay="500"
                >
                  <div className="p-4 bg-blue-500 rounded-full">
                    <PhoneIcon className="w-8 h-8 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      24/7 Support
                    </h3>
                    <p className="text-sm text-gray-300">
                      Available around the clock for your needs.
                    </p>
                  </div>
                </div>

                {/* Innovation */}
                <div
                  className="flex items-center gap-4"
                  data-aos="fade-up" // Fade-up animation for Innovation section
                  data-aos-delay="700"
                >
                  <div className="p-4 bg-purple-500 rounded-full">
                    <LightBulbIcon className="w-8 h-8 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      Innovation
                    </h3>
                    <p className="text-sm text-gray-300">
                      Continuously pushing the boundaries of what&apos;s
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

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

      <section className="dark:bg-gray-900 my-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-lg text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-dark">
              Designed for business teams like yours
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-5 md:space-y-0">
            <div
              className="bg-[#f0f8ff] py-4 px-4"
              data-aos="fade-up" // AOS fade-up animation
              data-aos-delay="100"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {/* SVG Icon */}
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

            <div
              className="bg-[#f0f8ff] py-4 px-4"
              data-aos="fade-right" // AOS fade-right animation
              data-aos-delay="200"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {/* SVG Icon */}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">Legal</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Protect your organization, devices and stay compliant with our
                structured workflows and custom permissions made for you.
              </p>
            </div>

            <div
              className="bg-[#f0f8ff] py-4 px-4"
              data-aos="zoom-in" // AOS zoom-in animation
              data-aos-delay="300"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {/* SVG Icon */}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">
                Business Automation
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Auto-assign tasks, send Slack messages, and much more. Now power
                up with hundreds of new templates to help you get started.
              </p>
            </div>

            {/* More items with different AOS animations */}
            <div
              className="bg-[#f0f8ff] py-4 px-4"
              data-aos="flip-left" // AOS flip-left animation
              data-aos-delay="400"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {/* SVG Icon */}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">Finance</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Audit-proof software built for critical financial operations
                like month-end close and quarterly budgeting.
              </p>
            </div>

            <div
              className="bg-[#f0f8ff] py-4 px-4"
              data-aos="slide-up" // AOS slide-up animation
              data-aos-delay="500"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {/* SVG Icon */}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">
                Enterprise Design
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>

            <div
              className="bg-[#f0f8ff] py-4 px-4"
              data-aos="fade-up" // AOS fade-up animation
              data-aos-delay="600"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {/* SVG Icon */}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-dark">
                Operations
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company&apos;s lights on with customizable, iterative,
                and structured workflows built for all efficient teams and
                individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* >>>>>>> main */}
    </>
  );
};

export default Index;
