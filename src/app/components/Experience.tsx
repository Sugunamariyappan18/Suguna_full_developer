import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'IGO Agritech Farms',
    position: 'Full Stack Developer',
    duration: 'Feb 2025 - Present',
    location: 'India',
    type: 'Current Position',
    responsibilities: [
      'Developing and maintaining full-stack web applications using React JS, PHP, and MySQL',
      'Implementing RESTful APIs and integrating third-party services',
      'Building responsive user interfaces with modern CSS techniques',
      'Collaborating with cross-functional teams to deliver high-quality solutions',
      'Optimizing application performance and database queries',
    ],
    color: 'from-blue-500 to-purple-500',
  },
  {
    company: 'Hitachi payment services pvt ltd',
    position: 'Helpdisk Executive',
    duration: 'Nov 2023 - Jan 2025',
    location: 'India',
    type: 'Previous',
    responsibilities: [
      'Monitored ATM transactions and resolved backend issues',
      'Ensured smooth ATM operations with minimal downtime',
      'Coordinated with field teams for issue resolution'   ],
    color: 'from-purple-500 to-orange-500',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10 shadow-lg shadow-purple-500/50" />

                {/* Content Card */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-1 h-full bg-gradient-to-b ${exp.color} rounded-l-2xl`} />

                    {/* Badge */}
                    <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm">
                      {exp.type}
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.position}
                        </h3>
                        <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pl-14">
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            className="text-gray-300 flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.3 + idx * 0.1 }}
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
