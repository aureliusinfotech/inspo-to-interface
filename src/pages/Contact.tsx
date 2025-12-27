import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: ['Sursand, Sitamarhi', 'Bihar, India - 843325'],
  },
  {
    icon: Phone,
    title: 'Phone Number',
    lines: ['+91 9801708060', '+91 9431054176'],
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['info@dpssursand.com', 'admission@dpssursand.com'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Monday - Saturday', '8:00 AM - 4:00 PM'],
  },
];

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
  };

  return (
    <Layout title="Contact Us - Delhi Public School Sursand">
      <PageHero title="Contact Us" breadcrumb="Contact" />

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-school border border-border/50 text-center hover:shadow-school-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">{info.title}</h4>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Get In Touch"
                title="Send Us a Message"
              />
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-school border border-border/50 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter subject" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Write your message here..." rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-teal-dark text-secondary-foreground">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Location"
                title="Find Us On Map"
              />
              <div className="bg-card rounded-2xl shadow-school border border-border/50 overflow-hidden h-[400px] lg:h-[calc(100%-80px)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28560.79384!2d85.48!3d26.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed8c!2sSursand%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl mb-2">Have Questions?</h3>
              <p className="text-primary-foreground/80">Feel free to call us or visit during office hours.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-teal-dark text-secondary-foreground">
                <Phone className="mr-2 w-4 h-4" />
                Call: +91 9801708060
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
