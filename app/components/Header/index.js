"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginPopup from "../LoginPopUp";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const menuItems = [
  { name: "home", link: "/" },
  { name: "services", link: "/services" },
  { name: "testimonials", link: "/testimonials" },
  { name: "blog", link: "/blog" },
];

const sideMenuItems = [
  { name: "home", link: "/home" },
  { name: "Services", link: "/services" },
  { name: "features", link: "/features" },
  { name: "news", link: "/news" },
  { name: "Login", link: "/login", isButton: true },
  { name: "Get Started", link: "/get-started", isButton: true },
];

export default function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between mx-auto items-center xl:w-3/4 lg:w-full lg:px-10 md:w-4/5 sm:w-4/5 w-full px-0 md:px-2 py-4">
        <div className="flex justify-between items-center sm:justify-start">
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="image logo"
              width={200}
              height={50}
              className="w-1/2 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer"
            />
          </Link>
          <div className="sm:hidden">
            {!isOpen ? (
              <div
                className="text-3xl cursor-pointer transform hover:rotate-180"
                onClick={toggleMenu}
              >
                <FaBars />
              </div>
            ) : (
              <div
                className="text-3xl cursor-pointer transform hover:rotate-180"
                onClick={toggleMenu}
              >
                <FaTimes />
              </div>
            )}
          </div>
          <div className="ml-4 hidden md:hidden lg:flex xl:flex">
            <ul className="flex space-x-8 capitalize md:ml-10 lg:ml-10 xl:ml-10 ml-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-base hover:text-sky-500 transition-all duration-200 ease-in-out"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden xl:flex md:flex sm:flex space-x-4 lg:space-x-2 md:space-x-2">
          <button
            className="bg-transparent font-bold py-2 px-2 lg:px-2 xl:px-4 hover:text-sky-500"
            onClick={openLogin}
          >
            Login
          </button>
          <button
            className="bg-transparent font-bold py-2 px-4 lg:px-2 xl:px-4 hover:text-sky-500"
            onClick={openLogin}
          >
            Get Started
          </button>
          {isLoginOpen && <LoginPopup onClose={closeLogin} />}
        </div>
        {isOpen && (
          <div className="sm:hidden fixed top-16 left-0 w-full transition-all duration-500 ease-in-out transform translate-x-0 bg-gradient-to-b from-sky-100 to-white h-full z-50">
            <ul className="flex flex-col space-y-6 p-8 capitalize text-left text-base">
              {sideMenuItems.map((item) =>
                item.isButton ? (
                  <button
                    key={item.name}
                    className="bg-transparent font-bold text-left hover:text-sky-500 transition-all duration-200 ease-in-out cursor-pointer"
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </button>
                ) : (
                  <li
                    key={item.name}
                    className="hover:text-sky-500 transition-all duration-200 ease-in-out cursor-pointer font-semibold text-base"
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
