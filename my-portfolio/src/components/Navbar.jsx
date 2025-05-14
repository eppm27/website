import { Link } from "react-scroll";

const Navbar = () => {
  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          offset={-70}
          style={{
            cursor: "pointer",
            fontSize: "1rem",
            textTransform: "capitalize",
            color: "#333",
            fontWeight: 500,
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          activeClass="active"
        >
          {section}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
