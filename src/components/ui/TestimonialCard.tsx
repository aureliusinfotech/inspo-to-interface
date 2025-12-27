import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  image?: string;
  delay?: number;
}

const TestimonialCard = ({ name, text, image, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card p-8 rounded-2xl shadow-school relative border border-border/50"
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20" />
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-secondary font-display font-bold text-xl">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-display font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">Student</p>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed italic">"{text}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
