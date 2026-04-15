import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React JS', level: 85 },
      { name: 'jQuery', level: 80 },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'AJAX', level: 80 },
      { name: 'RESTful APIs', level: 78 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Database & Tools',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Responsive Design', level: 90 },
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-sky-200/40 to-transparent dark:via-purple-950/10" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="theme-panel theme-panel-hover relative rounded-2xl p-8 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />

              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-slate-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/5">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-gray-200">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Problem Solving', percentage: 92 },
              { name: 'Team Work', percentage: 88 },
              { name: 'Clean Code', percentage: 90 },
              { name: 'Fast Learner', percentage: 95 },
            ].map((competency, index) => (
              <motion.div
                key={competency.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(148,163,184,0.35)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 352' }}
                      animate={isInView ? { strokeDasharray: `${(competency.percentage / 100) * 352} 352` } : {}}
                      transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">{competency.percentage}%</span>
                  </div>
                </div>
                <span className="text-center text-slate-700 dark:text-gray-300">{competency.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
