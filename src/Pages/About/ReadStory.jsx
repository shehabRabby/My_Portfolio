import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaCode, FaRocket, FaCertificate, FaGraduationCap } from "react-icons/fa";

const ReadStory = () => {
  const milestones = [
    {
      year: "The Beginning",
      title: "Curiosity & Hello World",
      description: "Started my journey with HTML/CSS, discovering the power of building things for the web. I was fascinated by how logic could create visual beauty.",
      icon: <FaBookOpen />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      year: "The Pivot",
      title: "Mastering JavaScript",
      description: "Dived deep into Vanilla JS and DOM manipulation. This is where I realized that being a 'Problem Solver' was my true calling.",
      icon: <FaCode />,
      color: "from-yellow-500 to-orange-400"
    },
    {
      year: "Stack Specialization",
      title: "Embracing MERN Stack",
      description: "Mastered React, Node.js, Express, and MongoDB. Started building full-stack applications with complex state management and secure authentication.",
      icon: <FaRocket />,
      color: "from-purple-600 to-pink-500"
    },
    {
      year: "Today",
      title: "35+ Projects & Beyond",
      description: "Now focusing on scalable architecture, performance optimization, and helping businesses solve digital problems through efficient engineering.",
      icon: <FaCertificate />,
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-purple-500 font-mono tracking-widest uppercase text-sm mb-4">
            console.log(shehab.history)
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Chronicles.</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every line of code tells a story. From my first "Hello World" to architecting complex MERN ecosystems, here is how I evolved as an engineer.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[21px] top-0 h-10 w-10 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center text-white group-hover:border-purple-500 transition-colors duration-500`}>
                <div className={`h-full w-full rounded-full bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-sm`}>
                  {item.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-all duration-500 shadow-2xl">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.2em]">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20 text-center"
        >
          <FaGraduationCap className="text-4xl text-purple-500 mx-auto mb-6" />
          <h4 className="text-2xl font-bold text-white mb-4">The Learning Never Stops</h4>
          <p className="text-gray-400 mb-8">
            Currently exploring Next.js 14 Server Components and Advanced System Design.
          </p>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all"
          >
            Go Back to Portfolio
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ReadStory;