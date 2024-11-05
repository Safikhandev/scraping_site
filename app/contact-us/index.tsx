import React from "react";

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
              <h1 className="text-4xl mb-5 text-center lg:text-6xl md:text-5xl sm:text-3xl font-bold text-white">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="isolate px-6 py-24 sm:py-32 lg:px-8 my-12"
        style={{ backgroundColor: "#f2f2ed" }}
      >
        <div className="border-spacing-11">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Contact sales
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Your name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Enter your name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                  </div>
                  <input
                    type="tel"
                    name="phone-number"
                    placeholder="Enter phone number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="services"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Services
                </label>
                <div className="mt-2.5">
                  <select
                    id="services"
                    name="services"
                    className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="web data scraping">Web Data Scraping</option>
                    <option value="web automation">Web Automation</option>
                    {/* <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="support">Support</option> */}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter Message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-navyblue bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
    </>
  );
};

export default Index;
