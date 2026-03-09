import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "../../Components/Home/Hero";
import Skills from "../Skills/Skills";
import Aboutme from "../About/Aboutme";
import Projects from "../Projects/Projects";
import Academcia from "../Education/Academcia";
import Contact from "../Contact/Contact";

const Home = () => {
  // Logic to ensure user starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth Scroll Progress for the side indicator (optional high-end touch)
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-[#020202] min-h-screen selection:bg-purple-500/30">
      <motion.div
        className="fixed right-2 top-0 bottom-0 w-[1px] bg-white/5 z-50 origin-top hidden md:block"
        style={{ scaleY }}
      >
        <div className="h-full w-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50" />
      </motion.div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* HERO SECTION */}
        <section id="hero" className="relative z-10">
          <Hero />
        </section>

        {/* SECTION DIVIDER: Subtle Glow */}
        <div className="h-24 w-full bg-gradient-to-b from-[#020202] to-[#050505] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="py-20 md:py-20 relative overflow-hidden bg-[#050505]"
        >
          <Aboutme />
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 md:py-20 bg-[#020202]">
          <Skills />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 md:py-20 bg-[#050505] relative">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
          <Projects />
        </section>

        {/* ACADEMIC SECTION */}
        <section id="academic" className="py-20 md:py-20 bg-[#020202]">
          <Academcia />
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="py-20 md:py-20 bg-[#050505] relative overflow-hidden"
        >
          {/* Bottom Glow reflecting the Hero's style */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
          <Contact />
        </section>
      </motion.main>
    </div>
  );
};

export default Home;
