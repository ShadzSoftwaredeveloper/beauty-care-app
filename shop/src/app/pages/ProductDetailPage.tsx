import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { getProduct, getProductsByCategory } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ProductCard } from '../components/ProductCard';

export function ProductDetailPage() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const product = category && id ? getProduct(category, parseInt(id)) : null;
  const relatedProducts = category ? getProductsByCategory(category).filter(p => p.id !== Number(id)).slice(0, 4) : [];

  if (!product || !category) {
    return (
      <div className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 lg:px-[70px] bg-[#FAF9F8] min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <div className="mb-4 md:mb-6 text-xs md:text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            {' / '}
            {category && (
              <>
                <Link to={`/${category}`} className="hover:text-gray-900 capitalize">{category}</Link>
                {' / '}
              </>
            )}
            <span className="text-gray-900">Product not found</span>
          </div>

          <h1 className="text-3xl md:text-4xl mb-4">Product not found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#FF6B5B] text-white rounded-lg hover:bg-[#FF5545] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Set default image if not selected
  if (!selectedImage) {
    setSelectedImage(product.image);
  }

  // Set default selections
  if (product.colors && !selectedColor) {
    setSelectedColor(product.colors[0]);
  }
  if (product.sizes && !selectedSize) {
    setSelectedSize(product.sizes[0]);
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      category,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 lg:px-[70px] bg-[#FAF9F8] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6 text-xs md:text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          {' / '}
          <Link to={`/${category}`} className="hover:text-gray-900 capitalize">{category}</Link>
          {' / '}
          <span className="text-gray-900">{product.title}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-20">
          {/* Product Image Gallery */}
          <div className="space-y-3 md:space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border-2 ${
                      selectedImage === image
                        ? 'border-[#FF6B5B]'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} - View ${index + 1}`}
                      className="w-full h-full object-cover aspect-square"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Title and Badge */}
            <div>
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-[#FF6B5B] text-white text-xs rounded-full mb-3">
                  {product.badge}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4" style={{ fontFamily: 'serif' }}>
                {product.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl md:text-4xl text-[#FF6B5B]">
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="text-base md:text-lg mb-2 md:mb-3">Features:</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B5B]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Colors */}
            {product.colors && (
              <div>
                <h3 className="text-base md:text-lg mb-2 md:mb-3">Color:</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base border-2 rounded-lg transition-all ${
                        selectedColor === color
                          ? 'border-[#FF6B5B] bg-[#FF6B5B]/10'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && (
              <div>
                <h3 className="text-base md:text-lg mb-2 md:mb-3">Size:</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base border-2 rounded-lg transition-all ${
                        selectedSize === size
                          ? 'border-[#FF6B5B] bg-[#FF6B5B]/10'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center">
              <div className="flex items-center border-2 border-gray-300 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 md:px-4 md:py-2 hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  -
                </button>
                <span className="px-4 py-2 md:px-6 md:py-2 border-x-2 border-gray-300 text-sm md:text-base">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 md:px-4 md:py-2 hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-3 bg-[#FF6B5B] text-white rounded-lg hover:bg-[#FF5545] transition-colors text-sm md:text-base"
              >
                <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                Add to Cart
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm md:text-base">
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
                Add to Wishlist
              </button>
              <button className="flex sm:flex-initial items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm md:text-base">
                <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                <span className="sm:hidden">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8" style={{ fontFamily: 'serif' }}>
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  {...relatedProduct}
                  category={category}
                  showAddToCart={true}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}