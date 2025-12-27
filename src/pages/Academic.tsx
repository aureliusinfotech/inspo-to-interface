import { motion } from 'framer-motion';
import { BookOpen, Calculator, FlaskConical, Globe, Palette, Music, Dumbbell, Code } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

const subjects = [
  { icon: BookOpen, name: 'English', description: 'Language and Literature' },
  { icon: Calculator, name: 'Mathematics', description: 'Algebra, Geometry & more' },
  { icon: FlaskConical, name: 'Science', description: 'Physics, Chemistry, Biology' },
  { icon: Globe, name: 'Social Studies', description: 'History, Geography, Civics' },
  { icon: Code, name: 'Computer Science', description: 'Programming & IT Skills' },
  { icon: Palette, name: 'Art & Craft', description: 'Creative Expression' },
  { icon: Music, name: 'Music & Dance', description: 'Vocal, Instrumental & Dance' },
  { icon: Dumbbell, name: 'Physical Education', description: 'Sports, Yoga & Fitness' },
];

const activities = [
  'Dance & Music Classes',
  'Art & Craft Classes',
  'Yoga Classes',
  'Visual & Performing Arts',
  'Annual Sports Day',
  'Cultural Programs',
  'Educational Tours',
  'Debate Competitions',
];

const Academic = () => {
  return (
    <Layout title="Academic - Delhi Public School Suriya">
      <PageHero title="Academic" breadcrumb="Academic" />

      {/* Curriculum */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            subtitle="Curriculum"
            title="CBSE Affiliated Curriculum"
            description="We follow the CBSE curriculum with a focus on holistic development, innovative teaching methods, and practical learning in an English medium environment."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 bg-card rounded-xl shadow-school border border-border/50 hover:shadow-school-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <subject.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-1">{subject.name}</h4>
                <p className="text-sm text-muted-foreground">{subject.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Offered */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Classes"
            title="Classes We Offer (Play to IXth)"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { level: 'Pre-Primary', classes: 'Play, Nursery, LKG, UKG', description: 'Foundation years with play-based learning in English environment.' },
              { level: 'Primary', classes: 'Class I to V', description: 'Building strong fundamentals with experienced faculty.' },
              { level: 'Middle School', classes: 'Class VI to VIII', description: 'Comprehensive CBSE curriculum with innovative teaching methods.' },
              { level: 'Secondary', classes: 'Class IX', description: 'Board examination preparation with focused academic guidance.' },
              { level: 'Extra Support', classes: 'Remedial Classes', description: 'Extra classes for weak students to help them improve.' },
              { level: 'Computer Lab', classes: 'All Classes', description: 'Modern computer education for digital skill development.' },
            ].map((item, index) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl shadow-school border border-border/50"
              >
                <div className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                  {item.level}
                </div>
                <h4 className="font-display font-bold text-xl text-foreground mb-2">{item.classes}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Co-Curricular"
                title="Activities & Programs"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in the holistic development of students. Our co-curricular activities including Visual & Performing Arts, Dance & Music Classes, Yoga Classes, and Art & Craft are designed to bring out the best in every child.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary/10 rounded-2xl p-8"
            >
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">Why Choose DPS Suriya?</h3>
              <div className="space-y-4">
                {[
                  { feature: 'Experienced Faculty', detail: 'Qualified & dedicated teachers' },
                  { feature: 'English Environment', detail: 'Complete English medium education' },
                  { feature: 'Innovative Methods', detail: 'Modern teaching techniques' },
                  { feature: 'CCTV Security', detail: 'Safe & secure campus' },
                  { feature: 'Transportation', detail: 'Reliable transport facilities' },
                  { feature: 'Spacious Playground', detail: 'Sports & physical activities' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="font-semibold text-secondary">{item.feature}</span>
                    <span className="text-muted-foreground text-sm">{item.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academic;