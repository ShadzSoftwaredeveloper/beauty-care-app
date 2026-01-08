import image_beed9df9d6bcb4276e89271e73da7dd61f353828 from '../../assets/beed9df9d6bcb4276e89271e73da7dd61f353828.png';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/c05f02422c026272606750696d65aa3a9d949472.png';

export function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 lg:px-[70px] bg-[#FAF9F8]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center py-[20px] md:py-[40px]">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <p className="text-[#00C896] text-xs md:text-sm uppercase tracking-wide">
              Free Delivery on Orders $50+
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1]" style={{ fontFamily: 'serif' }}>
              Beauty That Speaks
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Curated essentials for the modern you. Discover our collection of premium perfumes, bags, shoes, and accessories.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-[#2C2C2C] text-white rounded-full hover:bg-[#1C1C1C] transition-colors text-sm md:text-base">
                Explore Collections
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-[#2C2C2C] text-[#2C2C2C] rounded-full hover:bg-[#2C2C2C] hover:text-white transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                Shop Best Sellers
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-6 lg:mt-0">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-[#E8D5B7] to-[#F5E6D3] shadow-xl md:shadow-2xl">
              <img 
                src={image_beed9df9d6bcb4276e89271e73da7dd61f353828}
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