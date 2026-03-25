'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full overflow-hidden hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -90,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Sun className="w-5 h-5 text-highlight-color" strokeWidth={2.5} />
        </motion.div>
        
        <motion.div
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 90,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Moon className="w-5 h-5 text-accent-color" strokeWidth={2.5} />
        </motion.div>
      </div>
    </button>
  );
}
