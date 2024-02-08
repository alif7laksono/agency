import React from "react";

export default function Welcome() {
  return (
    <div className="mx-auto items-center xl:w-3/4 lg:w-full lg:px-10 md:w-4/5 sm:w-4/5 w-full px-0 md:px-2 md:mt-24 mt-12">
      <h1 className="leading-normal md:leading-snug text-2xl md:text-5xl text-gray-900 font-bold capitalize text-center md:w-3/4 w-full px-6 md:px-0 mx-auto">
        we believe in the power of creativity to transform ideas into
        extraordinary experiences
      </h1>
      <p className="text-lg text-center md:w-2/3 w-full px-6 md:px-0 mx-auto mt-4 md:mt-6 text-gray-600">
        As pioneers in the realm of <span className="text-sky-500">design</span>
        , <span className="text-sky-500">branding</span>, and{" "}
        <span className="text-sky-500">digital innovation</span>, we're
        dedicated to bringing your vision to life in the most captivating and
        impactful way possible.
      </p>
      <form className="flex flex-row items-center justify-between w-full max-w-lg mx-auto p-5 rounded-lg mt-4 md:mt-6">
        <button
          type="submit"
          className="w-1/3 p-4 text-white text-sm bg-gray-900 hover:bg-opacity-90 rounded-lg focus:outline-none focus:bg-skt-500 md:mr-4 mr-2"
        >
          Get Started
        </button>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-3/4 p-4 text-gray-500 border border-gray-200 rounded-md focus:outline-none focus:border-sky-500"
        />
      </form>
    </div>
  );
}
