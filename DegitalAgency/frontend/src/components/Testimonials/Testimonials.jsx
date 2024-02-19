import Slider from "react-slick";
const testimonialData = [
  {
    id: 1,
    name: "David Calathon- Director of Design Operations,New York",
    text: "The   results have been incredible. With Power Digital , it feels like they are in our trench, supporting and understanding us. They are lika a partner and mentor in helping us get where we want to be .",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "David Calathon- Director of Design Operations,New York",
    text: "The   results have been incredible. With Power Digital , it feels like they are in our trench, supporting and understanding us. They are lika a partner and mentor in helping us get where we want to be .",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "David Calathon- Director of Design Operations,New York",
    text: "The   results have been incredible. With Power Digital , it feels like they are in our trench, supporting and understanding us. They are lika a partner and mentor in helping us get where we want to be .",
    img: "https://picsum.photos/101/101",
  },
];
const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10 dark:text-white">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => (
                <div key={id} className="my-6">
                  <div className="flex flex-col sm:flex-row  gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                    <img
                      src={img}
                      alt=""
                      className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                    />
                    <div className="space-y-4">
                      <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                        {text}
                      </p>
                      <p className="text-xl font-bold">{name}</p>
                    </div>
                    <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0 ">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
