"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoginPopup from "../LoginPopUp";
import ContactPopup from "../ContactPopUp";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const sideMenuItems = [
    { name: "home", link: "/" },
    { name: "services", link: "/services" },
    { name: "testimonials", link: "/testimonials" },
    { name: "blog", link: "/blog" },
    {
      name: "Login",
      link: "/login",
      isButton: true,
      onClick: openLoginModal,
    },
    {
      name: "Get Started",
      link: "/get-started",
      isButton: true,
      onClick: () => openContact(),
    },
  ];

  const menuItems = [
    { name: "home", link: "/" },
    { name: "services", link: "/services" },
    { name: "testimonials", link: "/testimonials" },
    { name: "blog", link: "/blog" },
  ];

  function openLoginModal() {
    setIsLoginOpen(true);
  }

  function closeLoginModal() {
    setIsLoginOpen(false);
  }

  const openContact = () => {
    setIsContactOpen(true);
  };

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between mx-auto xl:w-3/4 lg:w-full lg:px-10 md:w-4/5 sm:w-4/5 w-full px-10 py-4 md:px-2">
        <div className="flex justify-between items-center sm:justify-start">
          <Image
            src="/images/logo-black.png"
            alt="image logo"
            width={200}
            height={50}
            className="w-1/3 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer"
          />

          <div className="ml-4 hidden md:hidden lg:flex xl:flex">
            <ul className="flex space-x-8 capitalize md:ml-10 lg:ml-10 xl:ml-10 ml-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer text-base transition-all duration-200 ease-in-out ${
                      activeLink === item.link ? "text-sky-500" : ""
                    }`}
                    onClick={() => setActiveLink(item.link)}
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:hidden">
            {!isOpen ? (
              <div
                className="text-xl cursor-pointer transform hover:rotate-180"
                onClick={toggleMenu}
              >
                <FaBars />
              </div>
            ) : (
              <div
                className="text-xl cursor-pointer transform hover:rotate-180"
                onClick={toggleMenu}
              >
                <FaTimes />
              </div>
            )}
          </div>
        </div>
        <div className="hidden xl:flex md:flex sm:flex space-x-4 lg:space-x-2 md:space-x-2">
          <button
            className="bg-transparent font-bold py-2 px-2 lg:px-2 xl:px-4 hover:text-sky-500"
            onClick={openLoginModal}
          >
            Log In
          </button>
          <LoginPopup isOpen={isLoginOpen} closeModal={closeLoginModal} />

          <button
            className="bg-transparent font-bold py-2 px-4 lg:px-2 xl:px-4 hover:text-sky-500"
            onClick={openContact}
          >
            Contact
          </button>
          {isLoginOpen && <LoginPopup onClose={closeLogin} />}
          <ContactPopup
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
        {isOpen && (
          <div className="sm:hidden fixed top-14 left-0 w-full transition-all duration-500 ease-in-out transform translate-x-0 bg-gradient-to-b from-sky-100 to-white h-full z-40">
            <ul className="flex flex-col space-y-6 p-8 capitalize text-left text-base">
              <li className="hover:text-sky-500 transition-all duration-200 ease-in-out cursor-pointer font-semibold text-base">
                <ScrollLink
                  to="/"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  activeClass="text-sky-500"
                >
                  home
                </ScrollLink>
              </li>
              <li className="hover:text-sky-500 transition-all duration-200 ease-in-out cursor-pointer font-semibold text-base">
                <ScrollLink
                  to="/services"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  activeClass="text-sky-500"
                >
                  services
                </ScrollLink>
              </li>
              <li className="hover:text-sky-500 transition-all duration-200 ease-in-out cursor-pointer font-semibold text-base">
                <ScrollLink
                  to="/testimonials"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  activeClass="text-sky-500"
                >
                  testimonials
                </ScrollLink>
              </li>
              <li className="hover:text-sky-500 transition-all duration-200 ease-in-out cursor-pointer font-semibold text-base">
                <ScrollLink
                  to="/blog"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  activeClass="text-sky-500"
                >
                  blog
                </ScrollLink>
              </li>
              <button
                className="bg-transparent font-bold text-left hover:text-sky-500 transition-all duration-200 ease-in-out cursor-pointer"
                onClick={openLoginModal}
              >
                Login
              </button>
              <button
                className="bg-transparent font-bold text-left hover:text-sky-500 transition-all duration-200 ease-in-out cursor-pointer"
                onClick={openContact}
              >
                Contact
              </button>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
