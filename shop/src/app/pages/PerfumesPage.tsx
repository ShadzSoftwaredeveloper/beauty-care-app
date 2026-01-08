import { useState, useMemo } from 'react';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';
import perfumeImage1 from '../../assets/7f64e5aef355cde734746e8a1f8d5f56ffbe68ee.png';
import perfumeImage2 from '../../assets/25e24baea239519b326cf36787fb3b6052d71b1d.png';

export function PerfumesPage() {
  const [sortBy, setSortBy] = useState('best-selling');
  const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string[]}>({});
  const [priceRange, setPriceRange] = useState([500]);
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      image: perfumeImage1,
      title: 'Citrus Burst Eau de Toilette',
      price: 59.99,
      rating: 4,
      reviews: 67,
      tags: ['Citrus', 'Fresh'],
      badge: undefined,
      scentNotes: ['Citrus', 'Fresh'],
      bottleSize: '50ml',
    },
    {
      id: 2,
      image: perfumeImage2,
      title: 'Mystic Oud Intense',
      price: 149.99,
      rating: 5,
      reviews: 203,
      tags: ['Oriental', 'Woody'],
      badge: 'Premium',
      scentNotes: ['Oriental', 'Woody'],
      bottleSize: '100ml',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80',
      title: 'Lavender Fields Perfume',
      price: 74.99,
      rating: 5,
      reviews: 98,
      tags: ['Floral', 'Calming'],
      badge: undefined,
      scentNotes: ['Floral'],
      bottleSize: '50ml',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&q=80',
      title: 'Midnight Rose Eau de Parfum',
      price: 89.99,
      rating: 4,
      reviews: 156,
      tags: ['Floral', 'Woody'],
      badge: 'Best Seller',
      scentNotes: ['Floral', 'Woody'],
      bottleSize: '100ml',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&q=80',
      title: 'Ocean Breeze Fresh',
      price: 69.99,
      rating: 4,
      reviews: 112,
      tags: ['Fresh', 'Citrus'],
      badge: undefined,
      scentNotes: ['Fresh', 'Citrus'],
      bottleSize: '30ml',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80',
      title: 'Vanilla Dream',
      price: 79.99,
      rating: 5,
      reviews: 145,
      tags: ['Sweet', 'Oriental'],
      badge: 'Only 3 left',
      scentNotes: ['Sweet', 'Oriental'],
      bottleSize: '50ml',
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

    // Apply scent notes filter
    if (selectedFilters.scentNotes && selectedFilters.scentNotes.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.scentNotes.some(note => product.scentNotes.includes(note))
      );
    }

    // Apply bottle size filter
    if (selectedFilters.bottleSize && selectedFilters.bottleSize.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.bottleSize.includes(product.bottleSize)
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
          <span>Home</span> / <span className="text-gray-900">Perfumes</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12" style={{ fontFamily: 'serif' }}>
          Perfumes Collection
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
              category="perfumes" 
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
                  category="perfumes"
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