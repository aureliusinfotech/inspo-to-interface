import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, center = false, light = false }: SectionHeadingProps) => {
  return (
    <div className={cn('mb-12', center && 'text-center')}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            'text-sm uppercase tracking-widest font-semibold mb-2',
            light ? 'text-secondary' : 'text-secondary'
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-display font-bold',
          light ? 'text-primary-foreground' : 'text-primary'
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            'mt-4 text-lg max-w-2xl',
            center && 'mx-auto',
            light ? 'text-primary-foreground/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
