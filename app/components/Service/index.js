"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faDraftingCompass,
  faLaptopCode,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faPaintBrush,
    title: "Branding  Design",
    description:
      "Crafting memorable and cohesive brand identities that resonate with your target audience. This includes logo design, brand guidelines, and visual assets.",
    price: "$1000 - $3000",
  },
  {
    icon: faDraftingCompass,
    title: "Graphic Design",
    description:
      "Creating visually stunning graphics for various purposes, including advertisements, marketing materials, social media content, and print collateral.",
    price: "$500 - $2000",
  },
  {
    icon: faLaptopCode,
    title: "Web Development",
    description:
      "Designing and building responsive, user-friendly websites that effectively communicate your brand message and drive engagement. Services may include UI/UX design, front-end development, and CMS integration.",
    price: "$1500 - $5000",
  },
  {
    icon: faBullhorn,
    title: "Digital Marketing",
    description:
      "Developing strategic digital marketing campaigns to increase brand visibility, attract new customers, and drive conversions. This may involve content marketing, social media marketing, email marketing, and search engine optimization (SEO).",
    price: "$1000 - $4000",
  },
];

export default function Service() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="mx-auto items-start xl:w-3/4 lg:w-full lg:px-10 md:w-4/5 sm:w-4/5 w-full px-0 md:px-2 md:mt-24 mt-12 space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Click a service to see more details
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 mx-auto flex flex-col space-y-4 text-center">
          <div className="grid grid-cols-2 gap-x-2 gap-y-6 justify-items-center">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer flex flex-col items-center space-y-4 ${
                  selectedService.title === service.title
                    ? "text-sky-500"
                    : "text-gray-500"
                }`}
              >
                <FontAwesomeIcon icon={service.icon} className="text-3xl" />
                <h2 className="text-base text-center">{service.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-4 mt-10 lg:mt-0 text-center lg:text-start transition-all duration-500 ease-in-out">
          <h1 className="text-2xl font-semibold">{selectedService.title}</h1>
          <p className="text-base leading-relaxed text-gray-500 w-3/4 mx-auto lg:w-full">
            {selectedService.description}
          </p>
          <p className="text-base leading-relaxed text-gray-500 font-semibold">
            Estimated Price: {selectedService.price}
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
