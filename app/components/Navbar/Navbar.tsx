"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "../../../components/Contactus";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);
  const toggleCompanyMenu = () => setIsCompanyOpen(!isCompanyOpen);

  return (
    <Disclosure as="nav" className="navbar z-50">
      <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
        <div className="relative flex h-12 sm:h-20 items-center">
          <div className="flex flex-1 items-center sm:justify-between">
            {/* LOGO */}
            <div className="flex flex-shrink-0 items-center border-right">
              <Link
                href="/"
                className="text-2xl sm:text-4xl font-semibold text-black"
              >
                Desgy Solutions
              </Link>
            </div>

            {/* LINKS */}
            <div className="hidden lg:flex items-center border-right">
              <div className="flex justify-end space-x-4">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900"
                            : "navlinks hover:text-black",
                          "px-3 py-4 rounded-md text-lg font-normal"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                      {item.subMenu && (
                        <button onClick={toggleServicesMenu} className="ml-1">
                          {isServicesOpen ? (
                            <FiChevronUp className="text-purple" />
                          ) : (
                            <FiChevronDown className="text-purple" />
                          )}
                        </button>
                      )}
                      {item.subMenuComp && (
                        <button onClick={toggleCompanyMenu} className="ml-1">
                          {isCompanyOpen ? (
                            <FiChevronUp className="text-purple" />
                          ) : (
                            <FiChevronDown className="text-purple" />
                          )}
                        </button>
                      )}
                    </div>
                    {item.subMenuComp && isCompanyOpen && (
                      <div className="absolute left-0 z-50 mt-2 space-y-1 bg-white shadow-lg rounded-md">
                        {item.subMenuComp.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-black w-48 hover:bg-navyblue hover:text-white hover:text-purple py-2 px-3 rounded-md text-base"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.subMenu && isServicesOpen && (
                      <div className="absolute left-0 z-50 mt-2 space-y-1 bg-white shadow-lg rounded-md">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-black w-48 hover:bg-navyblue hover:text-white hover:text-purple py-2 px-3 rounded-md text-base"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT BUTTON */}

            <Contactusform />
          </div>

          {/* MOBILE MENU ICON */}
          <div className="block lg:hidden">
            <Bars3Icon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      {/* MOBILE NAVIGATION DRAWER */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Drawerdata />
      </Drawer>
    </Disclosure>
  );
};

export default Navbar;
