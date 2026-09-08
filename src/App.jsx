import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollProgress } from "./components/MotionPrimitives";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-transparent text-ink">
        <ScrollProgress />
        <Navbar />
        <main className="pt-20 sm:pt-24">
          <Home />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
