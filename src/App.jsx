import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import AOS from "aos";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quad",
      once: true,
      offset: 60,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
