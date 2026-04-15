import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/70 px-6 py-12 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Name */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Suguna.M
          </motion.div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 dark:text-gray-400">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="transition-colors duration-300 hover:text-slate-950 dark:hover:text-white"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-white/10" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="flex items-center justify-center gap-2 text-slate-500 dark:text-gray-400">
              Designed & Developed with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>{' '}
              by Suguna
            </p>
            <p className="text-sm text-slate-400 dark:text-gray-500">© {currentYear} All rights reserved.</p>
          </div>

          {/* Decorative Element */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </footer>
  );
}

