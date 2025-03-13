
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const Projects = () => {
  useEffect(() => {
    document.title = 'Pawan Raj Pandey';
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: "Attendance Management System",
      description: "A comprehensive system for managing employee attendance, shift scheduling, payroll, and real-time communication.",
      tags: ["Django", "Django REST Framework", "PostgreSQL", "WebSockets", "Redis"],
      features: [
        "Role-based access control for employees, managers, and admins",
        "Real-time notifications using WebSockets",
        "Automated attendance tracking with biometric integration",
        "Advanced shift scheduling and overtime calculation",
        "Detailed reporting and analytics dashboard"
      ],
      links: {
        live: "https://attendance.ayata.com.np/login",
        github: "https://github.com/Ozzypawan/The-Final-AMS"
      }
    },
    {
      id: 2,
      title: "Ignite Nepal",
      description: "A scalable backend API system for e-commerce applications with product management, cart functionality, and order processing.",
      tags: ["Django", "REST API", "MySQL", "JWT Authentication", "Docker"],
      features: [
        "Comprehensive product catalog management",
        "Cart and wishlist functionality",
        "Order processing and payment integration",
        "User authentication and authorization",
        "Inventory management system"
      ],
      links: {
        live: "https://ignitenepal.netlify.app/",
        github: "https://github.com/Ozzypawan/IgniteNepal-Backend"
      }
    },
    {
      id: 3,
      title: "Content Management System",
      description: "A custom CMS built with Django, providing a flexible platform for managing digital content with advanced permissions.",
      tags: ["Django", "PostgreSQL", "RESTful API", "AWS S3", "Celery"],
      features: [
        "Dynamic content creation and management",
        "Hierarchical permission system",
        "Media library with AWS S3 integration",
        "Scheduled publishing with Celery",
        "Full-text search and advanced filtering"
      ],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description: "A real-time messaging platform built with Django Channels and WebSockets for seamless communication.",
      tags: ["Django", "Django Channels", "WebSockets", "Redis", "JavaScript"],
      features: [
        "Real-time message delivery",
        "Group chat functionality",
        "Message history and search",
        "User presence indicators",
        "File sharing capabilities"
      ],
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        <SectionTitle 
          title="Projects" 
          subtitle="Showcasing my technical expertise" 
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-accent/10 text-accent text-sm rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Key Features:</h3>
                  <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm" className="group">
                      <Globe className="mr-2 h-4 w-4" />
                      View Live
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* More Projects Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-4">Looking for more?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            These are just a few highlights of my work. I'm constantly building and learning.
            Check out my GitHub for more projects or get in touch to discuss collaboration opportunities.
          </p>
          <a 
            href="https://github.com/ozzypawan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" className="group">
              <Github className="mr-2 h-4 w-4" />
              Visit my GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
