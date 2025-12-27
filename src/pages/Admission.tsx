import { motion } from 'framer-motion';
import { FileText, Calendar, Users, CheckCircle, Download, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const admissionSteps = [
  {
    icon: FileText,
    title: 'Fill Application Form',
    description: 'Complete the admission form with all required details and documents.',
  },
  {
    icon: Calendar,
    title: 'Schedule Visit',
    description: 'Visit the school for a campus tour and interaction with staff.',
  },
  {
    icon: Users,
    title: 'Interview',
    description: 'Attend the admission interview with your child.',
  },
  {
    icon: CheckCircle,
    title: 'Confirmation',
    description: 'Receive admission confirmation and complete the enrollment process.',
  },
];

const requirements = [
  'Birth Certificate (Original & Photocopy)',
  'Transfer Certificate from Previous School',
  'Report Card of Last Two Years',
  'Passport Size Photographs (4 copies)',
  'Aadhar Card of Student',
  'Aadhar Card of Parents',
  'Address Proof',
  'Caste Certificate (if applicable)',
];

const Admission = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Enquiry Submitted!',
      description: 'Thank you for your interest. We will contact you soon.',
    });
  };

  return (
    <Layout title="Admission - Delhi Public School Suriya">
      <PageHero title="Admission 2026-27" breadcrumb="Admission" />

      {/* Admission Info Banner */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              School Admission Open for Session 2026-27
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Admissions open for Play to Class IX. Register now to secure your child's future with quality CBSE education at Delhi Public School Suriya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            subtitle="Admission Process"
            title="How to Apply"
            description="Follow these simple steps to apply for admission at DPS Suriya."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-5 relative">
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="font-display font-bold text-xl text-foreground mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < admissionSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-10 -right-4 w-8 h-8 text-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Form */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Requirements"
                title="Documents Required"
              />
              <div className="bg-card p-8 rounded-2xl shadow-school border border-border/50">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-foreground font-medium mb-2">Classes Offered:</p>
                  <p className="text-muted-foreground">Play, Nursery, LKG, UKG, Class I to IX</p>
                </div>
              </div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Enquiry"
                title="Admission Enquiry Form"
              />
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-school border border-border/50 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input id="studentName" placeholder="Enter student name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input id="parentName" placeholder="Enter parent name" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter phone number" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="class">Class Applying For</Label>
                    <Input id="class" placeholder="e.g., Class 1" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea id="message" placeholder="Any additional information..." rows={4} />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-navy-light">
                  Submit Enquiry
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              For More Details Contact
            </h2>
            <p className="text-primary-foreground/80 mb-2 text-lg">
              +91 8292065084, 8292591939
            </p>
            <p className="text-primary-foreground/80 mb-6">
              dpssuriyanawadih@gmail.com
            </p>
            <p className="text-primary-foreground/60 max-w-xl mx-auto">
              Rajdhanwar Road, Suriya, Near Nawadih Panchayat Bhawan, Giridih - (825320)
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;