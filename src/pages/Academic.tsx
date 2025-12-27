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
  { icon: Music, name: 'Music', description: 'Vocal & Instrumental' },
  { icon: Dumbbell, name: 'Physical Education', description: 'Sports & Fitness' },
];

const activities = [
  'Annual Sports Day',
  'Science Exhibition',
  'Cultural Programs',
  'Debate Competitions',
  'Art & Drawing Competitions',
  'Quiz Competitions',
  'Educational Tours',
  'Yoga & Meditation',
];

const Academic = () => {
  return (
    <Layout title="Academic - Delhi Public School Sursand">
      <PageHero title="Academic" breadcrumb="Academic" />

      {/* Curriculum */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            subtitle="Curriculum"
            title="CBSE Affiliated Curriculum"
            description="We follow the CBSE curriculum with a focus on holistic development and practical learning."
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
            title="Classes We Offer"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { level: 'Pre-Primary', classes: 'Nursery, LKG, UKG', description: 'Foundation years with play-based learning.' },
              { level: 'Primary', classes: 'Class 1 to 5', description: 'Building strong fundamentals in all subjects.' },
              { level: 'Middle School', classes: 'Class 6 to 8', description: 'Comprehensive curriculum with specialized subjects.' },
              { level: 'Secondary', classes: 'Class 9 & 10', description: 'Board examination preparation with CBSE curriculum.' },
              { level: 'Senior Secondary', classes: 'Class 11 & 12', description: 'Science, Commerce & Humanities streams.' },
              { level: 'Special Programs', classes: 'Remedial Classes', description: 'Extra support for students who need it.' },
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
                We believe in the holistic development of students. Our co-curricular activities are designed to bring out the best in every child and help them discover their talents.
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
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">Academic Calendar Highlights</h3>
              <div className="space-y-4">
                {[
                  { month: 'April', event: 'New Session Begins' },
                  { month: 'August', event: 'Independence Day Celebration' },
                  { month: 'September', event: 'Half Yearly Examinations' },
                  { month: 'November', event: 'Annual Sports Day' },
                  { month: 'December', event: 'Annual Function' },
                  { month: 'March', event: 'Annual Examinations' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="font-semibold text-secondary">{item.month}</span>
                    <span className="text-muted-foreground">{item.event}</span>
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
