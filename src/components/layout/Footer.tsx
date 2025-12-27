import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-display font-bold">
                DPS
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">DPS SURIYA</h3>
                <p className="text-xs opacity-80">Estd: 2025</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Delhi Public School Suriya is an English Medium School under the guideline of CBSE, providing quality education from Play to Class IX.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/dpssuriya.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com/d.p.s._suriya_8292" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com/@DelhiPublicSchoolSuriyaNawadih" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Admission', 'Academic', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors group">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 relative">
              Why Choose Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {['Experienced Faculty', 'English Environment', 'CCTV Security', 'Computer Lab', 'Transportation'].map((link) => (
                <li key={link}>
                  <span className="flex items-center gap-2 text-sm opacity-80">
                    <ArrowRight size={14} />
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 relative">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">Rajdhanwar Road, Suriya, Near Nawadih Panchayat Bhawan, Giridih - 825320</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <a href="tel:+918292065084" className="hover:opacity-100 hover:text-secondary transition-colors block">
                    +91 8292065084
                  </a>
                  <a href="tel:+918292591939" className="hover:opacity-100 hover:text-secondary transition-colors block">
                    +91 8292591939
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href="mailto:dpssuriyanawadih@gmail.com" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                  dpssuriyanawadih@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">Mon - Sat: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2025 Delhi Public School Suriya. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;