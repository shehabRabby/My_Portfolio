import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WelcomeScreen = ({ onFinished }) => {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");
  
  // Warm, personalized terminal message
  const fullText = "Hello, I am Shehab. Welcome to my Portfolio. Initializing environment...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setPhase("completing");
        setTimeout(() => onFinished(), 1200);
      }
    }, 40); 
    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        filter: "blur(40px)",
        scale: 1.1,
        transition: { duration: 1, ease: "circOut" } 
      }}
      className="fixed inset-0 z-[10000] bg-[#000000] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background Grid - Subtle and professional */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
        }}
      />

      <div className="max-w-4xl relative z-10">
        {/* Animated Brand Icon */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border border-purple-500/20 rounded-full border-t-purple-500"
            />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xl text-purple-400 font-bold">
              {phase === "typing" ? "S" : "✓"}
            </div>
          </div>
        </motion.div>

        {/* Personalized Terminal Text */}
        <h1 className="text-xl md:text-4xl font-mono font-bold text-white tracking-tight">
          <span className="text-purple-500 opacity-80 font-normal">visitor@shehab:~$ </span>
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-6 md:w-3 md:h-10 bg-purple-500 ml-1 align-middle"
          />
        </h1>

        {/* Dynamic Progress Bar */}
        <div className="mt-12 max-w-xs mx-auto">
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: phase === "completing" ? "0%" : "-40%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_#7c3aed]"
            />
          </div>
          <div className="flex justify-between mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
            <span>{phase === "typing" ? "Preparing" : "Ready"}</span>
            <span>{phase === "typing" ? "60%" : "100%"}</span>
          </div>
        </div>
      </div>

      {/* Cinematic Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20" />
    </motion.div>
  );
};

export default WelcomeScreen;