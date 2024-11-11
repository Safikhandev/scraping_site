import React from "react";
import Image from "next/image";
import Link from "next/link";
const ContentImage = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Left Section - Images */}
          <div className="flex space-x-4 md:w-1/2">
            <div className="flex flex-col space-y-4">
              <Image
                src="/images/banner/banner.webp" // Replace with the path to your first image
                alt="Train Landscape"
                width={600} // Replace with the actual width of your image
                height={100} // Replace with the actual height of your image
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality & Reliability Are Everything to Us
            </h2>
            <p className="text-gray-600 mb-6">
              The 4800 hydraulic switch machine features a direct drive that
              maximizes the available power for throwing any size switch point.
              The innovative design reduces maintenance inefficiencies, ensuring
              reliability and minimizing maintenance costs. The innovative
              design reduces maintenance inefficiencies, ensuring reliability
              and minimizing maintenance costs.
            </p>
            <Link href="/services">
              <button className="text-sm md:text-sm font-semibold hover:shadow-xl bg-navyblue text-white py-3 px-5 md:py-3 md:px-7 rounded-full hover:bg-blue-600">
                Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* Left Section - Text Content */}
          <div className="md:pr-8">
            <h4 className="text-lg text-gray-700 font-semibold mb-2">
              Make it happen with{" "}
              <span className="text-green-500">Cockpit365</span>
            </h4>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Processes come to life – instead of being painted
            </h2>
            <p className="text-gray-600 mb-4">
              Processes are the fine threads that connect our system. Even
              though processes might be perceived as “complicated” or “cockpit
              painted”, our approach is much different. Cockpit365 makes it
              simple to visualize and automate processes with ease.
            </p>
            <p className="text-gray-600 mb-6">
              Managing and creating processes can be intuitive and effective,
              helping streamline productivity and eliminate redundant tasks.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="/images/banner/banner.webp" // Replace with the path to your image
                alt="Sample Process"
                className="w-32 h-auto rounded shadow-lg"
              />
              <p className="text-sm text-gray-500">
                Visual representation of process flows with easy-to-use tools
                and actionable insights.
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative">
            <Image
              src="/images/banner/banner.webp" // Replace with the path to your main image
              alt="Cockpit365 Dashboard"
              width={500}
              height={400}
              layout="responsive"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-2 right-2 text-green-500 font-bold text-xl">
              01
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentImage;
