import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // or 'react-router-dom' depending on your setup
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Your verified Resume link from Google Drive
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1MFjgM3taPDCTlZqzzax57t3DWzLlL6Xs";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navigation links including Skills
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about-me" },
    { name: "Skills", path: "/skills" }, // Added here
    { name: "Projects", path: "/projects" },
    { name: "Academic", path: "/academic" },
    { name: "Achievement", path: "/achievement" },
    { name: "Contact", path: "/contact-me" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tighter text-white cursor-pointer"
        >
          <Link to="/">
            SHEHAB<span className="text-purple-500">.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium text-gray-300">
            {navLinks.map((link, idx) => (
              <motion.li key={idx} whileHover={{ y: -2, color: "#fff" }}>
                <Link
                  to={link.path}
                  className="hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href={resumeLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white shadow-lg shadow-purple-500/20"
          >
            RESUME <FaDownload />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[75%] bg-black/95 backdrop-blur-2xl z-50 flex flex-col p-10 lg:hidden border-l border-white/10"
          >
            {/* Close button inside sidebar */}
            <button
              className="self-end text-white text-3xl mb-10"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="flex flex-col space-y-8 text-2xl font-semibold text-white">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href={resumeLink}
                className="w-full flex justify-center items-center gap-3 py-4 bg-white text-black rounded-xl font-bold hover:bg-purple-500 hover:text-white transition-all"
              >
                Download CV <FaDownload />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;