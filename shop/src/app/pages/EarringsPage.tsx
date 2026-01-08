import { useState, useMemo } from 'react';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';

export function EarringsPage() {
  const [sortBy, setSortBy] = useState('best-selling');
  const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string[]}>({});
  const [priceRange, setPriceRange] = useState([500]);
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ29sZCUyMGVhcnJpbmdzfGVufDF8fHx8MTc2NzY4NjQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Gold Hoop Earrings',
      price: 49.99,
      rating: 5,
      reviews: 312,
      tags: ['Classic', 'Gold'],
      badge: 'Best Seller',
      style: 'Hoops',
      material: 'Gold',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3N8ZW58MXx8fHwxNzY3NTk2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Diamond Stud Earrings',
      price: 299.99,
      rating: 5,
      reviews: 189,
      tags: ['Luxury', 'Diamond'],
      badge: 'Premium',
      style: 'Studs',
      material: 'Gold',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      title: 'Pearl Drop Earrings',
      price: 79.99,
      rating: 4.5,
      reviews: 145,
      tags: ['Elegant', 'Pearl'],
      badge: undefined,
      style: 'Drop',
      material: 'Pearl',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      title: 'Silver Dangling Earrings',
      price: 59.99,
      rating: 4,
      reviews: 203,
      tags: ['Trendy', 'Silver'],
      badge: undefined,
      style: 'Dangle',
      material: 'Silver',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      title: 'Crystal Chandelier Earrings',
      price: 129.99,
      rating: 5,
      reviews: 98,
      tags: ['Evening', 'Statement'],
      badge: 'Only 2 left',
      style: 'Chandelier',
      material: 'Silver',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      title: 'Minimalist Bar Studs',
      price: 39.99,
      rating: 4.5,
      reviews: 267,
      tags: ['Minimal', 'Modern'],
      badge: undefined,
      style: 'Studs',
      material: 'Rose Gold',
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

    // Apply style filter
    if (selectedFilters.style && selectedFilters.style.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.style.includes(product.style)
      );
    }

    // Apply material filter
    if (selectedFilters.material && selectedFilters.material.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.material.includes(product.material)
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
          <span>Home</span> / <span className="text-gray-900">Earrings</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12" style={{ fontFamily: 'serif' }}>
          Earrings Collection
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
              category="earrings" 
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
                  category="earrings"
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