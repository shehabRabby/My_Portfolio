import React from "react";
import { motion } from "framer-motion";
import { 
  FaUserAlt, FaMapMarkerAlt, FaBriefcase, FaCode, FaServer, FaDatabase, FaRocket 
} from "react-icons/fa";
import { Link } from "react-router";

const InfoCard = ({ icon, label, text, color }) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
    <div className={`p-3 rounded-xl bg-white/[0.03] ${color} transition-transform group-hover:scale-110`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{label}</p>
      <p className="text-sm text-gray-200 font-medium leading-tight">{text}</p>
    </div>
  </div>
);

const Aboutme = () => {
  const stats = [
    { icon: <FaCode />, label: "Frontend", value: "React / Next.js", color: "text-blue-400" },
    { icon: <FaServer />, label: "Backend", value: "Node / Express", color: "text-green-400" },
    { icon: <FaDatabase />, label: "Database", value: "MongoDB / SQL", color: "text-emerald-500" },
    { icon: <FaRocket />, label: "Vitals", value: "35+ Deployments", color: "text-purple-400" },
  ];

  return (
    <section className="relative py-24 bg-[#050505] mt-10 overflow-hidden" id="about">
      {/* Optimized Background: CSS Gradients instead of heavy blurs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: The Visual Identity */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Modern Gradient Border Frame */}
              <div className="relative z-10 p-2 rounded-[2.5rem] bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 border border-white/10 overflow-hidden group">
                <img
                  src="https://i.ibb.co.com/Fqd5VkY0/20251226-164824-2.jpg"
                  alt="Md. Shehab Al Rabby"
                  className="w-full h-auto rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover"
                  loading="lazy"
                />
                
                {/* Floating Status Bar */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="text-[10px] font-mono text-white/80 uppercase tracking-widest">Available for Hire</p>
                </div>
              </div>

              {/* Decorative Geometric Element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-purple-500/30 rounded-tl-[3rem] -z-10" />
            </div>

            {/* Quick Personal Info Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3">
              <InfoCard icon={<FaUserAlt />} label="Full Name" text="Md. Shehab Al Rabby" color="text-purple-400" />
              <InfoCard icon={<FaMapMarkerAlt />} label="Location" text="Mirpur-1, Dhaka, BD" color="text-pink-400" />
            </div>
          </motion.div>

          {/* RIGHT: The Professional Pitch */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-purple-500 font-black tracking-[0.4em] uppercase text-xs mb-4">Core Identity</h2>
                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
                  Building the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-gray-500">Future Web.</span>
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  I am a <span className="text-white font-medium">Full-Stack Developer</span> specializing in the MERN ecosystem. 
                  My objective is to build complete, responsive, and user-friendly web applications that bridge the gap 
                  between technical logic and elegant design.
                </p>
              </div>

              {/* Technical Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-colors">
                    <div className={`${stat.color} text-2xl mb-3`}>{stat.icon}</div>
                    <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mb-1">{stat.label}</p>
                    <p className="text-sm text-gray-200 font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* The "Read My Story" Button - UNCHANGED */}
              <div className="pt-6">
                <Link to="/readmy-story" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span className="relative z-10 uppercase tracking-tighter">Read My Story</span>
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;