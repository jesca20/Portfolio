import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import awsSolutionsArchitectBadge from '../assets/e3041bf6f6e2b3d0b97ee7a5aba3518aefc60108.png';
import awsCloudArchitectingBadge from '../assets/52833c462d8188beb3e29724a67257177adef571.png';
import awsMachineLearningBadge from '../assets/006f7c1c13d06235cb05b1abe3c3165d8607f71e.png';
import awsTechnicalEssentials from '../assets/AWS Technical Essentials.png';
import GenAIwithAws from '../assets/GenAI with AWS.png';
import SQL from '../assets/IntermediateSQL.png';
const certifications = [
  {
    id: 1,
    title: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: '2025',
    gradient: 'from-orange-500 to-amber-500',
    badgeUrl: awsSolutionsArchitectBadge,
    verificationUrl: 'https://www.credly.com/badges/a1cab7bd-ca91-4b5e-b69f-86e90cc17df9/public_url',
  },
  {
    id: 2,
    title: 'AWS Machine Learning Foundation',
    issuer: 'Amazon Web Services',
    date: '2025',
    gradient: 'from-blue-500 to-cyan-500',
    badgeUrl: awsMachineLearningBadge,
    verificationUrl: 'https://www.credly.com/badges/429698b2-77ed-4519-80ca-e18058927624/public_url',
  },
  {
    id: 3,
    title: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services',
    date: '2025',
    gradient: 'from-purple-500 to-pink-500',
    badgeUrl: awsCloudArchitectingBadge,
    verificationUrl: 'https://www.credly.com/badges/6a70ef90-f535-4f09-bf5d-b48cc1ee9786/public_url',
  },
  {
    id: 4,
    title: 'GenAI with AWS',
    issuer: 'Udacity',
    date: '2025',
    gradient: 'from-purple-500 to-pink-500',
    badgeUrl: GenAIwithAws,
        verificationUrl: 'https://www.linkedin.com/posts/jessica-tiwari_generativeai-aws-udacity-activity-7348958905416216577-mVRo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0o7RgB61HReEsEJuFVp3k_4YVv0MEj8GI',

  },
  {
    id: 5,
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    date: '2025',
    gradient: 'from-blue-500 to-cyan-500',
    badgeUrl: SQL,
    verificationUrl : 'https://www.datacamp.com/completed/statement-of-accomplishment/course/f429f96c3e02b72fd9829913b2167846dd958fe8?share=true'

  },
  {
    id: 6,
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    date: '2025',
    gradient: 'from-purple-500 to-pink-500',
    badgeUrl: awsTechnicalEssentials,
    verificationUrl : 'https://www.linkedin.com/posts/jessica-tiwari_aws-cloudcomputing-certification-activity-7305557179095261184-1RJQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0o7RgB61HReEsEJuFVp3k_4YVv0MEj8GI'

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
      className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${certification.gradient}`} />

      {/* Badge Image */}
      <div className="mb-4 mt-2 flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center">
          <img
            src={certification.badgeUrl}
            alt={`${certification.title} badge`}
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>

      <div className="flex items-start gap-4 mb-6">
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
        <motion.a
          href={certification.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -10 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" />
        </motion.a>
      </div>
    </motion.div>
  );
}
