import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen bg-transparent ${
        isDark ? "text-slate-100" : "text-slate-900"
      }`}
    >
      <Navbar />
      <main className="pt-24">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
