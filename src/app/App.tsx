import React from "react";
import "../assets/costum.scss";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Welcome from "../components/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
