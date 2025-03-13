
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const About = () => {
  useEffect(() => {
    document.title = 'About | Pawan Raj Pandey';
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left column - Image */}
          <motion.div 
            className="md:col-span-1"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
      <div className="aspect-square max-w-md mx-auto bg-accent/10 rounded-xl glass overflow-hidden relative group">
  <img
    src="/Me.jpeg"
    alt="Pawan Raj Pandey"
    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
  />
</div>

            <div className="mt-6 space-y-4">
              <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-muted-foreground">Kathmandu, Nepal</p>
              </div>
              
              <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-muted-foreground">pawanpandey1251@gmail.com</p>
              </div>
              
              <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-muted-foreground">+977 9767279454</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-6"
              variants={fadeInUp}
            >
              My Story
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-lg"
              variants={fadeInUp}
            >
              <p>
                I am a Django developer with 9 months of professional experience, specializing in building 
                scalable and efficient backend systems for mid to large-scale projects. My journey in 
                software development began during my Bachelor's degree in Computer Science and Information 
                Technology at St. Lawrence College (Tribhuvan University).
              </p>
              
              <p>
                Throughout my academic and professional career, I've cultivated a deep understanding of 
                backend development principles, with a particular focus on Django and REST API design. I'm 
                passionate about creating robust, maintainable, and efficient code that solves real-world 
                problems.
              </p>
              
              <p>
                Currently working at Ayata Incorporation, I'm part of a team developing an Attendance 
                Management System (AMS) that handles employee attendance, shift scheduling, payroll, and 
                real-time communication. This role has allowed me to gain hands-on experience with complex 
                database design, role-based access control, WebSockets implementation, and integrating with 
                various external systems.
              </p>
            </motion.div>
            
            <motion.h2 
              className="text-2xl font-bold mt-10 mb-6"
              variants={fadeInUp}
            >
              Professional Summary
            </motion.h2>
            
            <motion.ul 
              className="space-y-4 list-disc pl-6 text-lg"
              variants={fadeInUp}
            >
              <li>9 months of experience as a Django Developer, specializing in building scalable and 
                  efficient backend systems for mid to large-scale projects.</li>
              <li>Proficient in Agile development methodologies and experienced in collaborating with 
                  cross-functional teams to deliver high-quality solutions.</li>
              <li>Skilled in designing and developing RESTful APIs, database management, and 
                  backend optimization for performance and maintainability.</li>
              <li>Passionate about writing clean, efficient, and well-documented code to ensure 
                  scalability and ease of maintenance.</li>
              <li>Adept at staying updated with industry trends and incorporating best practices into 
                  development workflows.</li>
            </motion.ul>
            
            <motion.h2 
              className="text-2xl font-bold mt-10 mb-6"
              variants={fadeInUp}
            >
              Education
            </motion.h2>
            
            <motion.div 
              className="bg-card rounded-lg p-6 border border-border shadow-sm"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">BSc.CSIT – Bachelor of Science in Computer Science and Information Technology</h3>
                <span className="text-muted-foreground">2019-2024</span>
              </div>
              <p className="text-muted-foreground">St. Lawrence College (Tribhuvan University), Kathmandu, Nepal</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
