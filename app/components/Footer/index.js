import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-500 py-10">
      <div className="xl:w-3/4 lg:w-full lg:px-10 md:w-4/5 sm:w-4/5 w-full mx-auto px-10 md:px-2 py-4 grid md:grid-cols-3 grid-cols-2  gap-4 text-base">
        <div className="lg:flex md:flex flex-col items-center justify-start text-center p-4 space-y-2 hidden">
          <h2 className="font-bold text-2xl mb-2">About Us</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Customer Support
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              About Us
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Privacy Policy
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Terms of Service
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
          <h2 className="font-bold text-2xl mb-2">Contact Us</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Contact Us
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Careers
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Press
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Blog
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
          <h2 className="font-bold text-2xl mb-2">Services</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Services
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Pricing
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Documentation
            </li>
            <li className="hover:text-blue-500 transition ease-in-out duration-200">
              Guides
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center lg:justify-center justify-start text-center p-4 space-y-2">
        <span>Copyright © 2024, Mezzaluna Inc</span>
        <div className="md:flex md:items-center md:space-x-2 space-y-2 flex-col md:flex-row">
          <span className="mb-2 md:mb-0">
            by <b>Alif Laksono</b>
          </span>
          <div className="flex space-x-2">
            <FaFacebook className="text-xl hover:text-blue-500 transition ease-in-out duration-200" />
            <FaTwitter className="text-xl hover:text-blue-500 transition ease-in-out duration-200" />
            <FaInstagram className="text-xl hover:text-blue-500 transition ease-in-out duration-200" />
            <FaLinkedin className="text-xl hover:text-blue-500 transition ease-in-out duration-200" />
          </div>
        </div>
      </div>
    </footer>
  );
}
