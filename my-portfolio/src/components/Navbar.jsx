import { Link } from "react-scroll";

const Navbar = () => (
  <nav
    style={{
      display: "flex",
      gap: "20px",
      position: "fixed",
      top: 0,
      backgroundColor: "#fff",
      width: "100%",
      padding: "1rem",
      zIndex: 1000,
    }}
  >
    {["home", "about", "skills", "projects", "contact"].map((section) => (
      <Link
        key={section}
        to={section}
        smooth={true}
        duration={500}
        offset={-70}
        style={{ cursor: "pointer" }}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </Link>
    ))}
  </nav>
);

export default Navbar;
