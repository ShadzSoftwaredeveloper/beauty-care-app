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
    <Link to={link} className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      {badge && (
        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 bg-[#2C2C2C] text-white text-xs uppercase tracking-wider rounded-full">
            {badge}
          </span>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-white text-3xl mb-1">{title}</h3>
        <p className="text-white/90 text-sm">{productCount} products</p>
      </div>
    </Link>
  );
}

export function CategorySection() {
  const categories = [
    {
      title: 'Perfumes',
      productCount: 24,
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=800&q=80',
      badge: 'NEW' as const,
      link: '/perfumes',
    },
    {
      title: 'Bags',
      productCount: 18,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
      link: '/keyholders',
    },
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
              SHOP BY CATEGORY
            </p>
            <h2 className="text-5xl leading-tight" style={{ fontFamily: 'serif' }}>
              Find Your<br />
              Perfect Match
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 leading-relaxed max-w-lg">
              Each category is carefully curated to help you discover exactly what you need. Shop focused collections without distractions.
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First row - 2 large cards */}
          <div className="lg:col-span-2 lg:row-span-1">
            <CategoryCard {...categories[0]} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1">
            <CategoryCard {...categories[1]} />
          </div>
          
          {/* Second row - 3 cards */}
          {categories.slice(2).map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}