import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "App Development ",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "Unlock unbeatable value with our app development services! Our industry-standard developers deliver top-notch quality at a minimal price, setting a new benchmark in the market. Don't miss out on premium solutions at unbeatable rates. Elevate your app game with us!",
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Revolutionize your online presence with our budget-friendly web design services! Our skilled industry-level designers craft visually stunning websites at a minimal cost, challenging market prices. Experience excellence without breaking the bank. Elevate your brand with our unbeatable combination of quality and affordability!",
    aosDelay: 300,
  },
  {
    name: "Graphic Designing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Transform your vision into captivating visuals with our graphic design expertise at an unprecedented price point. Our industry-standard graphic designers bring creativity to life, delivering exceptional designs without the hefty price tag. Elevate your brand aesthetics without compromising your budget. Unleash the power of impactful visuals with us!",
    aosDelay: 500,
  },
  {
    name: "Digital Marketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      " Supercharge your online presence with our digital marketing prowess at an unbeatable minimum price. Our industry-standard strategies redefine the market, ensuring maximum impact for your brand without the hefty cost. Don't settle for less; embrace results-driven digital marketing that fits your budget. Elevate your online success with us!",
    aosDelay: 700,
  },
];
const Services = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-black dark:text-white  py-12 sm:grid sm:place-items-center ">
        <div className="container">
          {/* header section  */}
          <div className="pb-12 text-center space-y-3 ">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-violet-950 dark:text-primary"
            >
              Explore Our Services{" "}
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              We are self-services data analytics software that lets you create
              visually.
            </p>
          </div>
          {/* card section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skills) => (
              <div
                data-aos="fade-up"
                data-aos-delay={skills.aosDelay}
                key={skills.name}
                className="card space-y-3"
              >
                <div>{skills.icon}</div>
                <h1 className="text-lg font-semibold">{skills.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skills.description}
                </p>
              </div>
            ))}
          </div>
          {/* button section  */}
          <div className="text-center mt-4 sm:mt-8">
            <button className="btn-primary">Learn More </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
