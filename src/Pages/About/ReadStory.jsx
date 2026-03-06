import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  FaCode, FaTerminal, FaLayerGroup, FaLightbulb, 
  FaQuoteLeft, FaChevronLeft, FaGlobe, FaGraduationCap, FaCircle
} from "react-icons/fa";

// Component for Story Blocks with enhanced glassmorphism
const StorySection = ({ title, icon, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="group relative p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-all duration-500 mb-12 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="flex items-center gap-5 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 text-purple-400 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-white tracking-tight">{title}</h3>
      </div>
      <div className="text-gray-300 leading-relaxed text-lg space-y-4 font-light group-hover:text-gray-100 transition-colors">
        {children}
      </div>
    </div>
  </motion.div>
);

const ReadStory = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const timeline = [
    { year: "2023", event: "The Spark", desc: "Started with HTML/CSS, discovering how logic creates visual impact.", color: "text-blue-400", glow: "shadow-blue-500/50" },
    { year: "2024", event: "UI Engineering", desc: "Mastered responsive layouts and CSS architecture for scalable interfaces.", color: "text-cyan-400", glow: "shadow-cyan-500/50" },
    { year: "2025", event: "JavaScript Mastery", desc: "Deep dived into the React ecosystem and modern ES6+ paradigms.", color: "text-purple-400", glow: "shadow-purple-500/50" },
    { year: "2025", event: "Full Stack Pivot", desc: "Engineered robust MERN applications with Node.js and MongoDB.", color: "text-pink-400", glow: "shadow-pink-500/50" },
    { year: "2026", event: "The Mission", desc: "Architecting high-performance systems for real-world digital problems.", color: "text-green-400", glow: "shadow-green-500/50" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-purple-500/30 overflow-x-hidden">
      {/* Top Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 z-50 origin-left" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center mt-10 overflow-hidden">
        {/* Animated Background Aura */}
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="relative z-10 text-center px-6 mt-20">
          <motion.button 
            onClick={() => window.history.back()}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors mb-8 mx-auto font-mono text-xs tracking-[0.3em] uppercase"
          >
            <FaChevronLeft className="text-[10px]" /> Back to Core
          </motion.button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none"
          >
            MY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-[length:200%_auto] animate-gradient">
              STORY.
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <p className="text-gray-400 text-xl font-light tracking-wide max-w-lg">
              Tracing the evolution from syntax curiosity to architectural engineering.
            </p>
            <div className="h-12 w-px bg-gradient-to-b from-purple-500 to-transparent mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <StorySection title="The Catalyst" icon={<FaTerminal />}>
            <p>In 2023, I discovered that code isn't just text—it's a medium for solving problems. I obsessed over how digital products interface with human behavior.</p>
          </StorySection>

          <StorySection title="Full Stack Vision" icon={<FaLayerGroup />} delay={0.2}>
            <p>Moving beyond UI, I mastered the MERN stack to own the data lifecycle. Engineering APIs and secure databases allowed me to build end-to-end realities.</p>
          </StorySection>
        </div>

        {/* Enhanced Timeline */}
        
        <div className="py-24 relative">
          <h2 className="text-white text-4xl font-black mb-20 text-center tracking-tight uppercase">
            Evolution <span className="text-purple-500">Timeline</span>
          </h2>
          
          {/* Central Track */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[85%] bg-white/5 top-60 hidden md:block" />
          
          <div className="space-y-16">
            {timeline.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                className={`relative flex items-center gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden md:block w-1/2" />
                
                {/* Glowing Node */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white z-20 shadow-[0_0_20px_white] hidden md:block border-4 border-[#050505]`} />
                
                <div className="flex-1 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-purple-500/50 transition-all duration-500 group">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-sm font-black ${t.color} tracking-widest uppercase`}>{t.year}</span>
                    <FaCircle className={`text-[8px] ${t.color} animate-pulse`} />
                  </div>
                  <h4 className="text-white font-bold text-2xl mb-2 group-hover:text-purple-400 transition-colors">{t.event}</h4>
                  <p className="text-gray-400 text-base font-light leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="flex flex-wrap justify-center gap-4 my-32">
          {["React", "Node.js", "MongoDB", "SQL", "Next.js", "Express"].map((tech, idx) => (
            <motion.span 
              key={tech}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white/70 font-mono text-sm tracking-tighter hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-white transition-all cursor-default shadow-xl"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* High-Impact Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative py-20 px-8 rounded-[3rem] bg-gradient-to-b from-[#0a0a0a] to-transparent border border-white/5 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <FaQuoteLeft className="text-5xl text-purple-500/20 mx-auto mb-8" />
          <h4 className="text-3xl md:text-5xl font-light text-white italic leading-[1.3] max-w-3xl mx-auto">
            "I believe great software is built through <span className="text-purple-400 font-medium">curiosity</span>, continuous learning, and solving real problems."
          </h4>
        </motion.div>

        {/* Footer Vision */}
        <div className="mt-32 text-center">
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
            >
              <FaGraduationCap className="text-6xl text-purple-500/30 mx-auto mb-8" />
            </motion.div>
            <h3 className="text-white text-4xl font-black tracking-tight mb-4 uppercase">The Vision</h3>
            <p className="text-gray-500 max-w-lg mx-auto mb-16 text-xl font-light leading-relaxed">
                Currently scaling my expertise toward <span className="text-white">Cloud Architecture</span> and high-availability systems.
            </p>
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-tighter rounded-2xl overflow-hidden hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
                <span className="relative z-10">Back to Top</span>
                <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ReadStory;