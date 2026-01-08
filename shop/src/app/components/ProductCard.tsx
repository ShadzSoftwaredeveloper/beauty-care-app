import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  tags: string[];
  badge?: string;
  category?: string;
  onQuickView?: () => void;
  onAddToCart?: () => void;
  showAddToCart?: boolean;
}

export function ProductCard({
  id,
  image,
  title,
  price,
  rating,
  reviews,
  tags,
  badge,
  category,
  onQuickView,
  showAddToCart = false,
}: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleClick = () => {
    if (category) {
      navigate(`/${category}/${id}`);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (category) {
      addToCart({
        id,
        category,
        title,
        price,
        image,
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 md:top-4 md:left-4">
            <span className="px-2 py-1 md:px-3 md:py-1 bg-[#FF6B5B] text-white text-[10px] md:text-xs rounded-full">
              {badge}
            </span>
          </div>
        )}
        
        {/* Quick View Button - Hidden on mobile */}
        <button
          onClick={onQuickView}
          className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          Quick View
        </button>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-lg mb-1 md:mb-2 line-clamp-2">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
          <div className="flex items-center gap-0.5 md:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 md:w-4 md:h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] md:text-sm text-gray-500">({reviews})</span>
        </div>

        {/* Tags - Show only first 2 on mobile */}
        <div className="flex gap-1 md:gap-2 mb-2 md:mb-3 flex-wrap">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-100 text-gray-700 text-[10px] md:text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between gap-2">
          <div className="text-[#FF6B5B] text-base md:text-xl font-medium">${price.toFixed(2)}</div>
          {showAddToCart && (
            <button
              onClick={handleAddToCart}
              className="px-3 py-1.5 md:px-4 md:py-2 bg-[#FF6B5B] text-white text-xs md:text-sm rounded-lg hover:bg-[#FF5545] transition-colors duration-300 whitespace-nowrap"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}