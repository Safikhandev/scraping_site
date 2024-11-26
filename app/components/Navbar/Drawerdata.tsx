"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  subMenu?: NavigationItem[];
  subMenuComp?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  {
    name: "Company",
    href: "#",
    current: false,
    subMenuComp: [
      { name: "Case Studies", href: "/case-studies", current: false },
      { name: "Contact Us", href: "/contact-us", current: false },
      { name: "Faqs", href: "/faqs", current: false },
      { name: "Privacy Policy", href: "/privacy-policy", current: false },
      { name: "Terms & Conditions", href: "/terms-of-service", current: false },
    ],
  },
  {
    name: "Services",
    href: "/services",
    current: false,
    subMenu: [
      {
        name: "Web Data Scraping",
        href: "/website-data-scraping-services",
        current: false,
      },
      {
        name: "Web Automation",
        href: "/professional-web-automation-services",
        current: false,
      },
    ],
  },
  { name: "About Us", href: "/about-us", current: false },
  { name: "Portfolio", href: "/portfolio", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Drawerdata = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (menuName: string | null) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto bg-white ">
      <div className="py-4 px-6">
        {navigation.map((item) => (
          <div key={item.name} className="mb-2">
            <div className="flex items-center justify-between">
              {/* Main Link */}
              <Link
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-purple font-semibold"
                    : "text-black hover:text-purple",
                  "block text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
              {/* Dropdown Toggle */}
              {(item.subMenu || item.subMenuComp) && (
                <button
                  onClick={() => handleToggle(item.name)}
                  className="ml-4 text-purple focus:outline-none"
                  aria-label={`Toggle submenu for ${item.name}`}
                >
                  {openDropdown === item.name ? (
                    <FiChevronUp className="text-lg" />
                  ) : (
                    <FiChevronDown className="text-lg" />
                  )}
                </button>
              )}
            </div>
            {/* Submenu */}
            {item.subMenu && openDropdown === item.name && (
              <div className="mt-2 ml-4 bg-gray-50 rounded-md p-2 transition-all">
                {item.subMenu.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block text-sm text-black hover:bg-purple-100 hover:text-purple py-1 px-2 rounded"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
            {item.subMenuComp && openDropdown === item.name && (
              <div className="mt-2 ml-4 bg-gray-50 rounded-md p-2 transition-all">
                {item.subMenuComp.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block text-sm text-black hover:bg-purple-100 hover:text-purple py-1 px-2 rounded"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        {/* Contact Us Button */}
        <div className="mt-6">
          <Link href="/contact-us">
            <button className="w-full bg-navyblue hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawerdata;
