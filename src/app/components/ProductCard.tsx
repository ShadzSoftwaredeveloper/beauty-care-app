import { Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  tags: string[];
  badge?: string;
  onQuickView?: () => void;
}

export function ProductCard({
  image,
  title,
  price,
  rating,
  reviews,
  tags,
  badge,
  onQuickView,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#FF6B5B] text-white text-xs rounded-full">
              {badge}
            </span>
          </div>
        )}
        
        {/* Quick View Button */}
        <button
          onClick={onQuickView}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:shadow-xl"
        >
          Quick View
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg mb-2 line-clamp-2">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviews} reviews)</span>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="text-[#FF6B5B] text-xl">${price.toFixed(2)}</div>
      </div>
    </div>
  );
}
