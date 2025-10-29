import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const projects = [
  {
    id: 1,
    title: 'Voice Assistant',
    description: 'A voice-controlled virtual assistant capable of performing multiple tasks using Python, speech recognition, and text-to-speech libraries. Features include information retrieval from Wikipedia, Google search, web automation (YouTube, Amazon, Google, StackOverflow), email commands, time checking, and note/reminder management.',
    tech: ['Python', 'Speech Recognition', 'Text-to-Speech', 'Web Automation'],
    github: 'https://github.com/jesca20/voice-assistant-using-python',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 2,
    title: 'Job Recommendation Platform',
    description: 'A job recommendation platform that accepts resumes in PDF format and extracts user skills. Implements a matching algorithm to match user skills with relevant job listings, features application progress tracking, and provides analytics dashboards for insights. Deployed on Streamlit Cloud.',
    tech: ['Python', 'Streamlit', 'PDF Processing', 'Machine Learning'],
    github: 'https://github.com/jesca20/Job-Recommendation-Platform',
    live: 'https://talentrack.streamlit.app/',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 3,
    title: 'EZ Grades',
    description: 'EZ Grades is a smart academic platform that helps students track and analyze their grades while offering StudyHub, a feature-packed space for interactive learning, practice questions, and flashcards to boost understanding and retention.',
    tech: ['React', 'Typescript', 'AI'],
    live: 'https://ez-grades.github.io/easy-grades/',
    color: 'from-orange-500/20 to-amber-500/20'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: typeof projects[0], index: number, isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Gradient header */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-slate-900 mb-3">{project.title}</h3>
        
        <motion.p
          className="text-slate-600 mb-4 leading-relaxed"
          initial={{ opacity: 0.7 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0.7 }}
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700">
              {tech}
            </Badge>
          ))}
        </div>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <Button size="sm" variant="outline" className="gap-2" asChild>
            <a href={project.github}>
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          <Button size="sm" className="gap-2 bg-slate-900 hover:bg-slate-800" asChild>
            <a href={project.live}>
              <ExternalLink className="w-4 h-4" />
              View
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
