import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cloud, Database, Code2, Cog, FlaskConical, TestTube } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'C'],
    icon: Code2,
    color: 'text-blue-600'
  },
  {
    title: 'Cloud Computing',
    skills: ['AWS EC2', 'S3', 'Lambda', 'DynamoDB', 'RDS', 'IAM', 'VPC', 'EMR'],
    icon: Cloud,
    color: 'text-purple-600'
  },
  {
    title: 'AI & ML',
    skills: ['Chatbot Development', 'Prompt Engineering', 'OpenAI APIs'],
    icon: FlaskConical,
    color: 'text-pink-600'
  },
  {
    title: 'QA & Testing',
    skills: ['Manual Testing', 'Postman', 'API Testing'],
    icon: TestTube,
    color: 'text-green-600'
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Linux Basics'],
    icon: Cog,
    color: 'text-orange-600'
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-slate-900">About Me</h2>
          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
            I'm an AWS Certified Solutions Architect Associate and an aspiring Data Engineer with
            hands-on experience in cloud computing, Python, and SQL. I have experience in building
            data-driven solutions and designing and deploying cloud architectures. I work well in
            collaborative teams, and I am always eager to learn new technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-full bg-white shadow-sm ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-slate-700 rounded-full border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
