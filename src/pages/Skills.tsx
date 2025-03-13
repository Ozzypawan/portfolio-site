
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Card } from '@/components/ui/card';

const Skills = () => {
  useEffect(() => {
    document.title = 'Skills | Pawan Raj Pandey';
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  // Skill categories
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django", "Django REST Framework", "Django Channels"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "Redis"]
    },
    {
      title: "API Development",
      skills: ["RESTful APIs", "API Documentation", "API Security"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Agile Methodologies", "Technical Documentation"]
    }
  ];

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        <SectionTitle 
          title="Skills" 
          subtitle="My technical expertise" 
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={item}>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">{category.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div 
                      key={idx} 
                      className="bg-card dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg p-5 shadow-sm card-hover"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <h3 className="text-lg font-medium h-fit w-fit text-center dark:text-white">{skill}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Professional Development */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Professional Development</h2>
            <div className="bg-card dark:bg-gray-800 border border-border dark:border-gray-700 rounded-xl p-6 md:p-8 shadow-sm">
              <p className="text-lg mb-6 dark:text-gray-300">
                I'm committed to continuous learning and staying updated with the latest technologies and best practices 
                in backend development. Some of my ongoing learning areas include:
              </p>
              
              <ul className="space-y-3 list-disc pl-6 text-muted-foreground dark:text-gray-400">
                <li>Advanced Django application architecture and optimization</li>
                <li>Microservices architecture with Django</li>
                <li>Containerization with Docker</li>
                <li>Test-driven development practices</li>
                <li>Modern authentication protocols and security best practices</li>
              </ul>
            </div>
          </motion.div>
          
          {/* Key Strengths */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Key Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 card-hover dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Backend Architecture</h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  Designing robust, scalable backend systems that handle complex business logic efficiently
                </p>
              </Card>
              
              <Card className="p-6 card-hover dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-3 dark:text-white">API Development</h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  Creating secure, well-documented, and efficient RESTful APIs for frontend integration
                </p>
              </Card>
              
              <Card className="p-6 card-hover dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Database Optimization</h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  Designing database schemas and queries for optimal performance and scalability
                </p>
              </Card>
              
              <Card className="p-6 card-hover dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Problem Solving</h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  Analytical approach to debugging and resolving complex technical challenges
                </p>
              </Card>
              
              <Card className="p-6 card-hover dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Clean Code</h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  Writing maintainable, well-documented, and efficient code following best practices
                </p>
              </Card>
              
              <Card className="p-6 card-hover dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Team Collaboration</h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  Effective communication and coordination with cross-functional development teams
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
