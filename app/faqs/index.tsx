"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const Index = () => {
  return (
    <>
      <div
        className="relative h-[350px] z-0 bg-cover bg-center mb-10 "
        style={{ backgroundImage: `url("/images/banner/banner.webp")` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-white h-full flex items-center">
          <div className="container mx-auto grid grid-cols-1  gap-4 p-4">
            <div className="justify-center">
              <h1 className="text-4xl mb-5 text-center lg:text-60xl md:text-5xl sm:text-3xl font-bold text-white">
                FAQs
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
      <div
        id="faq-section"
        className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
      >
        <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
        <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
          Frequently asked <br /> questions.
        </h2>
        <div className="w-full px-4 pt-16">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>Can you design my site?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    Craven omni memoria patriae zombieland clairvius narcisse{" "}
                    religionis sunt diri undead historiarum. Golums, zombies
                    unrelenting et Raimi fascinati beheading.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>Can you code my site?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    Craven omni memoria patriae zombieland clairvius narcisse{" "}
                    <br /> religionis sunt diri undead historiarum. Golums,
                    zombies unrelenting <br /> et Raimi fascinati beheading.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>Where are you located?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    Craven omni memoria patriae zombieland clairvius narcisse{" "}
                    <br /> religionis sunt diri undead historiarum. Golums,
                    zombies unrelenting <br /> et Raimi fascinati beheading.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
