import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward, FaExternalLinkAlt, FaQuoteRight } from "react-icons/fa";

const AchievementCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group bg-[#0c0c0c] border border-white/5 p-8 rounded-[2rem] overflow-hidden hover:border-purple-500/50 transition-all duration-500"
    >
      {/* Decorative Gradient Background */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/10 blur-[50px] group-hover:bg-purple-600/20 transition-all" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
            {index === 0 ? (
              <FaTrophy className="text-3xl text-yellow-500" />
            ) : index === 1 ? (
              <FaMedal className="text-3xl text-gray-300" />
            ) : (
              <FaAward className="text-3xl text-purple-500" />
            )}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            {item.date}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-purple-500 font-medium text-sm mb-4">{item.organization}</p>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {/* Small decorative circles representing "levels" */}
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <div className="w-2 h-2 rounded-full bg-purple-500/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500/20" />
          </div>
          
          <a 
            href={item.link} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-purple-400 transition-colors"
          >
            Verify <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Achievement = () => {
  const achievements = [
    {
      title: "Takeoff Program Winner",
      organization: "Daffodil International University",
      date: "Nov 2023",
      description: "Recognized for developing an open-source library management system used by 500+ students during the campus tech fest.",
      link: "https://drive.google.com/file/d/1MFjgM3taPDCTlZqzzax57t3DWzLlL6Xs/view?usp=sharing"
    },
    {
      title: "Unlock Algorithm Contest",
      organization: "Inter-University Coding Expo",
      date: "June 2024",
      description: "Secured 2nd place among 50 teams by building a real-time disaster management dashboard using React and Firebase.",
      link: "https://drive.google.com/file/d/1MFjgM3taPDCTlZqzzax57t3DWzLlL6Xs/view?usp=sharing"
    },
    {
      title: "Under-19 Football Championship",
      organization: "Gaibandha Govt Boys",
      date: "Jan 2019",
      description: "Received prestigious academic recognition for maintaining a CGPA of 3.78+ for four consecutive semesters.",
      link: "https://drive.google.com/file/d/1MFjgM3taPDCTlZqzzax57t3DWzLlL6Xs/view?usp=sharing"
    }
  ];

  return (
    <section className="min-h-screen bg-[#050505] py-28 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <FaTrophy className="text-purple-500 text-xs" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-200">
                Milestones & Recognition
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter"
            >
              WINNING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">MOMENTS.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:block text-right"
          >
            <FaQuoteRight className="text-6xl text-white/5 ml-auto mb-4" />
            <p className="text-gray-500 italic max-w-xs">
              "Excellence is not an act, but a habit. These are the markers of my dedication."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <AchievementCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;