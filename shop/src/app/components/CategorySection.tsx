import image_1fa219f9dd289181029f875c9cd79bfe95517224 from '../../assets/25e24baea239519b326cf36787fb3b6052d71b1d.png';
import image_d4be922076c7ec8938ddd9ed18aacd2bc8ec6d5d from '../../assets/13c7c68c6ec33e0e1b706291bd748a19c6fa9eba.png';
import perfumeImage from '../../assets/174f53b3408685a1c5d0f3a6d165e845987b8079.png';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  productCount: number;
  image: string;
  badge?: 'NEW' | 'TRENDING';
  link: string;
}

function CategoryCard({ title, productCount, image, badge, link }: CategoryCardProps) {
  return (
    <Link to={link} className="relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-[20px]"
      />
      
      {badge && (
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#2C2C2C] text-white text-[10px] md:text-xs uppercase tracking-wider rounded-full">
            {badge}
          </span>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/60 to-transparent rounded-[20px]">
        <h3 className="text-white text-xl md:text-3xl mb-1">{title}</h3>
        <p className="text-white/90 text-xs md:text-sm">{productCount} products</p>
      </div>
    </Link>
  );
}

export function CategorySection() {
  const categories = [
    {
      title: 'Perfumes',
      productCount: 24,
      image: perfumeImage,
      badge: 'NEW' as const,
      link: '/perfumes',
    },
    {
      title: 'Bags',
      productCount: 18,
      image: image_d4be922076c7ec8938ddd9ed18aacd2bc8ec6d5d,
      badge: 'TRENDING' as const,
      link: '/bags',
    },
    {
      title: 'Shoes',
      productCount: 32,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      link: '/shoes',
    },
    {
      title: 'Earrings',
      productCount: 45,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      link: '/earrings',
    },
    {
      title: 'Keyholders',
      productCount: 15,
      image: image_1fa219f9dd289181029f875c9cd79bfe95517224,
      link: '/keyholders',
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-[70px] bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          <div className="text-center lg:text-left">
            <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3">
              SHOP BY CATEGORY
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ fontFamily: 'serif' }}>
              Find Your<br />
              Perfect Match
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Each category is carefully curated to help you discover exactly what you need. Shop focused collections without distractions.
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 rounded-[20px]">
          {/* First row - 2 large cards */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            <CategoryCard {...categories[0]} />
          </div>
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-1">
            <CategoryCard {...categories[1]} />
          </div>
          
          {/* Second row - 3 cards */}
          {categories.slice(2).map((category, index) => (
            <div key={index} className="md:col-span-1 lg:col-span-1">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}