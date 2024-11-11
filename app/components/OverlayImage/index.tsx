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
      <div className="relative mb-20 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
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
      </div>
    </>
  );
};

export default Index;
