import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-gold">Starz</span>
                <span className="text-white"> Import  </span>
                <span className="ml-2 text-base italic text-gold">Illuminate your aura.</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Your premier destination for authentic luxury fragrances. We specialize in importing and distributing the world's finest perfumes from premium brands.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 972-484-1877</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">starzimport@hotmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: Holiday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Starz Import Perfume. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;