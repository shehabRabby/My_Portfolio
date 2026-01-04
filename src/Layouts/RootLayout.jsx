import React from 'react';
import { Outlet, useLocation } from 'react-router'; // Using react-router-dom for location
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    const location = useLocation();

    return (
        /* 1. Global Wrapper: Dark background and font smoothing */
        <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-purple-200 antialiased overflow-x-hidden">
            
            {/* 2. Global Background Elements: Subtle Glows that follow the user */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]"></div>
            </div>

            {/* 3. Navigation: Outside the container to stay full-width */}
            <Navbar />

            {/* 4. Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Page Transition Wrapper */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="min-h-[calc(100vh-80px)]" // Ensures footer stays at bottom
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* 5. Footer */}
            <Footer />
        </div>
    );
};

export default RootLayout;