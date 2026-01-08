import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 lg:px-[70px] bg-[#FAF9F8] min-h-screen">
        <div className="max-w-[1400px] mx-auto text-center">
          <ShoppingBag className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 text-gray-300" />
          <h1 className="text-3xl md:text-4xl mb-3 md:mb-4" style={{ fontFamily: 'serif' }}>
            Your cart is empty
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
            Add some beautiful products to get started!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-[#FF6B5B] text-white rounded-lg hover:bg-[#FF5545] transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const shipping = 10.00;
  const tax = cartTotal * 0.1; // 10% tax
  const total = cartTotal + shipping + tax;

  return (
    <div className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 lg:px-[70px] bg-[#FAF9F8] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6 text-xs md:text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          {' / '}
          <span className="text-gray-900">Shopping Cart</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12" style={{ fontFamily: 'serif' }}>
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.category}-${item.id}`}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 flex gap-4 md:gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-lg md:rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      to={`/${item.category}/${item.id}`}
                      className="text-sm md:text-lg hover:text-[#FF6B5B] transition-colors mb-1 block line-clamp-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-xs md:text-sm text-gray-500 capitalize mb-2 md:mb-3">
                      Category: {item.category}
                    </p>
                    <div className="text-base md:text-xl text-[#FF6B5B]">${item.price.toFixed(2)}</div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-3 md:mt-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.category, Math.max(1, item.quantity - 1))}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center text-sm md:text-base"
                      >
                        -
                      </button>
                      <span className="w-6 md:w-8 text-center text-sm md:text-base">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.category, item.quantity + 1)}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center text-sm md:text-base"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.category)}
                      className="p-1.5 md:p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm sticky top-24">
              <h2 className="text-xl md:text-2xl mb-4 md:mb-6" style={{ fontFamily: 'serif' }}>
                Order Summary
              </h2>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 md:pt-4">
                  <div className="flex justify-between text-base md:text-lg font-medium">
                    <span>Total</span>
                    <span className="text-[#FF6B5B]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full px-6 py-3 bg-[#FF6B5B] text-white rounded-lg hover:bg-[#FF5545] transition-colors mb-3 md:mb-4 text-sm md:text-base"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="block text-center text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}