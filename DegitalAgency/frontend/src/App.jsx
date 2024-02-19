import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandLogo from "./components/BrandLogo/BrandLogo";
import Services from "./components/Services/services";
import Testimonials from "./components/Testimonials/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blogcamp from "./components/Blogcamp/Blogcamp";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <Testimonials />
      <Blogcamp />
      <Footer />
    </div>
  );
};

export default App;
