"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsData from "../../db/TestimonialsData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

var settings = {
  dots: false, // Remove the dots
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Display one testimonial at a time on big screens
  slidesToScroll: 1,
  autoplay: true, // Slide automatically
  autoplaySpeed: 2000, // Slide every 3 seconds
  responsive: [
    // Adjust the style on medium and small screens
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false, // Remove the dots
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export default function Testimonials() {
  const sliderRef = useRef();

  const newSettings = {
    ...settings,
    nextArrow: (
      <FontAwesomeIcon
        icon={faArrowRight}
        onClick={() => sliderRef.current.slickNext()}
      />
    ),
    prevArrow: (
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => sliderRef.current.slickPrev()}
      />
    ),
  };

  return (
    <div className="mx-auto items-center xl:w-1/2 lg:w-3/4 md:w-full sm:w-full w-full px-4 py-4 mt-24">
      <h1 className="text-3xl font-bold text-center mb-4">
        Our Happy Customers
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        We are grateful for the kind words from our customers. Here&rsquo;s what
        they have to say:
      </p>
      <Slider ref={sliderRef} {...settings}>
        {TestimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-4 bg-transparent rounded-lg flex flex-col items-center text-center"
          >
            <p className="mx-auto text-gray-500 line-clamp-3 mb-4 text-base leading-loose">
              {testimonial.comment}
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="w-12 h-12 rounded-full"
              />
              <h2 className="text-xl text-gray-500">{testimonial.name}</h2>
              <p className="text-sm text-gray-500">{testimonial.occupation}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center space-x-8 mt-4 text-gray-700">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => sliderRef.current.slickPrev()}
          className="cursor-pointer text-2xl"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => sliderRef.current.slickNext()}
          className="cursor-pointer text-2xl"
        />
      </div>
    </div>
  );
}
