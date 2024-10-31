import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Add react-icons for icons

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  subMenu?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "About Us", href: "/about-us", current: false },
  {
    name: "Services",
    href: "/services",
    current: false,
    subMenu: [
      {
        name: "Web Data Scrapping ",
        href: "/services/website-data-scraping-services",
        current: false,
      },
      {
        name: "Web Automation",
        href: "/services/professional-web-automation-services",
        current: false,
      },
    ],
  },
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleToggle = () => setIsServicesOpen(!isServicesOpen);

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <div key={item.name}>
                <div
                  className="flex items-center justify-between"
                  onClick={() => item.subMenu && handleToggle()}
                >
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-purple"
                        : "text-black hover:bg-gray-700 hover:text-purple",
                      "block py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                  {item.subMenu && (
                    <button onClick={handleToggle} className="ml-2 px-5">
                      {isServicesOpen ? (
                        <FiChevronUp className="text-purple" />
                      ) : (
                        <FiChevronDown className="text-purple" />
                      )}
                    </button>
                  )}
                </div>
                {/* Submenu */}
                {item.subMenu && isServicesOpen && (
                  <div className="ml-4 space-y-1">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-black hover:bg-gray-300 hover:text-purple py-2 px-3 rounded-md text-sm"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4"></div>
            <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
