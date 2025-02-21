import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );
};