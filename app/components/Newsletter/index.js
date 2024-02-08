"use client";
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Subscribing with email ${email}`);
  };

  return (
    <div className="mx-auto items-center xl:w-3/4 lg:w-full lg:px-10 md:w-4/5 sm:w-4/5 w-full px-0 md:px-2 py-4">
      <div className="py-8 px-14 grid text-center lg:grid-cols-2 md:gap-6 lg:gap-20 gap-3 ">
        <div>
          <p className="text-sm md:text-base leading-loose text-gray-400 md:text-center lg:text-start">
            By subscribing, you agree to receive emails from Mezzaluna. You can
            unsubscribe at any time. We respect your privacy and will never
            share your information with third parties.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="text-sm md:text-base p-2 border border-gray-300 rounded mb-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-500"
          />
          <button
            type="submit"
            className="text-sm md:text-base p-2 bg-black text-white rounded w-full hover:bg-gray-700 transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
