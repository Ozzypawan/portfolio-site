import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const Home = () => {
  useEffect(() => {
    document.title = 'Pawan Raj Pandey | Django Developer';
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center pt-10">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-accent font-mono mb-4"
            >
              Hello, my name is
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Pawan Raj Pandey
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I build scalable backend systems
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              I'm a Django developer with a passion for building efficient backend solutions. 
              Currently specializing in RESTful APIs, database optimization, and real-time 
              communication systems.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/projects">
                <Button className="group">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact me</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <SectionTitle 
            title="About Me" 
            subtitle="A quick introduction" 
            align="center" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-48 h-48"
              >
                {/* Server */}
                <rect x="30" y="30" width="140" height="60" rx="10" fill="#3b82f6" />
                <rect x="40" y="40" width="120" height="40" rx="5" fill="#1e40af" />
                {/* Database */}
                <ellipse cx="100" cy="130" rx="50" ry="20" fill="#3b82f6" />
                <rect x="50" y="110" width="100" height="40" fill="#1e40af" />
                {/* API Connections */}
                <line x1="100" y1="70" x2="100" y2="110" stroke="#3b82f6" strokeWidth="4" />
                <line x1="100" y1="150" x2="100" y2="170" stroke="#3b82f6" strokeWidth="4" />
                <circle cx="100" cy="170" r="10" fill="#3b82f6" />
                {/* Animation */}
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </svg>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-left">
                With <span className="font-semibold text-accent">9 months of professional experience</span> as a Django developer, I specialize in 
                building efficient backend systems that power impactful applications. I'm passionate 
                about clean code, optimized solutions, and collaborative development.
              </p>
              <p className="text-lg">
                Currently working at <span className="font-semibold text-accent">Ayata Incorporation</span>, where I develop robust backend solutions 
                for attendance management systems, integrating real-time communication and complex 
                business logic.
              </p>
              <Link to="/about">
                <Button variant="link" className="group text-accent p-0">
                  Learn more about me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionTitle 
            title="Skills" 
            subtitle="Technologies I work with" 
          />
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {['Python', 'Django', 'Django REST', 'PostgreSQL', 'MySQL', 
              'Redis', 'Git', 'WebSockets', 'API Design', 'System Architecture'].map((skill) => (
              <motion.div 
                key={skill}
                variants={item}
                className="bg-card hover:bg-card/80 rounded-lg shadow-sm border border-border p-6 text-center card-hover"
              >
                <div className="text-lg font-medium">{skill}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Link to="/skills">
              <Button variant="outline" className="group">
                View all skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <SectionTitle 
            title="Featured Project" 
            subtitle="What I've been working on" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl overflow-hidden shadow-md border border-border"
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2">Attendance Management System</h3>
              <p className="text-muted-foreground mb-6">
                A comprehensive system for managing employee attendance, shift scheduling, payroll,
                and real-time communication, built with Django and Django REST Framework.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-accent/10 text-accent text-sm rounded-full px-3 py-1">Django</span>
                <span className="bg-accent/10 text-accent text-sm rounded-full px-3 py-1">REST API</span>
                <span className="bg-accent/10 text-accent text-sm rounded-full px-3 py-1">WebSockets</span>
                <span className="bg-accent/10 text-accent text-sm rounded-full px-3 py-1">PostgreSQL</span>
                <span className="bg-accent/10 text-accent text-sm rounded-full px-3 py-1">Redis</span>
              </div>
              
              <Link to="/projects">
                <Button variant="outline" className="group">
                  View project details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button className="group">
                View all projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Interested in collaborating or have a project in mind? 
              I'd love to hear about it!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link to="/contact">
                <Button size="lg" className="group">
                  Get in touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;