import { motion } from 'framer-motion';
import { BookOpen, Users, Target, Award, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import aboutImage from '@/assets/about-school.jpg';

const values = [
  { icon: BookOpen, title: 'Quality Education', description: 'Comprehensive curriculum designed for holistic development.' },
  { icon: Users, title: 'Student-Centered', description: 'Every child is unique and receives personalized attention.' },
  { icon: Target, title: 'Excellence', description: 'Striving for excellence in academics, sports, and co-curricular activities.' },
  { icon: Award, title: 'Character Building', description: 'Developing ethical values and strong moral character.' },
];

const About = () => {
  return (
    <Layout title="About Us - Delhi Public School Sursand">
      <PageHero title="About Us" breadcrumb="About Us" />

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="About School"
                title="Welcome to Delhi Public School Sursand"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Delhi Public School Sursand provides best education to children. Our purpose is to nurture the unique potential of every student entrusted in our care. We aim to offer a liberal and enlightened environment in education to keep pace with dynamic trends.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We at "Delhi Public School Sursand" are committed towards meeting the challenges of the modern era, dovetailing much of the ethos of the new post-independence India into its educational program and philosophy.
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 my-8 italic text-foreground">
                "Educating the mind without educating the heart is no education at all. Actions speak louder than words."
              </blockquote>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={aboutImage}
                alt="Students in classroom"
                className="rounded-2xl shadow-school-lg w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-school border border-border/50"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution that nurtures young minds to become responsible global citizens, equipped with knowledge, skills, and values to excel in the 21st century.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-school border border-border/50"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide holistic education that fosters intellectual curiosity, creativity, and character development while maintaining high academic standards and promoting cultural values.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Values"
            title="What We Stand For"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-10 h-10 text-secondary" />
                </div>
                <h4 className="font-display font-bold text-xl text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Real Understanding Through an Integrated Approach"
            light
            center
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'CBSE affiliated curriculum',
              'Experienced and qualified faculty',
              'Modern infrastructure and facilities',
              'Safe and secure environment',
              'Focus on holistic development',
              'Regular parent-teacher interaction',
              'Sports and co-curricular activities',
              'Technology-enabled learning',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
