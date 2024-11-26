"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "../../../components/Contactus";
import Image from "next/image";
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

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleDropdown = (menuName: string) => {
    if (openDropdown === menuName) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(menuName); // Open the clicked dropdown
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const clickedOutside = Object.entries(dropdownRefs.current).every(
      ([key, ref]) => ref && !ref.contains(event.target as Node)
    );

    if (clickedOutside) {
      setOpenDropdown(null); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Disclosure as="nav" className="navbar z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
        <div className="relative flex h-16 items-center">
          <div className="flex flex-1 items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-3xl font-bold text-black flex items-center"
              >
                <Image
                  src="/3.3.png" // Replace with your image path
                  alt="Desgy Solutions Logo"
                  width={190} // Specify the width
                  height={40} // Specify the height
                  className="mr-2" // Add margin or other styling
                />
                {/* Desgy Solutions */}
              </Link>
            </div>

            {/* NAVIGATION LINKS */}
            <div className="hidden lg:flex space-x-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  ref={(el) => (dropdownRefs.current[item.name] = el)}
                >
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-black"
                    >
                      {item.name}
                    </Link>
                    {(item.subMenu || item.subMenuComp) && (
                      <div>
                        {openDropdown === item.name ? (
                          <FiChevronUp className="text-gray-700" />
                        ) : (
                          <FiChevronDown className="text-gray-700" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* DROPDOWN MENU */}
                  {(item.subMenu || item.subMenuComp) &&
                    openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                        {item.subMenu?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-gray-600 hover:bg-navyblue hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                        {item.subMenuComp?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-gray-600 hover:bg-navyblue hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* CONTACT BUTTON */}
            <Contactusform />
          </div>

          {/* MOBILE MENU ICON */}
          <div className="lg:hidden">
            <Bars3Icon
              className="block h-6 w-6 text-black"
              aria-hidden="true"
              onClick={() => toggleDropdown("mobile-menu")}
            />
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <Drawer
        isOpen={openDropdown === "mobile-menu"}
        setIsOpen={() => setOpenDropdown(null)}
      >
        <Drawerdata />
      </Drawer>
    </Disclosure>
  );
};

export default Navbar;
