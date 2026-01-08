import { useState, useMemo } from 'react';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';

export function ShoesPage() {
  const [sortBy, setSortBy] = useState('best-selling');
  const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string[]}>({});
  const [priceRange, setPriceRange] = useState([500]);
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1704775989614-8435994e4e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21lbiUyMGhlZWxzfGVufDF8fHx8MTc2NzY4NjQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Classic Stiletto Heels',
      price: 129.99,
      rating: 5,
      reviews: 187,
      tags: ['Elegant', 'Evening'],
      badge: 'Best Seller',
      type: 'Heels',
      size: '38',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1739138053555-13321c306033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNuZWFrZXJzfGVufDF8fHx8MTc2NzY4NjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'White Leather Sneakers',
      price: 89.99,
      rating: 4.5,
      reviews: 234,
      tags: ['Casual', 'Comfort'],
      badge: undefined,
      type: 'Sneakers',
      size: '39',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      title: 'Ankle Strap Platform Heels',
      price: 149.99,
      rating: 5,
      reviews: 145,
      tags: ['Party', 'Trendy'],
      badge: 'Premium',
      type: 'Heels',
      size: '37',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80',
      title: 'Suede Ankle Boots',
      price: 169.99,
      rating: 4,
      reviews: 98,
      tags: ['Winter', 'Versatile'],
      badge: undefined,
      type: 'Boots',
      size: '40',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
      title: 'Ballet Flats - Nude',
      price: 69.99,
      rating: 4,
      reviews: 176,
      tags: ['Comfort', 'Classic'],
      badge: undefined,
      type: 'Flats',
      size: '38',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80',
      title: 'Strappy Block Heel Sandals',
      price: 99.99,
      rating: 4.5,
      reviews: 203,
      tags: ['Summer', 'Elegant'],
      badge: 'Only 4 left',
      type: 'Sandals',
      size: '39',
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

    // Apply type filter
    if (selectedFilters.type && selectedFilters.type.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.type.includes(product.type)
      );
    }

    // Apply size filter
    if (selectedFilters.size && selectedFilters.size.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.size.includes(product.size)
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
          <span>Home</span> / <span className="text-gray-900">Shoes</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12" style={{ fontFamily: 'serif' }}>
          Shoes Collection
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
              category="shoes" 
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
                  category="shoes"
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