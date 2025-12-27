import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FacilityCard = ({ icon: Icon, title, description, delay = 0 }: FacilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group p-6 bg-card rounded-xl shadow-school hover:shadow-school-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
    >
      <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
      </div>
      <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FacilityCard;
