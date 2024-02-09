import React from "react";
import Modal from "react-modal";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaTimes } from "react-icons/fa";
import {
  FaRegClock,
  FaRegCalendarAlt,
  FaTags,
  FaFolderOpen,
} from "react-icons/fa";

export default function DetailPost({ post, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="m-4 md:m-auto md:w-3/4 lg:w-1/2 overflow-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-10 rounded-lg overflow-y-auto max-h-screen">
        <FaTimes
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer"
        />

        <h2 className="text-2xl font-bold mb-4 text-center">{post.title}</h2>
        <Image
          src={post.images}
          alt={post.alt}
          width={500}
          height={300}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center items-center my-6 text-gray-500 italic">
          <div className="flex items-center space-x-3">
            <FaFolderOpen />
            <p className="">{post.category}</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaRegClock />
            <p>{post.time}</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaRegCalendarAlt />
            <p>{post.date}</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaTags />
            <p>{post.tags.join(", ")}</p>
          </div>
        </div>

        <p className="text-lg md:text-base leading-loose text-gray-600">
          {post.content}
        </p>
        <br />
        <p className="text-lg md:text-base leading-loose text-gray-600">
          {post.content2}
        </p>
        <br />
        <p className="text-lg md:text-base leading-loose text-gray-600">
          {post.content3}
        </p>
        <br />
        <p className="text-lg md:text-base leading-loose text-gray-600">
          {post.content4}
        </p>
        {/* <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button> */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold mb-2 text-gray-500 cursor-pointer title">
            Spread the Word
          </h2>
          <div>
            <FaFacebook className="inline mr-4 cursor-pointer text-2xl text-gray-500 hover:text-gray-700" />
            <FaTwitter className="inline mr-4 cursor-pointer text-2xl text-gray-500 hover:text-gray-700" />
            <FaLinkedin className="inline cursor-pointer text-2xl text-gray-500 hover:text-gray-700" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
