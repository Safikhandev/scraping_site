import React from "react";
import Image from "next/image";
import Link from "next/link";
const ServicesTypeCard = () => {
  const services = [
    {
      id: 1,
      title: "Industrial Electric",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/banner/banner.webp", // Replace with your image path
      buttonLabel: "Read More",
    },
    {
      id: 2,
      title: "Residential Electric",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/banner/banner.webp", // Replace with your image path
      buttonLabel: "Read More",
    },
    {
      id: 3,
      title: "Automation Electric",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/banner/banner.webp", // Replace with your image path
      buttonLabel: "Read More",
    },
  ];

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center mb-12">
            OUR <span className="text-orange-500">SERVICES</span>
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={250}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="#">
                    <button className="bg-orange-500 text-black border border-black py-2 px-6 rounded-full hover:bg-navyblue hover:text-white transition">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesTypeCard;
