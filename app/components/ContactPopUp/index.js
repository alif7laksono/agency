"use client";
import Image from "next/image";

function ContactPopup({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-12 rounded-lg shadow-2xl z-10 relative max-w-3xl m-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
        <p className="text-center text-gray-500 mb-8">
          We're here to help! Send us a message and we'll get back to you as
          soon as possible.
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
          <form className="flex-1">
            <label className="block mb-6 text-lg">
              <span className="text-gray-500">Name:</span>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full rounded-md border border-gray-500 shadow-sm p-3 text-lg text-gray-500 focus:border-sky-500"
              />
            </label>
            <label className="block mb-6 text-lg">
              <span className="text-gray-500">Email:</span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-gray-500 shadow-sm p-3 text-lg text-gray-500 focus:border-sky-500"
              />
            </label>
            <label className="block mb-6 text-lg">
              <span className="text-gray-700">Message:</span>
              <textarea
                name="message"
                className="mt-1 block w-full rounded-md border border-sky-500 shadow-sm p-3 h-32 text-lg text-gray-500 focus:border-sky-500"
              />
            </label>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-6 rounded mr-2 text-lg"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-white bg-gray-500 hover:bg-gray-700 py-3 px-6 rounded text-lg"
          >
            Close
          </button>
        </div>
      </div>
      <div
        className="bg-black bg-opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
    </div>
  );
}

export default ContactPopup;
