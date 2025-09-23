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
      {/* Fun Floating Navbar */}
      <div className="flex justify-center pt-4">
        <div className="navbar bg-base-100/10 backdrop-blur-lg rounded-full px-6 py-3 shadow-2xl border border-base-content/20 max-w-fit">
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
                  className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 group ${
                    activeSection === section.name
                      ? "bg-primary text-primary-content shadow-lg"
                      : "text-base-content/80 hover:text-base-content hover:bg-base-content/10"
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg group-hover:animate-bounce">
                      {section.icon}
                    </span>
                    <span className="text-xs font-medium hidden md:block">
                      {section.label}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating Theme Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={toggleTheme}
          className="btn btn-circle bg-base-100/10 backdrop-blur-lg border-base-content/20 hover:bg-base-content/10 hover:scale-110 transition-all duration-300 shadow-2xl"
        >
          <span className="text-xl">{theme === "light" ? "🌙" : "☀️"}</span>
        </button>
      </div>

      {/* Fun Logo */}
      <div className="fixed top-4 left-4">
        <div className="bg-base-100/10 backdrop-blur-lg rounded-full p-3 shadow-2xl border border-base-content/20">
          <span className="font-bold text-sm text-base-content">EP</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
