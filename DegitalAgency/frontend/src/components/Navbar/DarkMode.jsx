import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun className="text-2xl" onClick={() => setTheme("light")} />
      ) : (
        <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")} />
      )}
    </>
  );
};

export default DarkMode;
