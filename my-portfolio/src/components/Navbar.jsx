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
      {/* Full Circle Navbar - Clean Design */}
      <div className="flex justify-center items-center pt-2 sm:pt-3 px-2 sm:px-4 w-full">
        <div className="bg-base-100/10 backdrop-blur-lg rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 shadow-2xl border border-base-content/20 mx-auto">
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Logo integrated into circle */}
            <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
              <span className="font-bold text-xs sm:text-sm md:text-base text-base-content">EPPM</span>
            </div>

            {/* Separator */}
            <div className="w-px h-4 sm:h-5 md:h-6 bg-base-content/20"></div>

            {/* Navigation Links */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              {sections.map((section) => (
                <Link
                  key={section.name}
                  to={section.name}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                  onSetActive={() => setActiveSection(section.name)}
                  className={`cursor-pointer px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 rounded-full transition-all duration-300 hover:scale-110 group ${
                    activeSection === section.name
                      ? "bg-primary text-primary-content shadow-lg"
                      : "text-base-content/80 hover:text-base-content hover:bg-base-content/10"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-xs sm:text-sm md:text-base group-hover:animate-bounce">
                      {section.icon}
                    </span>
                    {/* Labels - Show on larger screens */}
                    <span className="text-xs font-medium hidden lg:block">
                      {section.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-4 sm:h-5 md:h-6 bg-base-content/20"></div>

            {/* Theme Toggle integrated into circle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full hover:bg-base-content/10 hover:scale-110 transition-all duration-300"
            >
              <span className="text-xs sm:text-sm md:text-base">{theme === "light" ? "🌙" : "☀️"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
