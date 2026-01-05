import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaGlobe, FaCertificate, FaCalendarAlt, FaAward } from "react-icons/fa";

const AcademicCard = ({ data, isFeatured }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative group rounded-[2rem] overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-1 ${
        isFeatured ? "md:col-span-2" : "col-span-1"
      }`}
    >
      <div className="bg-[#0a0a0a] rounded-[1.9rem] p-6 md:p-10 h-full flex flex-col md:flex-row gap-8 items-center">
        
        {/* Animated Image Section */}
        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
           <motion.img 
             whileHover={{ scale: 1.1 }}
             src={data.image} 
             alt={data.institution} 
             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
           />
           <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Content Section */}
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
             {/* Certificate Link Added Below */}
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
};

const Academcia = () => {
  const education = [
    {
      level: "University Career",
      institution: "Daffodil International University",
      location: "Ashulia, Dhaka",
      website: "https://daffodilvarsity.edu.bd/",
      image: "https://i.ibb.co.com/ZzM56BSK/image.png",
      result: "CGPA 3.69",
      year: "2023 - Present",
      dept: "Computer Science & Engineering",
      district: "Dhaka"
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
      district: "Rangpur"
    },
    {
      level: "Secondary School (SSC)",
      institution: "Gaibandha Govt High School",
      location: "Gorshthanpara/Gaibandha, Bangladesh",
      website: "https://ggbhs.edu.bd/",
      image: "https://i.ibb.co.com/9kBypPg8/image.png",
      result: "GPA 5.00",
      year: "2019 - 2020",
      dept: "Science",
      district: "Rangpur"
    }
  ];

  return (
    <section className="min-h-screen bg-[#050505] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Academic <span className="text-purple-500 text-stroke">Foundation.</span>
          </motion.h2>
          <div className="h-1 w-20 bg-purple-600 mt-4 rounded-full" />
        </header>

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