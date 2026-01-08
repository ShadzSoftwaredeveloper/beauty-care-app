import { MessageCircle, Facebook, Instagram, CircleCheck } from 'lucide-react';

export function WhatsAppSection() {
  return (
    <section className="bg-gradient-to-br from-[#00A884] to-[#008F6D] py-16 px-8 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <h2 className="text-5xl leading-tight" style={{ fontFamily: 'serif' }}>
              Shop Directly<br />
              on WhatsApp
            </h2>
            
            <p className="text-white/90 text-lg max-w-md leading-relaxed">
              Get instant support and personalized recommendations. Chat with us now and shop your favorites directly through WhatsApp.
            </p>
            
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-[#00A884] rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Start Shopping on WhatsApp</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
              alt="WhatsApp Shopping Interface"
              className="w-64 h-auto object-contain drop-shadow-2xl"
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
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/100x50/000000/FFFFFF?text=Beauty+Care"
                alt="Beauty Lane Logo" 
                className="h-12 brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Curated beauty essentials for the modern you. Quality products, exceptional service.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a href="#perfumes" className="text-white/80 hover:text-white transition-colors text-sm">
                  Perfumes
                </a>
              </li>
              <li>
                <a href="#bags" className="text-white/80 hover:text-white transition-colors text-sm">
                  Bags
                </a>
              </li>
              <li>
                <a href="#shoes" className="text-white/80 hover:text-white transition-colors text-sm">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#earrings" className="text-white/80 hover:text-white transition-colors text-sm">
                  Earrings
                </a>
              </li>
              <li>
                <a href="#keyholders" className="text-white/80 hover:text-white transition-colors text-sm">
                  Keyholders
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="text-lg mb-4">Customer Service</h3>
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
            <h3 className="text-lg mb-4">Connect With Us</h3>
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="#facebook" 
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#instagram" 
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#whatsapp" 
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
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Beauty&Care. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
           Developed by shadzTech
          </p>
        </div>
      </div>
    </footer>
  );
}
