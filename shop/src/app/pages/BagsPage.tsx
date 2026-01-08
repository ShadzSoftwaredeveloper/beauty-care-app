import { useState, useMemo } from 'react';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';

export function BagsPage() {
  const [sortBy, setSortBy] = useState('best-selling');
  const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string[]}>({});
  const [priceRange, setPriceRange] = useState([500]);
  const [showFilters, setShowFilters] = useState(false);

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
      material: 'Leather',
      style: 'Tote',
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
      material: 'Leather',
      style: 'Crossbody',
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
      material: 'Leather',
      style: 'Shoulder',
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
      material: 'Canvas',
      style: 'Backpack',
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
      material: 'Synthetic',
      style: 'Clutch',
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
      material: 'Suede',
      style: 'Shoulder',
    },
  ];

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const currentFilters = prev[filterType] || [];
      if (checked) {
        return { ...prev, [filterType]: [...currentFilters, value] };
      } else {
        return { ...prev, [filterType]: currentFilters.filter(item => item !== value) };
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
    setPriceRange([500]);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply material filter
    if (selectedFilters.material && selectedFilters.material.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.material.includes(product.material)
      );
    }

    // Apply style filter
    if (selectedFilters.style && selectedFilters.style.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.style.includes(product.style)
      );
    }

    // Apply price filter
    filtered = filtered.filter(product => product.price <= priceRange[0]);

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Keep original order for newest
        break;
      case 'best-selling':
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [products, selectedFilters, priceRange, sortBy]);

  return (
    <div className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 lg:px-[70px] bg-[#FAF9F8] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6 text-xs md:text-sm text-gray-600">
          <span>Home</span> / <span className="text-gray-900">Bags</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12" style={{ fontFamily: 'serif' }}>
          Bags Collection
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Mobile Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Sidebar - Hidden on mobile unless toggled */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar 
              category="bags" 
              productCount={filteredProducts.length}
              onClearFilters={handleClearFilters}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-4 md:mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg bg-white text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
              >
                <option value="best-selling">Best Selling</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  category="bags"
                  showAddToCart={true}
                />
              ))}
            </div>

            {/* No results message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-sm md:text-base">No products match your filters.</p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 text-[#FF6B5B] hover:underline text-sm md:text-base"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}