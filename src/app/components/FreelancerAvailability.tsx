import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, Clock3, Handshake, Sparkles } from 'lucide-react';

const services = [
  'Custom business websites',
  'Landing pages and portfolio sites',
  'React + PHP full-stack development',
  'Bug fixing and performance optimization',
];

const quickInfo = [
  {
    icon: Clock3,
    label: 'Response Time',
    value: 'Within 24 hours',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Handshake,
    label: 'Project Model',
    value: 'Hourly / Fixed',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    label: 'Availability',
    value: 'Open for new work',
    color: 'from-orange-500 to-red-500',
  },
];

export function FreelancerAvailability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="freelancer" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Freelancer <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Available</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-500 dark:text-gray-400">
            Currently accepting freelance website and web application projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="theme-panel rounded-2xl p-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Open for freelance projects
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-gray-100">
              Need a website that matches your business goals?
            </h3>
            <p className="mb-6 text-slate-700 dark:text-gray-300">
              I build modern, responsive websites and web apps with clean code, strong UX, and maintainable architecture.
            </p>

            <div className="space-y-3 mb-8">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 text-slate-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                onClick={() => handleNavClick('#projects')}
                className="theme-outline-button rounded-lg px-6 py-3 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Portfolio Work
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="theme-panel rounded-2xl p-8"
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-gray-100">Freelance Snapshot</h3>
            <div className="space-y-4">
              {quickInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="theme-subtle-card rounded-xl p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-slate-500 dark:text-gray-400">{item.label}</p>
                  </div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-gray-100">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
