import { useState } from 'react';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';

export function BagsPage() {
  const [sortBy, setSortBy] = useState('best-selling');

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1760624294469-550753ec203a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG90ZSUyMGJhZ3xlbnwxfHx8fDE3Njc2NzM3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Classic Leather Tote Bag',
      price: 89.99,
      rating: 4,
      reviews: 203,
      tags: ['Classic', 'Professional'],
      badge: 'Best Seller',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1718622795525-2295971921ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2JvZHklMjBiYWd8ZW58MXx8fHwxNzY3NjU3MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Elegant Crossbody Bag',
      price: 64.99,
      rating: 4.5,
      reviews: 156,
      tags: ['Casual', 'Everyday'],
      badge: 'Only 5 left',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMGJhZ3xlbnwxfHx8fDE3Njc2MDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Designer Shoulder Bag',
      price: 149.99,
      rating: 5,
      reviews: 187,
      tags: ['Luxury', 'Designer'],
      badge: 'Premium',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1655303219938-3a771279c801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjBiYWNrcGFja3xlbnwxfHx8fDE3Njc2NzkwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Casual Canvas Backpack',
      price: 69.99,
      rating: 4,
      reviews: 124,
      tags: ['Casual', 'Practical'],
      badge: undefined,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1758817991388-54a98d456317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIwY2x1dGNoJTIwYmFnfGVufDF8fHx8MTc2NzY3OTA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Mini Evening Clutch',
      price: 79.99,
      rating: 4.5,
      reviews: 98,
      tags: ['Evening', 'Elegant'],
      badge: undefined,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1758499537503-315ca95c010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRjaGVsJTIwYmFnfGVufDF8fHx8MTc2NzY3OTA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Structured Satchel Bag',
      price: 129.99,
      rating: 4,
      reviews: 145,
      tags: ['Classic', 'Versatile'],
      badge: undefined,
    },
  ];

  return (
    <div className="pt-32 pb-16 px-8 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <span>Home</span> / <span className="text-gray-900">Bags</span>
        </div>

        {/* Page Title */}
        <h1 className="text-5xl mb-12" style={{ fontFamily: 'serif' }}>
          Bags Collection
        </h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar 
            category="bags" 
            productCount={products.length}
            onClearFilters={() => console.log('Clear filters')}
          />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
              >
                <option value="best-selling">Best Selling</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
