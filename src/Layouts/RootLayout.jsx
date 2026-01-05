import React, { useMemo, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router'; 
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import WelcomeScreen from '../Components/Welcome/WelcomeScreen';

const RootLayout = () => {
    const location = useLocation();
    const [showWelcome, setShowWelcome] = useState(true);

    const particles = useMemo(() => Array.from({ length: 25 }), []);

    return (
        <div className="min-h-screen bg-[#050505] text-white antialiased overflow-x-hidden relative">
            
            {/* 1. THE WELCOME OVERLAY - This now controls everything */}
            <AnimatePresence mode="wait">
                {showWelcome && (
                    <WelcomeScreen onFinished={() => setShowWelcome(false)} />
                )}
            </AnimatePresence>

            {/* 2. THE REST OF THE SITE - Only visible when Welcome is done */}
            {!showWelcome && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Background Effect */}
                    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[140px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[140px]" />
                    </div>

                    <Navbar />

                    <main className="relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.5 }}
                                className="min-h-screen"
                            >
                                <Outlet />
                            </motion.div>
                        </AnimatePresence>
                    </main>

                    <Footer />
                </motion.div>
            )}
        </div>
    );
};

export default RootLayout;