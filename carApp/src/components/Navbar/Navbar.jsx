const navLinks = [
  {
    id: 1,
    Name: "HOME",
    link: "/#home",
  },
  {
    id: 2,
    Name: "CARS",
    link: "/#car",
  },
  {
    id: 3,
    Name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    Name: "BOOKING",
    link: "/#Booking",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="flex sticky top-0 z-10 justify-between py-2 shadow-md">
        <div className="">
          <span className="text-[30px] font-bold leading-10 px-10 font-serif ">
            Car Rental
          </span>
        </div>
        <div className=" px-20   text-[18px] font-semibold leading-10">
          <ul className=" flex items-center gap-8">
            {navLinks.map(({ id, Name, link }) => (
              <li
                key={id}
                className="list-none hover:text-primary transition-all duration-300 hover:underline "
              >
                <a href={link}>{Name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
