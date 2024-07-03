import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./component/Navbar.jsx";
import Navbar from "./component/Navbar.jsx";
import HeroSection from "./Screen/HeroSection.jsx";
import HappyMeal from "./Screen/HappyMeal.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HappyMeal />
    </>
  );
}

export default App;
