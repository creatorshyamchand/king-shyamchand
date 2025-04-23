
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-academy-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Academy Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mythun Academy</h3>
            <p className="mb-2 flex items-start gap-2">
              <span className="mt-1"><MapPin size={16} /></span>
              <span>Aurangabad, Suti 2, Murshidabad, West Bengal, India</span>
            </p>
            <p className="mb-2 flex items-center gap-2">
              <Phone size={16} />
              <span>+91 12345 67890</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <span>contact@mythunacademy.com</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-academy-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-academy-accent transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-academy-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-academy-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-academy-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Teacher</h4>
              <p>Mr. Mithun Das</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mythun Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
