"use client";
import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Testimonials from "./components/Testimonials";
import Service from "./components/Service/";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  return (
    <div
      id="/"
      className="bg-gradient-to-b from-sky-100 to-white h-full scroll-smooth"
    >
      <Header />
      <Welcome />
      <div id="/testimonials">
        <Testimonials />
      </div>
      <div id="/services">
        <Service />
      </div>
      <div id="/blog">
        <Blog />
      </div>
      <Footer />
      <ScrollLink
        to="/"
        smooth={true}
        className="fixed bottom-4 right-4 px-2 py-1 rounded-full flex items-center justify-center cursor-pointer hover:text-gray-400"
      >
        <FaArrowUp className="mr-2 text-gray-5000" /> Back to Top
      </ScrollLink>
    </div>
  );
}
