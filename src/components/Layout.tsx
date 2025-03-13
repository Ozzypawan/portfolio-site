
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-background dark:text-foreground transition-colors duration-300">
      <Navigation />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="flex-1 pt-24 pb-12"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
