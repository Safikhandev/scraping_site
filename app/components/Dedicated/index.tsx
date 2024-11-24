import Image from "next/image";

const Dedicated = () => {
  return (
    <>
      <div className="relative">
        {/* <Image
          src="/images/dedicated/spiral.svg"
          height={272}
          width={686}
          alt="spiral-design"
          className="absolute left-0 hidden lg:block -z-10"
        /> */}

        <div className="mx-auto max-w-7xl px-4 my-10 sm:py-10 lg:px-8">
          <div className="text-center max-w-7xl">
            <h2 className="text-center text-4xl lg:text-5xl my-3 pt-4 font-bold sm:leading-tight">
              Why Choose Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              minima accusantium inventore repellendus perferendis voluptatem
              reprehenderit debitis quisquam obcaecati eius recusandae,
              consectetur quidem possimus pariatur maiores unde aspernatur
              asperiores. Magni suscipit quidem consectetur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-16">
            {/* COLUMN-1 */}
            <div>
              <Image
                src="/images/dedicated/man.svg"
                alt="man-icon"
                width={416}
                height={530}
                className="mx-auto md:mx-0"
              />
            </div>

            {/* COLUMN-2 */}
            <div className="relative">
              <Image
                src="images/dedicated/comma.svg"
                alt="comma-image"
                width={200}
                height={106}
                className="absolute comma-pos hidden lg:block"
              />
              <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
                Dedicated to help peoples design needs.
              </h2>
              <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                Quis ipsum suspendisse ultrices gravida risus commodo viverra
                maecenas accumsan lacus vel facilisis
              </p>
              <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
                {" "}
                Cathy Hills, CEO
              </p>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Dedicated;
