"use client";
import React, { useState } from "react";
import Modal from "react-modal";

export default function LoginPopUp({ isOpen, closeModal }) {
  const [isRegister, setIsRegister] = useState(false);

  function switchToRegister() {
    setIsRegister(true);
  }

  function switchToLogin() {
    setIsRegister(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Log In / Register"
      className="bg-white p-6 rounded-lg shadow-2xl z-10 relative lg:w-1/2 w-3/4 m-4"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="flex justify-center mb-4">
        <span
          onClick={switchToLogin}
          className={`mr-2 p-2 cursor-pointer text-xl font-semibold ${
            isRegister ? "text-gray-500" : "text-sky-500"
          }`}
        >
          Log In
        </span>
        <span
          onClick={switchToRegister}
          className={`ml-2 p-2 cursor-pointer text-lg font-semibold ${
            isRegister ? "text-sky-500" : "text-gray-500"
          }`}
        >
          Register
        </span>
      </div>
      <div className="w-full max-w-lg mx-auto">
        {isRegister ? (
          <>
            <p className="text-center text-gray-500 mb-4">
              Create a new account to access all our cool features.
            </p>
            <form>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 mb-4"
              />
              <button
                type="submit"
                className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-700 transition-all duration-200 ease-in-out"
              >
                Register
              </button>
            </form>
            <div className="flex justify-center mt-4">
              <button
                onClick={switchToLogin}
                className="text-gray-500 hover:text-gray-400"
              >
                Already have an account? <span className="text-sky-500">Login</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-center text-gray-500 mb-4">
              Welcome back! Log in to continue.
            </p>
            <form className="w-full">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 mb-4"
              />
              <button
                type="submit"
                className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-700 transition-all duration-200 ease-in-out"
              >
                Log In
              </button>
            </form>
            <div className="flex justify-center mt-4">
              <button
                onClick={switchToRegister}
                className="text-gray-500 hover:text-gray-400"
              >
                Don&lsquo;t have an account? <span className="text-sky-500">Register</span>
              </button>
            </div>
          </>
        )}
      </div>
      <button
        onClick={closeModal}
        className="absolute top-0 right-0 m-4 text-gray-500 hover:text-red-700"
      >
        X
      </button>
    </Modal>
  );
}
