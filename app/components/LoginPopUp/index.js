"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function LoginPopup({ onClose }) {
  const ref = useRef();
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center z-20">
      <div ref={ref} className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <div className="flex">
          <div className="w-1/2">
            <Image
              src="/images/login.svg"
              width={620}
              height={1000}
              alt="Login"
            />
          </div>
          <div className="w-1/2 space-y-4">
            <div>
              <div>
                <Image src="/vercel.svg" width={200} height={800} alt="Logo" />
                <div className="flex justify-start space-x-4 mt-4">
                  <button onClick={() => setIsRegister(false)}>
                    <h2>Login</h2>
                  </button>
                  <button onClick={() => setIsRegister(true)}>
                    <h2>Register</h2>
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Welcome back! Please login to your account.
              </p>
              <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-100 transition-all duration-200 ease-in-out">
                <FaGoogle />
                <span>Sign in with Google</span>
              </button>
            </div>
            {!isRegister ? (
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <button className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-700 transition-all duration-200 ease-in-out">
                  Login
                </button>
                <Link href="/forgot-password" className="text-sm text-sky-500">
                  Forgot password?
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-700 transition-all duration-200 ease-in-out">
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
