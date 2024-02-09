import React, { useState } from "react";
import Modal from "react-modal";

// Modal.setAppElement("#");

function SignUpPopup() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Sign Up</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Sign Up"
        className="bg-white p-6 rounded-lg shadow-2xl z-10 relative max-w-3xl m-4"
        overlayClassName="fixed inset-0 flex items-center justify-center z-50"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up</h2>
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
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={closeModal}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default SignUpPopup;
