import React from "react";
import Link from "next/link";
const Index = () => {
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
              <h1 className="text-4xl mb-5 text-center lg:text-5xl md:text-5xl sm:text-3xl font-bold text-white">
                Web Automation
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
    </>
  );
};

export default Index;
