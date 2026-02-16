import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple } from 'lucide-react';

const bootText = [
    "Booting AdvityaOS v1.0...",
    "Initializing Intelligence Layer...",
    "Loading Neural Modules...",
    "Starting Runtime Services...",
    "System Ready."
];

export default function BootScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [booting, setBooting] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key.toLowerCase() === 'e' && !booting) {
                setBooting(true);
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [booting]);

    useEffect(() => {
        if (!booting) return;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 800);
                    return 100;
                }
                // Advance text based on progress chunks
                const next = prev + Math.random() * 2;
                if (next > 20 && currentTextIndex < 1) setCurrentTextIndex(1);
                if (next > 40 && currentTextIndex < 2) setCurrentTextIndex(2);
                if (next > 60 && currentTextIndex < 3) setCurrentTextIndex(3);
                if (next > 80 && currentTextIndex < 4) setCurrentTextIndex(4);
                return next;
            });
        }, 50);

        return () => clearInterval(timer);
    }, [booting, onComplete, currentTextIndex]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center text-white font-mono"
        >
            {!booting ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                    className="text-lg md:text-xl opacity-80"
                >
                    Press <span className="font-bold border border-white/40 px-2 py-0.5 rounded mx-1">e</span> to boot up the machine
                </motion.div>
            ) : (
                <>
                    <img src="/logo.png" alt="logo" className="w-24 h-24 mb-16" />

                    <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden mb-8">
                        <motion.div
                            className="h-full bg-white"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="h-6 text-sm md:text-base text-gray-400">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTextIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {bootText[currentTextIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </>
            )}
        </motion.div>
    );
}
