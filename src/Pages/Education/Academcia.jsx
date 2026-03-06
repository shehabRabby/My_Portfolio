import React, { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaGlobe, FaCertificate, FaCalendarAlt, FaAward } from "react-icons/fa";

// Memoized Card - Logic remains identical to your provided code
const AcademicCard = memo(({ data, isFeatured }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative group rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a]/40 backdrop-blur-md p-1 ${
        isFeatured ? "md:col-span-2" : "col-span-1"
      }`}
    >
      <div className="bg-[#0a0a0a]/60 rounded-[1.9rem] p-6 md:p-10 h-full flex flex-col md:flex-row gap-8 items-center">
        {/* We keep the image section in the card for mobile/consistency, 
            but the "Feature" image will be the sticky one */}
        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden transform-gpu">
           <motion.img 
             loading="lazy"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.3 }}
             src={data.image} 
             alt={data.institution} 
             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 will-change-transform"
           />
           <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors pointer-events-none" />
        </div>

        <div className="flex-1 w-full text-left">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-1 block">
                {data.level}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {data.institution}
              </h3>
            </div>
            <FaGraduationCap className="text-4xl text-white/10 group-hover:text-purple-500 transition-colors" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 text-gray-400">
              <FaMapMarkerAlt className="text-purple-500" />
              <span className="text-sm">{data.location}</span>
            </div>
            <a href={data.website} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <FaGlobe className="text-purple-500" />
              <span className="text-sm underline">Official Website</span>
            </a>
            <div className="flex items-center gap-3 text-gray-400">
              <FaAward className="text-purple-500" />
              <span className="text-sm font-bold text-white">Result: {data.result}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <FaCalendarAlt className="text-purple-500" />
              <span className="text-sm">{data.year}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
             <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full flex items-center gap-2">
                <FaCertificate className="text-purple-500 text-xs" />
                <span className="text-xs font-bold uppercase text-purple-200">{data.dept}</span>
             </div>
             <a 
                href="https://drive.google.com/file/d/1MFjgM3taPDCTlZqzzax57t3DWzLlL6Xs/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs transition-all text-white flex items-center justify-center"
             >
                View Certificate
             </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

AcademicCard.displayName = "AcademicCard";

const Academcia = () => {
  const sectionRef = useRef(null);
  
  const education = React.useMemo(() => [
    {
      level: "University Career",
      institution: "Daffodil International University",
      location: "Ashulia, Dhaka",
      website: "https://daffodilvarsity.edu.bd/",
      image: "https://i.ibb.co.com/ZzM56BSK/image.png",
      result: "CGPA 3.69",
      year: "2023 - Present",
      dept: "Computer Science & Engineering",
    },
    {
      level: "Higher Secondary (HSC)",
      institution: "Gaibandha Govt College",
      location: "Rangpur, Bangladesh",
      website: "https://ggc.edu.bd/",
      image: "https://i.ibb.co.com/4ZJL1KQc/image.png",
      result: "GPA 5.00",
      year: "2021 - 2022",
      dept: "Science",
    },
    {
      level: "Secondary School (SSC)",
      institution: "Gaibandha Govt High School",
      location: "Gaibandha, Bangladesh",
      website: "https://ggbhs.edu.bd/",
      image: "https://i.ibb.co.com/9kBypPg8/image.png",
      result: "GPA 5.00",
      year: "2019 - 2020",
      dept: "Science",
    }
  ], []);

  // --- Scroll Image Feature Logic ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smoothly interpolate opacity for 3 images based on scroll position
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.7], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
  
  // Subtle zoom effect on the container
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#050505] py-24 px-6 relative overflow-hidden contain-paint">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      {/* STICKY IMAGE BACKGROUND (The New Feature) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <motion.div style={{ scale }} className="relative w-full h-full flex items-center justify-center">
          <motion.img 
            style={{ opacity: opacity1 }}
            src={education[0].image} 
            className="absolute w-full h-full object-cover grayscale blur-[2px]" 
          />
          <motion.img 
            style={{ opacity: opacity2 }}
            src={education[1].image} 
            className="absolute w-full h-full object-cover grayscale blur-[2px]" 
          />
          <motion.img 
            style={{ opacity: opacity3 }}
            src={education[2].image} 
            className="absolute w-full h-full object-cover grayscale blur-[2px]" 
          />
          {/* Vignette to keep text readable */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-80" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Academic <span className="text-purple-500 text-stroke">Foundation.</span>
          </motion.h2>
          <div className="h-1 w-20 bg-purple-600 mt-4 rounded-full" />
        </header>

        {/* Using a Flex layout to keep images visible during scroll if desired, 
            or keep the grid as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AcademicCard data={education[0]} isFeatured={true} />
          <AcademicCard data={education[1]} isFeatured={false} />
          <AcademicCard data={education[2]} isFeatured={false} />
        </div>
      </div>
    </section>
  );
};

export default Academcia;