import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';

export function PerfumesPage() {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=400&q=80',
      title: 'Citrus Burst Eau de Toilette',
      price: 59.99,
      rating: 4,
      reviews: 67,
      tags: ['Citrus', 'Fresh'],
      badge: undefined,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80',
      title: 'Mystic Oud Intense',
      price: 149.99,
      rating: 5,
      reviews: 203,
      tags: ['Oriental', 'Woody'],
      badge: 'Premium',
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
    },
  ];

  return (
    <div className="pt-32 pb-16 px-8 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <span>Home</span> / <span className="text-gray-900">Perfumes</span>
        </div>

        {/* Page Title */}
        <h1 className="text-5xl mb-12" style={{ fontFamily: 'serif' }}>
          Perfumes Collection
        </h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar category="perfumes" />

          {/* Products Grid */}
          <div className="flex-1">
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
