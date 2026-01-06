import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-8 bg-[#FAF9F8]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-[#00C896] text-sm uppercase tracking-wide">
              Free Delivery on Orders $50+
            </p>
            
            <h1 className="text-6xl md:text-7xl leading-[1.1]" style={{ fontFamily: 'serif' }}>
              Beauty<br />
              That<br />
              Speaks
            </h1>
            
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Curated essentials for the modern you. Discover our collection of premium perfumes, bags, shoes, and accessories.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-[#2C2C2C] text-white rounded-full hover:bg-[#1C1C1C] transition-colors">
                Explore Collections
              </button>
              <button className="px-8 py-4 border-2 border-[#2C2C2C] text-[#2C2C2C] rounded-full hover:bg-[#2C2C2C] hover:text-white transition-colors flex items-center gap-2">
                Shop Best Sellers
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#E8D5B7] to-[#F5E6D3] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
                alt="Beauty products including perfumes, handbag, and shoes"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
