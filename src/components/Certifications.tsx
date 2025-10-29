import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: '2025',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 2,
    title: 'AWS Machine Learning Foundation',
    issuer: 'Amazon Web Services',
    date: '2025',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'GenAI with AWS',
    issuer: 'Udacity',
    date: '2025',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'AWS Cloud Architecting',
    issuer: 'Amazon Web Services',
    date: '2025',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 4,
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    date: '2025',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    date: '2025',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 px-4 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">Certifications</h2>
          
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ 
  certification, 
  index, 
  isInView 
}: { 
  certification: typeof certifications[0], 
  index: number, 
  isInView: boolean 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${certification.gradient}`} />

      <div className="flex items-start gap-4 mb-6 mt-2">
        <div className={`p-3 rounded-full bg-gradient-to-br ${certification.gradient} text-white shadow-lg`}>
          <Award className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="mb-1 text-slate-900">{certification.title}</h4>
          <p className="text-slate-600">{certification.issuer}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-500">
          <Calendar className="w-4 h-4" />
          <span>{certification.date}</span>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
        </motion.div>
      </div>
    </motion.div>
  );
}
