import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaTerminal,
  FaLightbulb,
  FaUserAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Aboutme = () => {
  const stats = [
    {
      icon: <FaCode />,
      label: "Frontend",
      value: "React / Next.js / Tailwind",
    },
    {
      icon: <FaServer />,
      label: "Backend",
      value: "Node / Express / Firebase",
    },
    { icon: <FaDatabase />, label: "Database", value: "MongoDB / PostgreSQL" },
    { icon: <FaRocket />, label: "Projects", value: "35+ Scalable Apps" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#050505]" id="about">
      {/* Decorative Blur background */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: Image & Personal Quick-Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-dashed border-purple-500/20 rounded-3xl"
              ></motion.div>

              <div className="relative z-10 bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://i.ibb.co.com/Fqd5VkY0/20251226-164824-2.jpg"
                  alt="Md. Shehab Al Rabby"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-xs font-mono text-gray-300">
                      System: Active & Ready
                    </p>
                  </div>
                </div>
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-white/20">
                <p className="text-4xl font-black text-white">35+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/80 font-bold">
                  MERN Projects
                </p>
              </div>
            </div>

            {/* Quick Personal Bio Card */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <FaUserAlt className="text-purple-500" />
                <span className="text-sm">Md. Shehab Al Rabby</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <FaMapMarkerAlt className="text-pink-500" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <FaTerminal className="text-blue-500" />
                <span className="text-sm">Full-Stack Enthusiast</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Detailed Narrative */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-purple-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">
                My Introduction
              </h2>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                I am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Shehab.
                </span>
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl text-gray-200 font-medium">
                A highly motivated Full-Stack Developer with a deep expertise in
                the MERN ecosystem.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My full name is **Md. Shehab Al Rabby**, but in the digital
                world, I am known as a **Problem Solver**. I didn't just start
                coding to build websites; I started because I have a passion for
                engineering solutions that make life easier.
              </p>

              <p className="text-gray-400 leading-relaxed">
                With a solid foundation in **React.js** and **Node.js**, I have
                successfully delivered over **35+ projects**, ranging from
                high-performance e-commerce platforms like *Book Haven* to
                complex community hubs like *GameZone*. My focus is always on
                **clean code, scalable architecture, and pixel-perfect UI**.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "UI/UX Design",
                  "REST API",
                  "State Management",
                  "Firebase",
                  "JWT Auth",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* The Tech Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all"
                >
                  <div className="text-purple-500 mb-3 text-2xl group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-200 mt-1 font-semibold">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-purple-500/30 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5">
                {/* Background Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <Link to="/readmy-story" className="relative z-10 tracking-wide">
                  Read My Story
                </Link>

                {/* Animated Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2 text-purple-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
