import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const chooseLinks = [
  {
    id: 1,
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    id: 2,
    Name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    id: 3,
    Name: "Experience Drivers ",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

const Chooseus = () => {
  return (
    <>
      <div>
        <div>
          <h1 className=" text-center font-serif text-[36px] font-bold  mt-8">
            Why Choose Us{" "}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 py-6">
          {chooseLinks.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center bg-black h-[290px] group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1 className="text-2xl font-bold">{skill.name}</h1>
              <p>{skill.description}</p>
              <a
                href={skill.link}
                className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chooseus;
