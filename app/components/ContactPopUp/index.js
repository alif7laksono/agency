"use client";
import React from "react";
import Image from "next/image";
import Modal from "react-modal";

function ContactPopup({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-white p-12 rounded-lg shadow-2xl z-10 relative max-w-3xl m-4">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-red-700"
        >
          X
        </button>
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
        <p className="text-center text-gray-500 mb-8">
          We&lsquo;re here to help! Send us a message and we&lsquo;ll get back
          to you as soon as possible.
        </p>
        <div className="flex justify-between mb-8 space-x-4">
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/contact.svg"
              alt="Contact"
              width={600}
              height={300}
            />
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-700 transition-all duration-200 ease-in-out">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
    </Modal>
  );
}

export default ContactPopup;
