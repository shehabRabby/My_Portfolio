import React from "react";
import Hero from "../../Components/Home/Hero";
import Aboutme from "../About/Aboutme";
import Projects from "../Projects/Projects";
import Academcia from "../Education/Academcia";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Home = () => {
  return <div>
    <Hero></Hero>
    <Skills></Skills>
    <Aboutme></Aboutme>
    <Projects></Projects>
    <Academcia></Academcia>
    <Contact></Contact>
  </div>;
};

export default Home;
