import carPng from "../../assets/banner-car.png";
const Hero = () => {
  return (
    <>
      <div className="flex gap-x-40">
        <div className="relative top-[200px] left-10">
          <span className="text-primary text-[24px] leading-10 font-serif font-[400px]">
            Effortless
          </span>
          <br />
          <span className="text-[72px] font-serif font-bold leading-20">
            Car Rental
          </span>
          <br />
          <p className="text-[16px] leading-[24px] font-[400]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            veritatis explicabo quibusdam quae reprehenderit ab
          </p>
          <button className="bg-primary text-center py-2 px-6 mt-[20px] rounded-[5px]">
            Get Started
          </button>
        </div>
        <div className="">
          <img src={carPng} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
