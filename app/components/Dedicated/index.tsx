import Image from "next/image";

const Dedicated = () => {
  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 my-10 sm:py-10 lg:px-8">
          <div className="text-center max-w-7xl">
            {/* Title with scroll animation */}
            <h2
              className="text-center text-4xl lg:text-5xl my-3 pt-4 font-bold sm:leading-tight"
              data-aos="fade-up" // Animation for title
            >
              Why Choose Us
            </h2>

            {/* Paragraph with scroll animation */}
            <p
              data-aos="fade-up" // Animation for paragraph
              data-aos-delay="200" // Delay the animation slightly for effect
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              minima accusantium inventore repellendus perferendis voluptatem
              reprehenderit debitis quisquam obcaecati eius recusandae,
              consectetur quidem possimus pariatur maiores unde aspernatur
              asperiores. Magni suscipit quidem consectetur.
            </p>
          </div>

          {/* Grid Section with images and text */}
          <div className="grid grid-cols-1 md:grid-cols-2 my-16">
            {/* Column 1 with image animation */}
            <div
              data-aos="fade-left" // Image scroll animation from the left
            >
              <Image
                src="/images/home/home page pic.png"
                alt="man-icon"
                width={416}
                height={530}
                className="mx-auto md:mx-0 rounded"
              />
            </div>

            {/* Column 2 with text and comma animation */}
            <div className="relative">
              <Image
                src="images/dedicated/comma.svg"
                alt="comma-image"
                width={200}
                height={106}
                className="absolute comma-pos hidden lg:block"
                data-aos="fade-right" // Animation for comma image
              />
              <h2
                className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start"
                data-aos="fade-up" // Animation for the heading text
              >
                Dedicated to help peoples design needs.
              </h2>
              <p
                className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start"
                data-aos="fade-left" // Animation for the first paragraph text
                data-aos-delay="400" // Delay for staggered effect
              >
                Quis ipsum suspendisse ultrices gravida risus commodo viverra
                maecenas accumsan lacus vel facilisis
              </p>
              <p
                className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start"
                data-aos="fade-left" // Animation for the second paragraph text
                data-aos-delay="600" // Further delay for staggered effect
              >
                Quis ipsum suspendisse ultrices gravida risus commodo viverra
                maecenas accumsan lacus vel facilisis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dedicated;
