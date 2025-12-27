import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  backgroundImage?: string;
}

const PageHero = ({ title, breadcrumb, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: backgroundImage 
            ? `url(${backgroundImage})` 
            : 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--navy-light)) 100%)'
        }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-sm"
        >
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-secondary">{breadcrumb}</span>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PageHero;
