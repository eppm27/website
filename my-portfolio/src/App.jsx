import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>
        <section id="experience" className="min-h-screen flex items-center justify-center">
          <Experience />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
