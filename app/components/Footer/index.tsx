import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface LinkType {
  name: string;
  url: string;
}

interface ProductType {
  id: number;
  section: string;
  link: LinkType[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "About Us", url: "/about-us" },
      { name: "Contact Us", url: "/contact-us" },
      { name: "Case Studies", url: "/case-studies" },
    ],
  },
  {
    id: 2,
    section: "Our Services",
    link: [
      { name: "Web Data Scrapping", url: "/website-data-scraping-services" },
      { name: "Web Automation", url: "/professional-web-automation-services" },
    ],
  },
  {
    id: 3,
    section: "Pages",
    link: [
      { name: "Faqs", url: "/faqs" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms & Conditions", url: "/terms-of-service" },
    ],
  },
  {
    id: 4,
    section: "Contact Us",
    link: [
      { name: "+92 324 9898343", url: "tel:+92 324 9898343" },
      {
        name: "sheikhzain260@gmail.com",
        url: "mailto:sheikhzain260@gmail.com",
      },
    ],
  },
];

const footer = () => {
  return (
    <div className="bg-[#2a579b]" id="first-section">
      <div className="mx-auto max-w-2xl pt-8 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8"
          data-aos="fade-up" // Fades up the entire grid when it enters the viewport
          data-aos-duration="1200"
        >
          {/* COLUMN-1 */}
          <div
            className="col-span-4"
            data-aos="fade-right" // Fade in from right for the first column
            data-aos-duration="1000"
          >
            <Image
              src="/images/footer/Black.png"
              className="mb-7"
              width={110}
              height={50}
              alt="Scraping Genius"
              data-aos="zoom-in" // Zoom in effect for the logo
              data-aos-duration="1500"
            />
            <div className="flex gap-4">
              <div
                className="footer-icons"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <Link href="https://facebook.com">
                  <Image
                    src={"/images/footer/vec.svg"}
                    alt="facebook"
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div
                className="footer-icons"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                <Link href="https://twitter.com">
                  <Image
                    src={"/images/footer/twitter.svg"}
                    alt="twitter"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div
                className="footer-icons"
                data-aos="fade-up"
                data-aos-duration="1700"
                data-aos-delay="400"
              >
                <Link href="https://instagram.com">
                  <Image
                    src={"/images/footer/instagram.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMNS-2/3 */}
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative col-span-2"
              data-aos="fade-left" // Fade in from left for product sections
              data-aos-duration="1200"
            >
              <p className="text-white text-xl font-bold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link, index) => (
                  <li
                    key={index}
                    className="mb-5"
                    data-aos="fade-up" // Fade up effect for the links
                    data-aos-duration="1500"
                  >
                    <Link
                      href={link.url}
                      className="text-white text-lg hover:text-[#e76f09] font-normal mb-6 space-links"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}
      <div
        className="mx-auto max-w-2xl lg:max-w-7xl"
        data-aos="fade-up" // Fade-up effect for the footer section
        data-aos-duration="1200"
      >
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div data-aos="zoom-in" data-aos-duration="500">
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2024 - All Rights Reserved by
                <Link href="/"> Web Scraping</Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/privacy-policy">
                <h3
                  className="text-offwhite pr-6"
                  data-aos="fade-right" // Fade-right effect for the privacy policy link
                  data-aos-duration="1300"
                >
                  Privacy policy
                </h3>
              </Link>
              <Link href="/terms-of-service">
                <h3
                  className="text-offwhite pl-6 border-solid border-l border-footer"
                  data-aos="fade-left" // Fade-left effect for the terms link
                  data-aos-duration="1300"
                >
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
