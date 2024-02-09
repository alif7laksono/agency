"use client";
import React, { useState } from "react";
import Posts from "../../db/Posts";
import Image from "next/image";
import DetailPost from "../DetailPost";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto items-center xl:w-3/4 lg:w-full lg:px-10 md:w-4/5 sm:w-4/5 w-full px-0 md:px-2 py-4 mt-16 mb-16">
      <div className="text-center w-3/4 md:w-2/3 mx-auto my-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-lg md:text-lg leading-loose text-gray-600">
          Whether you&apos;re seeking inspiration, information, or just a good
          read, you&apos;ve come to the right place. Our blog is filled with
          insightful posts crafted to spark your curiosity and ignite your
          imagination.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {Posts.map((post) => (
          <div key={post.id} onClick={() => handlePostClick(post)}>
            <Image
              src={post.images}
              alt={post.alt}
              width={300}
              height={200}
              className="w-full h-64 object-cover rounded mb-4 cursor-pointer hover:opacity-80"
            />
            <h2 className="text-xl font-bold mb-2 text-gray-500 cursor-pointer title">
              {post.title}
            </h2>{" "}
            <p className="text-gray-400 mb-2 line-clamp-2">{post.content}</p>
            <p className="cursor-pointer text-sm text-sky-500 hover:text-sky-400">
              {post.author}
            </p>
          </div>
        ))}
        {selectedPost && (
          <DetailPost
            post={selectedPost}
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
}
