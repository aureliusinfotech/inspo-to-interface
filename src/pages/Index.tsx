import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Building2, Shield, BookOpen, Users, Trophy, Bus, ArrowRight, GraduationCap, Heart, Music, Palette, Dumbbell, Monitor, Sparkles } from 'lucide-react';
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
    title: 'Welcome to Delhi Public School Suriya',
    subtitle: 'An English Medium School Under the Guideline of CBSE',
  },
];

const facilities = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Highly qualified and experienced teachers dedicated to student success with innovative teaching methods.',
  },
  {
    icon: Monitor,
    title: 'Computer Lab',
    description: 'Modern computer lab equipped with latest technology for digital learning and skill development.',
  },
  {
    icon: Shield,
    title: 'CCTV Security',
    description: 'Complete CCTV camera surveillance for student safety and security throughout the campus.',
  },
  {
    icon: Dumbbell,
    title: 'Spacious Playground',
    description: 'Large playground for sports activities and physical development of students.',
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Safe and reliable transport facilities covering all major routes in the region.',
  },
  {
    icon: Sparkles,
    title: 'Extra Classes',
    description: 'Special attention and extra classes for weak students to help them improve.',
  },
];

const whyChooseUs = [
  'Experienced Faculty',
  'Innovative Teaching Methods',
  'Visual & Performing Arts',
  'English Environment',
  'Dance & Music Classes',
  'Art & Craft Classes',
  'Yoga Classes',
  'Computer Lab',
  'CCTV Camera Security',
  'Spacious Playground',
  'Extra Classes for weak students',
  'Transportation Facilities',
];

const testimonials = [
  {
    name: 'Parent of Class V Student',
    text: 'Delhi Public School Suriya provides excellent education with a focus on overall development. The faculty is very supportive and knowledgeable.',
  },
  {
    name: 'Parent of Class III Student',
    text: 'We are very happy with the school. The English environment and innovative teaching methods have helped our child excel in studies.',
  },
  {
    name: 'Parent of Class VII Student',
    text: 'The school offers a perfect balance of academics and extracurricular activities. My child loves the dance and music classes.',
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
              alt="Delhi Public School Suriya"
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
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-semibold mb-4">
              Admission Open 2026-27 | Play to IXth
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-teal-dark text-secondary-foreground font-semibold">
                <Link to="/admission">
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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
                <div className="text-4xl font-display font-bold">Estd</div>
                <div className="text-xl font-bold">2025</div>
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
                title="Welcome to Delhi Public School Suriya"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Delhi Public School Suriya is an English Medium School under the guideline of CBSE, established in 2025. Our purpose is to nurture the unique potential of every student entrusted in our care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide a liberal and enlightened environment in education with experienced faculty, innovative teaching methods, and modern facilities to ensure holistic development of students.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">Play to IX</div>
                    <div className="text-sm text-muted-foreground">Classes Offered</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">CBSE</div>
                    <div className="text-sm text-muted-foreground">Affiliated</div>
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
                School Admission 2026-27
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Admissions open for Play to Class IX. Register now to secure your child's future with quality CBSE education.
              </p>
              <Button asChild className="bg-secondary hover:bg-teal-dark text-secondary-foreground">
                <Link to="/admission">Register Now</Link>
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
                Contact Us
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                For more details, contact us at +91 8292065084, 8292591939 or visit our school at Rajdhanwar Road, Suriya, Giridih.
              </p>
              <Button asChild className="bg-secondary hover:bg-teal-dark text-secondary-foreground">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Why to Choose Us?"
            description="We offer a comprehensive learning environment with modern facilities and experienced faculty."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-school border border-border/50"
              >
                <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 md:py-28">
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
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Testimonials"
            title="What Parents Say"
            description="Hear from parents about their experience with Delhi Public School Suriya."
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
              Take the first step towards a brighter future. Apply for admission for session 2026-27 and become part of the DPS Suriya family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-navy-light text-primary-foreground">
                <Link to="/admission">
                  Apply for Admission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-primary">
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