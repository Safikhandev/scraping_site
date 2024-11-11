import React from "react";
import Image from "next/image";
import Link from "next/link";
const imgContent = () => {
  return (
    <>
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Left Section - About Us */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ABOUT <span className="text-orange-500">US</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry standard dummy text
              ever since an unknown printer took a galley of type.
            </p>
            <p className="text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don&apos;t look even
              slightly believable.
            </p>
            <h4 className="font-semibold text-orange-500 mb-2">
              Standard dummy text
            </h4>
            <ul className="list-none space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔</span>
                All the Lorem Ipsum generators on the Internet tend
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔</span>
                Repeat predefined chunks as necessary, making this the first
                true generator
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✔</span>
                Many variations of passages of Lorem Ipsum available
              </li>
            </ul>
            <Link href="/contact-us">
              <button className="bg-orange-500 text-black border border-black py-2 px-6 rounded-full hover:bg-navyblue hover:text-white transition">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right Section - Contact Form */}
          <div className="relative ">
            <div className="absolute top-0 left-0 w-20 h-20 bg-orange-500 rounded-tr-lg rounded-bl-lg"></div>

            {/* Image Section */}
            <div className="w-full flex justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/banner/banner.webp" // Replace with the path to your image
                alt="Contact WSE Electric"
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}
      {/* ----------------------------------------------------------- */}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-2xl">
          {/* Left Section - Text Content */}
          <div className="p-11">
            <h4 className="text-orange-500 font-semibold mb-2">ABOUT US</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              OUR 10 YEARS WORKING EXPERIENCE DESIGN.
            </h2>
            <p className="text-gray-600 mb-4">
              Nulla feugiat aliquam purus, ac ultrices augue aliquam vel. Sed
              venenatis a nunc.
            </p>
            <p className="text-gray-600 mb-6">
              Donec scelerisque dolor id nunc dictum, interdum gravida mauris
              rhoncus. Aliquam at ultricies nunc. In sem leo, fermentum at lorem
              in, porta finibus mauris. Aliquam consectetur, ex in gravida
              porttitor.
            </p>
            <div className="bg-navyblue text-white p-4 rounded-lg mb-4">
              <p className="mb-2">
                <span className="font-bold text-xl">10</span> YEARS EXPERIENCE.
              </p>
              <p className="mb-2">
                <span className="font-bold text-xl">350</span> PROJECTS
                COMPLETED.
              </p>
              <p>
                <span className="font-bold text-xl">20+</span> WORLDWIDE
                BRANCHES.
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/banner/banner.webp" // Replace with the path to your image
              alt="Experienced Workers"
              width={500} // Adjust width as needed
              height={600} // Adjust height as needed
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title and Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted Advisor For Business Continuity Solutions
            </h2>
            <p className="text-gray-600">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>

          {/* Service List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-bold shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Business Continuity Managed Services
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-bold shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Business Continuity Managed Services
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-bold shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Business Continuity Managed Services
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default imgContent;
