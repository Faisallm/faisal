import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
