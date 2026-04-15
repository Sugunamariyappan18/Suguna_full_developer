import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
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
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Designed & Developed with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>{' '}
              by Suguna
            </p>
            <p className="text-gray-500 text-sm">© {currentYear} All rights reserved.</p>
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
