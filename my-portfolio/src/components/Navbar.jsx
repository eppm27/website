import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const sections = ["home", "about", "skills", "projects", "contact"];
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-[1000]">
      <div className="navbar-start">
        <button 
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
      
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer font-medium capitalize text-base hover:text-primary transition-colors duration-300"
                activeClass="text-primary font-bold"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end">
        {/* Add more actions here if needed */}
      </div>
    </div>
  );
};

export default Navbar;
