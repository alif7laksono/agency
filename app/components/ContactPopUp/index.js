"use client";
import { useState } from "react";

function ContactPopup({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
  <div className="bg-white p-8 rounded-lg shadow-2xl z-10 relative max-w-md m-4">
    <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
    <form>
      <label className="block mb-4">
        <span className="text-gray-700">Name:</span>
        <input type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Message:</span>
        <textarea name="message" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 h-20" />
      </label>
      <div className="flex justify-between items-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700">
          Close
        </button>
      </div>
    </form>
  </div>
</div>
  );
}

export default ContactPopup;
