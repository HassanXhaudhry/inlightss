import React from "react";
import "./App.css";
import { Flowbite } from "flowbite-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Usecase from "./components/useCase";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Usecase />
      <Pricing />
      <Blog />
      <Flowbite>
        <MyFooter />
      </Flowbite>
    </div>
  );
};

export default App;
