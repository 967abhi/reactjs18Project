import HeroImg from "../../assets/websites/team.png";

const Hero = () => {
  return (
    <>
      <main className="bg-white dark:bg-gray-950 dark:text-white duration-300">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-5 place-items-center">
            {/* image section  */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <img src={HeroImg} alt="" />
              <div
                data-aos="slide-right"
                data-aos-delay="300"
                className="bg-white dark:bg-gray-900 px-2 py-2 rounded-xl shadow-md absolute -bottom-5 -right-8 "
              >
                <p>🌟 Projects </p>
                <h1 className="font-bold">
                  600+ <span className="font-normal">Done</span>
                </h1>
              </div>
            </div>
            {/* text content section start  */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold"
              >
                Build Brands in the{" "}
                <span className="text-primary">Digital Agency </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="">
                Your Partner in navigating the ever-evolving landscape off
                digital marketing.From conceptualization to execution, we craft
                tailored solutions that drive results and elevate your brands to
                new heights.
              </p>
              <button
                className="btn-primary transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
