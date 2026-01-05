import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../../Components/Home/Hero";
import Skills from "../Skills/Skills";
import Aboutme from "../About/Aboutme";
import Projects from "../Projects/Projects";
import Academcia from "../Education/Academcia";
import Contact from "../Contact/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <Skills />
      <Aboutme />
      <Projects />
      <Academcia />
      <Contact />
    </motion.div>
  );
};

export default Home;