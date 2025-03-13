import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const Experience = () => {
  useEffect(() => {
    document.title = 'Experience | Pawan Raj Pandey';
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
          title="Work Experience" 
          subtitle="My professional journey" 
        />
        
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border"></div>
          
          {/* Experience Item - Junior Backend Developer */}
          <motion.div 
            className="relative mb-16 md:ml-auto md:mr-auto md:w-1/2 md:pr-8 md:pl-0 pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-0 md:-translate-x-1/2 top-5 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
            
            {/* Content */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-md transition-all hover:shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">Junior Backend Developer</h3>
                <div className="text-muted-foreground">Sep 2024 - Present</div>
              </div>
              {/* Company Name */}
              <div className="text-lg font-medium mb-4">Ayata Incorporation, Anamnagar</div>

              {/* Job Description and Responsibilities */}
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Working as a Junior Backend Developer on multiple projects, including the Attendance Management System (AMS), e-commerce platforms, and other web-based solutions. These projects involve centralized platforms for managing employee attendance, shift scheduling, payroll, real-time communication, and online retail operations.
                </p>

                {/* Responsibilities List */}
                <ul className="list-disc pl-6 space-y-2">
                  <li>Assisted in designing and implementing RESTful APIs using Django and Django REST Framework, ensuring secure and efficient data flow between frontend and backend across various projects.</li>
                  <li>Developed role-based access control (RBAC) to manage different permission levels for employees, managers, and admins in both AMS and e-commerce systems.</li>
                  <li>Integrated WebSockets using Django Channels & Redis to enable real-time messaging and notifications within the AMS and e-commerce platforms.</li>
                  <li>Optimized database design with PostgreSQL, ensuring scalability and efficient data retrieval for large datasets, including employee records and product inventories.</li>
                  <li>Implemented automated attendance tracking in AMS, integrating with biometric and RFID-based attendance systems, while also developing similar automation for order processing in e-commerce projects.</li>
                  <li>Worked on shift scheduling and payroll calculation for AMS, developing logic for overtime, leave tracking, and salary breakdowns, alongside implementing payment gateway integrations for e-commerce platforms.</li>
                  <li>Built a strong foundation in writing clean, reusable, and scalable code while adhering to industry best practices across all projects.</li>
                  <li>Gained hands-on experience in backend development, collaborating closely with frontend developers, UI/UX designers, and QA to deliver seamless user experiences in both AMS and e-commerce projects.</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Experience Item - Internship */}
          <motion.div 
            className="relative mb-16 md:mr-auto md:ml-0 md:w-1/2 md:pl-8 md:pr-0 pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-auto md:right-0 md:translate-x-1/2 top-5 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
            
            {/* Content */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-md transition-all hover:shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">Backend Development Intern</h3>
                <div className="text-muted-foreground">Jun 2024 - Aug 2024</div>
              </div>
              <div className="text-lg font-medium mb-4">Ayata Incorporation, Anamnagar</div>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  During my internship, I gained hands-on experience in backend development, working on real-world projects under the guidance of senior developers. I learned the fundamentals of web development, database management, and API design.
                </p>
                
                <h4 className="text-lg font-medium text-foreground pt-4">Key Learnings:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Learned the basics of Django and Django REST Framework for building web applications and APIs.</li>
                  <li>Gained experience in database design and management using PostgreSQL.</li>
                  <li>Worked on version control using Git and GitHub, collaborating with team members on shared codebases.</li>
                  <li>Developed an understanding of RESTful API design principles and best practices.</li>
                  <li>Assisted in debugging and testing backend code to ensure reliability and performance.</li>
                  <li>Participated in code reviews and learned to write clean, maintainable code.</li>
                  <li>Gained exposure to Agile methodologies and project management tools like ClickUp.</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Technical Skills Section */}
          <motion.div 
            className="relative md:ml-auto md:mr-auto md:w-1/2 md:pr-8 md:pl-0 pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-0 md:-translate-x-1/2 top-5 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
            
            {/* Content */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-md transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Technical Skills Overview</h3>
              <div className="space-y-3 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium text-foreground">Python Libraries/Frameworks:</span> Django, Django REST Framework</li>
                  <li><span className="font-medium text-foreground">Programming Languages:</span> Python</li>
                  <li><span className="font-medium text-foreground">Source Control Systems:</span> GitHub</li>
                  <li><span className="font-medium text-foreground">DBMS:</span> MySQL, PostgreSQL</li>
                  <li><span className="font-medium text-foreground">Project Management Tool:</span> ClickUp</li>
                </ul>
                
                <h4 className="text-lg font-medium text-foreground pt-4">Key Skills:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Backend Development</li>
                  <li>API Development</li>
                  <li>API Integration</li>
                  <li>Unit testing and Debugging</li>
                  <li>System architecture and Design</li>
                  <li>Roadmap Development</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;