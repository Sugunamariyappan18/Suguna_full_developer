import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Briefcase, Award } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '1.5+' },
    { icon: Code2, label: 'Projects Completed', value: '5+' },
    { icon: Award, label: 'Technologies', value: '10+' },
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="theme-panel relative rounded-2xl p-8">
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full blur-2xl" />

              <div className="relative space-y-4 text-slate-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Full Stack Developer with <span className="text-purple-400 font-semibold">1.5 years of experience</span> in building modern web applications. Currently working at <span className="text-blue-400 font-semibold">IGO Agritech Farms</span>, where I develop scalable solutions using cutting-edge technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  My expertise spans across frontend and backend development, with a strong focus on creating clean, maintainable code and delivering exceptional user experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm constantly learning and exploring new technologies to stay at the forefront of web development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="theme-panel theme-panel-hover relative group rounded-xl p-6 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-slate-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-slate-900 dark:text-gray-200">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['VS Code', 'Git', 'GitHub', 'Postman', 'Chrome DevTools', 'NPM'].map((tool, index) => (
              <motion.div
                key={tool}
                className="theme-chip rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
