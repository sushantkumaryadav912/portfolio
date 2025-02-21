import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-900/5 dark:to-blue-900/5" />
      
      {/* Animated dots grid */}
      <div className="absolute inset-0" style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}>
        <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)]">
          {Array.from({ length: 1600 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-purple-600/10 dark:bg-purple-400/10 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: Math.random() < 0.5 ? 0.5 : 0.2,
                scale: Math.random() < 0.5 ? 1 : 0.5
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated gradient lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-1/3 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
            style={{
              left: `${i * 33}%`,
              top: `${30 + i * 20}%`
            }}
            animate={{
              x: ["-100%", "200%"]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};