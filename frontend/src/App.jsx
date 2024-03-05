import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import logo from "/Logo.svg";
import Blue from "/Blue Shape.svg";
import Pink from "/Pink Shape.svg";
import Purple from "/Purple Shape.svg";
import Hero from "/Hero.png";
import Checkmark from "/Checkmark.svg";
import man from "/Help Avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const initScrollReveal = () => {
    const scroll = ScrollReveal({
      reset: true,
      duration: 2600,
      distance: "60px",
    });

    scroll.reveal(".image-transform", { delay: 400, origin: "top" });
    scroll.reveal(".text-transform", { delay: 300, origin: "left" });
  };
  useEffect(() => {
    initScrollReveal();

    // Clean up ScrollReveal when the component unmounts
    return () => ScrollReveal().destroy();
  }, []);
  // =====sending data to the database ====
  const [email, setEmail] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        console.log("Email submitted successfully");
        setEmail("");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div className="bg-amber-50">
      <div className="min-h-screen px-6 py-3 flex flex-col gap-16 md:flex md:gap-0">
        <header className="flex justify-between md:flex md:px-6 md:py-5 lg:px-[150px] ">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="" />
            <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-lg">
              Hosterr is hiring!
            </button>
          </div>
          <div className="lg:hidden">
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </div>
          <ul className="hidden lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-lato text-gray-500">
            <li>
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">Find Domain</a>
            </li>
            <li>
              <a href="#">Why Hosterr</a>
            </li>
          </ul>
          <div className="hidden lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-medium">
            <a href="">Sign in</a>
            <button className="bg-blue-500 px-4 py-4 font-medium text-white  rounded-md">
              Join Waitlist
            </button>
          </div>
        </header>
        <main className=" lg:flex">
          <div className="flex items-center justify-center lg:flex-1 lg:order-2 image-transform">
            <img
              src={Blue}
              alt="blue"
              className="h-64 md:h-[400px] -rotate-[45deg]"
            />
            <img
              src={Pink}
              alt="Pink"
              className="absolute h-64 -rotate-[30deg] md:h-[400px]"
            />
            <img
              src={Purple}
              alt="Purple"
              className="absolute h-64 -rotate-[15deg] md:h-[400px]"
            />
            <img src={Hero} alt="Hero" className="absolute h-64 md:h-[400px]" />
          </div>
          <div className="flex flex-col gap-10  lg:flex-1 lg:order-1 lg:mt-32 lg:px-[150px] text-transform ">
            <h1 className="text-5xl font-bold leading-tight font-playfair">
              Host your website in less than 5 minutes.
            </h1>
            <p className="font-lato text-gray-400 text-[17px]">
              With Hosterr,get your website up and running in no less than 5
              minutes with the most competitive pricing packages available
              online
            </p>
            <form
              action=""
              onSubmit={handlesubmit}
              className="flex flex-col gap-5 md:flex md:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter e-mail address "
                className="px-4 py-4 rounded-md md:w-[300px]"
              />
              <button className="px-4 py-4 text-white bg-blue-500 font-semibold rounded-md">
                Join Waitlist
              </button>
            </form>
            <div className="flex gap-2 md:-mt-4 md:text-gray-500 md:font-lato md:text-[18px] ">
              <img src={Checkmark} alt="" />
              No spam,ever. Unsubscribe anytime.
            </div>
          </div>
        </main>
        <footer className="flex flex-col gap-10 lg:px-[150px] lg:py-[100px] text-transform ">
          <div className=" flex gap-12 flex-col md:flex md:flex-row md:justify-between md:mt-16">
            <ul className="flex gap-5 cursor-pointer text-gray-400 text-xl md:mt-7">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>

            <div className=" flex   gap-5 md:mb-5 ">
              <img src={man} alt="" className="h-16" />
              <div className="">
                <h1 className="text-2xl font-playfair leading-tight">
                  Have any questions?
                </h1>
                <p className="font-bold text-2xl font-lato">
                  Talk to a specialist
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
