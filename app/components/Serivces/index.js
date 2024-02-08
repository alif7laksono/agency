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
    title: "Branding and Identity Design",
    description:
      "Crafting memorable and cohesive brand identities that resonate with your target audience. This includes logo design, brand guidelines, and visual assets.",
  },
  {
    icon: faDraftingCompass,
    title: "Graphic Design",
    description:
      "Creating visually stunning graphics for various purposes, including advertisements, marketing materials, social media content, and print collateral.",
  },
  {
    icon: faLaptopCode,
    title: "Web Design and Development",
    description:
      "Designing and building responsive, user-friendly websites that effectively communicate your brand message and drive engagement. Services may include UI/UX design, front-end development, and CMS integration.",
  },
  {
    icon: faBullhorn,
    title: "Digital Marketing",
    description:
      "Developing strategic digital marketing campaigns to increase brand visibility, attract new customers, and drive conversions. This may involve content marketing, social media marketing, email marketing, and search engine optimization (SEO).",
  },
];

export default function index() {
  return (
    <div className="">
      <div className="mx-auto items-center xl:w-3/4 lg:w-full lg:px-10 md:w-4/5 sm:w-4/5 w-full px-0 md:px-2 py-4 ">
        <div className="text-center w-3/4 md:w-2/3 mx-auto my-8">
          <h1 className="text-3xl text-sky-500 mb-4 ">Our Services</h1>
          <p className="text-base md:text-lg leading-loose text-gray-400">
            At Mezzaluna, we are thrilled to introduce you to our comprehensive
            suite of creative services designed to elevate your brand and
            captivate your audience.
          </p>
        </div>
        <ul className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex flex-col items-center p-4 border-sky-500 rounded-lg"
            >
              <FontAwesomeIcon
                icon={service.icon}
                className="text-4xl mb-4 text-sky-500"
              />
              <div className="text-center space-y-4">
                <h2 className="text-gray-500 text-lg font-semibold">
                  {service.title}
                </h2>
                <p className="text-base text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
