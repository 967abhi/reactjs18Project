import Car1 from "../../assets/car1.png";
const About = () => {
  return (
    <>
      <div className="bg-[#f1f5f9] flex justify-between align-center ">
        <div className=" flex gap-[225px] px-32">
          <div className="py-2">
            <img src={Car1} className="" alt="" />
          </div>
          <div className="py-28">
            <h2 className="text-3xl font-serif font-bold"> About us </h2>
            <br />

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              quos.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, mollitia.
            </p>
            <br />
            <button className=" rounded-md border-2 border-primary hover:bg-primary/80 hover:text-black duration-500 py-2 px-6 text-primary tracking-wider;r-outline">
              {" "}
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
