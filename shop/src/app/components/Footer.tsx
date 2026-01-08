import image_13c7c68c6ec33e0e1b706291bd748a19c6fa9eba from '../../assets/13c7c68c6ec33e0e1b706291bd748a19c6fa9eba.png';
import { MessageCircle, Facebook, Instagram, CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/c05f02422c026272606750696d65aa3a9d949472.png';
import whatsappPhoneImage from '../../assets/a745304896cb338c1ddad909fe6220688263c07c.png';

export function WhatsAppSection() {
  return (
    <section className="bg-gradient-to-br from-[#00A884] to-[#008F6D] py-12 md:py-16 px-4 md:px-8 lg:px-[70px] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ fontFamily: 'serif' }}>
              Shop Directly<br />
              on WhatsApp
            </h2>
            
            <p className="text-white/90 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Get instant support and personalized recommendations. Chat with us now and shop your favorites directly through WhatsApp.
            </p>
            
            <a 
              href="https://wa.me/0704848382?text=Hi%2C%20I%27m%20interested%20in%20shopping%20at%20Beauty%20Lane" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-[#00A884] rounded-full hover:bg-gray-100 transition-colors shadow-lg mx-auto lg:mx-0 w-fit"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium text-sm md:text-base">Start Shopping on WhatsApp</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={whatsappPhoneImage}
              alt="WhatsApp Shopping Interface"
              className="w-48 md:w-200 h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#A5A89B] text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-[70px] py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={image_13c7c68c6ec33e0e1b706291bd748a19c6fa9eba}
                alt="Beauty Lane Logo" 
                className="h-10 md:h-12 brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Curated beauty essentials for the modern you. Quality products, exceptional service.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-base md:text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/perfumes" className="text-white/80 hover:text-white transition-colors text-sm">
                  Perfumes
                </Link>
              </li>
              <li>
                <Link to="/bags" className="text-white/80 hover:text-white transition-colors text-sm">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/shoes" className="text-white/80 hover:text-white transition-colors text-sm">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/earrings" className="text-white/80 hover:text-white transition-colors text-sm">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/keyholders" className="text-white/80 hover:text-white transition-colors text-sm">
                  Keyholders
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="text-base md:text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-white/80 hover:text-white transition-colors text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#returns" className="text-white/80 hover:text-white transition-colors text-sm">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Column */}
          <div>
            <h3 className="text-base md:text-lg mb-4">Connect With Us</h3>
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <CircleCheck className="w-5 h-5" />
              <span>Authentic Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-[70px] py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
            © 2025 Beauty&Care. All rights reserved.
          </p>
          <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
            Developed by ShadzTech
          </p>
        </div>
      </div>
    </footer>
  );
}