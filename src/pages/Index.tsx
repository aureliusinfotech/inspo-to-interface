import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Building2, Shield, BookOpen, Users, Trophy, Bus, ArrowRight, GraduationCap, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import FacilityCard from '@/components/ui/FacilityCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-school.jpg';
import aboutImage from '@/assets/about-school.jpg';

const heroSlides = [
  {
    image: heroImage,
    title: 'Welcome to Delhi Public School Sursand',
    subtitle: 'Nurturing Excellence, Shaping Futures',
  },
];

const facilities = [
  {
    icon: Building2,
    title: 'Modern Building',
    description: 'Architecturally well designed building with spacious classrooms and modern amenities.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'We focused on student security with CCTV cameras and trained security guards.',
  },
  {
    icon: BookOpen,
    title: 'E-Learning',
    description: 'We provide facility of e-Learning with safe and interactive digital classrooms.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Highly qualified and experienced teachers dedicated to student success.',
  },
  {
    icon: Trophy,
    title: 'Sports',
    description: 'Comprehensive sports facilities for physical development and team spirit.',
  },
  {
    icon: Bus,
    title: 'Transport',
    description: 'Safe and reliable transport service covering all major routes.',
  },
];

const testimonials = [
  {
    name: 'Abhishek Gupta',
    text: 'After spending 4 years in DPS Sursand, I can confidently say that school is perfect not only for academics but also for overall development.',
  },
  {
    name: 'Pragati Gupta',
    text: 'School is an excellent place for learning and development. Education is treated as worship here. All the faculties are extremely supportive and knowledgeable.',
  },
  {
    name: 'Ashok Kushwaha',
    text: 'My School is the best because here we get a number of opportunities to participate in different types of competitions.',
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt="DPS Sursand"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl text-primary-foreground"
          >
            <p className="text-secondary font-semibold tracking-wider uppercase mb-4">
              Excellence in Education
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-teal-dark text-secondary-foreground font-semibold">
                <Link to="/admission">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Slide Navigation */}
        {heroSlides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-secondary w-8' : 'bg-primary-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-school-lg">
                <img
                  src={aboutImage}
                  alt="Students learning"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-4xl font-display font-bold">20+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="About Us"
                title="Welcome to Delhi Public School Sursand"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Delhi Public School Sursand provides best education to children. Our purpose is to nurture the unique potential of every student entrusted in our care. We aim to offer a liberal and enlightened environment in education to keep pace with dynamic trends.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our school is eco-friendly, pollution-free, well-built, and equipped with the latest artifacts. It lies in the heart of the city, making it accessible to all families in the region.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">1000+</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Teachers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Dedication</div>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-primary hover:bg-navy-light">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
            >
              <h3 className="font-display font-bold text-2xl text-primary-foreground mb-4">
                Admission Enquiry
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Submit the Enquiry Form and visit the school admissions office. Our counsellor will get back to you to answer your questions.
              </p>
              <Button asChild className="bg-secondary hover:bg-teal-dark text-secondary-foreground">
                <Link to="/admission">Apply Now</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
            >
              <h3 className="font-display font-bold text-2xl text-primary-foreground mb-4">
                School Admission
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Parents need to fill the admission form and ensure all documents are in order. Kindly inform the school about any special assistance requirements.
              </p>
              <Button asChild className="bg-secondary hover:bg-teal-dark text-secondary-foreground">
                <Link to="/admission">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Facilities"
            title="What We Offer"
            description="We provide world-class facilities to ensure the best learning environment for our students."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <FacilityCard
                key={facility.title}
                icon={facility.icon}
                title={facility.title}
                description={facility.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionHeading
            subtitle="Testimonials"
            title="What Students Say"
            description="Hear from our students about their experiences at Delhi Public School Sursand."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                text={testimonial.text}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-teal-dark text-secondary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Join Our School?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Take the first step towards a brighter future. Apply for admission today and become part of the DPS Sursand family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-navy-light text-primary-foreground">
                <Link to="/admission">
                  Apply for Admission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
