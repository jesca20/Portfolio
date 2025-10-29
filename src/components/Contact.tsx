import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:jesica.13t@gmail.com',
    color: 'hover:bg-red-50 hover:text-red-600',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/jessica-tiwari',
    color: 'hover:bg-blue-50 hover:text-blue-600',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/jesca20',
    color: 'hover:bg-slate-100 hover:text-slate-900',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-slate-900">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className={`gap-3 ${link.color} transition-all duration-300`}
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-5 h-5" />
                      {link.name}
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-12 border-t border-slate-200"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
