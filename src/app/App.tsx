import React from "react";
import "../assets/costum.scss";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <Contact />
    </div>
  );
}

export default App;
