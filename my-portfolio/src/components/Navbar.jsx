import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const sections = [
    { name: "home", icon: "🏠", label: "Home" },
    { name: "about", icon: "🧑‍💻", label: "About" },
    { name: "skills", icon: "🛠️", label: "Skills" },
    { name: "experience", icon: "💼", label: "Experience" },
    { name: "projects", icon: "🎨", label: "Projects" },
    { name: "contact", icon: "📱", label: "Contact" },
  ];

  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[1000]">
      {/* Combined Circular Navbar */}
      <div className="flex justify-center pt-3">
        <div className="navbar bg-base-100/10 backdrop-blur-lg rounded-full px-4 py-2 shadow-2xl border border-base-content/20 max-w-fit">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="bg-base-100/20 rounded-full px-2 py-1 mr-2">
              <span className="font-bold text-xs text-base-content">EP</span>
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center gap-1">
              {sections.map((section) => (
                <li key={section.name}>
                  <Link
                    to={section.name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                    onSetActive={() => setActiveSection(section.name)}
                    className={`cursor-pointer px-2 py-1 rounded-full transition-all duration-300 hover:scale-110 group ${
                      activeSection === section.name
                        ? "bg-primary text-primary-content shadow-lg"
                        : "text-base-content/80 hover:text-base-content hover:bg-base-content/10"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-sm group-hover:animate-bounce">
                        {section.icon}
                      </span>
                      <span className="text-xs font-medium hidden lg:block">
                        {section.label}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-1 rounded-full bg-base-100/20 hover:bg-base-content/10 hover:scale-110 transition-all duration-300"
            >
              <span className="text-sm">{theme === "light" ? "🌙" : "☀️"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
