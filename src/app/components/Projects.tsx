import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Website',
    type: 'Professional Project',
    role: 'Full Stack Developer',
    description: 'Developed product listing, cart, and backend APIs using PHP & MySQL.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    tag: 'Professional',
    color: 'from-blue-500 to-cyan-500',
    link: '#',
  },
  {
    title: 'ERP Internal Web Application',
    type: 'Company Project',
    role: 'Developer',
    description: 'Worked on internal modules, data handling, and system workflows.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tech: ['PHP', 'MySQL', 'JavaScript', 'React'],
    tag: 'Professional',
    color: 'from-purple-500 to-pink-500',
    link: '#',
  },
  {
    title: 'Company Website',
    type: 'Professional Project',
    role: 'Developer',
    description: 'Built buyback request system and admin approval flow.',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tech: ['PHP', 'MySQL', 'JavaScript', 'React'],
    tag: 'Professional',
    color: 'from-orange-500 to-red-500',
    link: '#',
  },
  {
    title: 'BookSky Mini Project',
    type: 'Personal Project',
    role: 'Frontend Developer',
    description: 'Created a simple book management app using JavaScript.',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tech: ['JavaScript', 'HTML', 'CSS'],
    tag: 'Personal',
    color: 'from-rose-500 to-pink-500',
    link: '#',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Selected projects from professional and personal work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  {/* Hover Overlay */}
                  <motion.a
                    href={project.link}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        project.tag === 'Professional'
                          ? 'text-blue-300 border-blue-400/40 bg-blue-500/10'
                          : 'text-pink-300 border-pink-400/40 bg-pink-500/10'
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mb-1">{project.type}</p>
                  <p className="text-sm text-gray-400 mb-3">Role: {project.role}</p>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
