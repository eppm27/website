import { Link } from "react-scroll";

const Navbar = () => {
  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 bg-white/90 backdrop-blur-md shadow-md z-[1000] flex justify-center gap-8">
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer text-gray-800 font-medium capitalize text-base hover:text-cornflower transition-colors duration-300"
          activeClass="text-skyblue font-bold"
        >
          {section}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
