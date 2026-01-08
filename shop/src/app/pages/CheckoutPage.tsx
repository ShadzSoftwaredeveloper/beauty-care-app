import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Lock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    // Contact Information
    email: '',
    phone: '',
    
    // Shipping Address
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment Information
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Additional Options
    saveInfo: false,
    sameAsBilling: true,
  });

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems.length, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Prepare order details for WhatsApp
      const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
      
      // Build cart items list
      const itemsList = cartItems.map(item => 
        `• ${item.title} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
      ).join('%0A');
      
      // Calculate totals
      const shipping = 10.00;
      const tax = cartTotal * 0.1;
      const total = cartTotal + shipping + tax;
      
      // Build WhatsApp message
      const message = `*NEW ORDER - Beauty Lane*%0A%0A` +
        `*Order #${orderNumber}*%0A%0A` +
        `*Customer Details:*%0A` +
        `Name: ${formData.firstName}%0A` +
        `Phone: ${formData.lastName}%0A` +
        `Address: ${formData.address}%0A%0A` +
        `*Order Items:*%0A${itemsList}%0A%0A` +
        `*Order Summary:*%0A` +
        `Subtotal: $${cartTotal.toFixed(2)}%0A` +
        `Shipping: $${shipping.toFixed(2)}%0A` +
        `Tax (10%%): $${tax.toFixed(2)}%0A` +
        `*Total: $${total.toFixed(2)}*`;
      
      // Clear cart
      clearCart();
      
      // Redirect to WhatsApp
      window.location.href = `https://wa.me/0704848382?text=${message}`;
      
      setIsProcessing(false);
    }, 2000);
  };

  const shipping = 10.00;
  const tax = cartTotal * 0.1;
  const total = cartTotal + shipping + tax;

  return (
    <div className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 lg:px-[70px] bg-[#FAF9F8] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6 text-xs md:text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          {' / '}
          <Link to="/cart" className="hover:text-gray-900">Cart</Link>
          {' / '}
          <span className="text-gray-900">Checkout</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12" style={{ fontFamily: 'serif' }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {/* Contact Information */}
              {/* <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl mb-4 md:mb-6" style={{ fontFamily: 'serif' }}>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2 text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div> */}

              {/* Shipping Address */}
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl mb-4 md:mb-6" style={{ fontFamily: 'serif' }}>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Names *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      phone number
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2 text-gray-700">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                      placeholder="123 Main Street, Apt 4"
                    />
                  </div>
                  {/* <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                    />
                  </div> */}
                  {/* <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                    />
                  </div> */}
                  {/* <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                    />
                  </div> */}
                  <div>
                    {/* <label className="block text-sm mb-2 text-gray-700">
                      Country *
                    </label> */}
                    {/* <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                      placeholder="Enter your country"
                    /> */}
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              {/* <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl" style={{ fontFamily: 'serif' }}>
                    Payment Information
                  </h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Lock className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Secure Payment</span>
                  </div>
                </div>

                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600 mb-2">
                    <strong>Demo Mode:</strong> This is a demonstration checkout. No real payment will be processed.
                  </p>
                  <p className="text-xs text-gray-500">
                    Use any test card number like: 4242 4242 4242 4242
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Card Number *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                      />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      required
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        required
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#FF6B5B] rounded focus:ring-[#FF6B5B]"
                    />
                    <span className="text-sm text-gray-700">
                      Save payment information for future purchases
                    </span>
                  </label>
                </div>
              </div> */}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm lg:sticky lg:top-32">
                <h2 className="text-xl md:text-2xl mb-4 md:mb-6" style={{ fontFamily: 'serif' }}>
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-3 mb-4 md:mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={`${item.category}-${item.id}`} className="flex gap-3">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm truncate">{item.title}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-xs md:text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 border-t pt-3 md:pt-4">
                  <div className="flex justify-between text-sm md:text-base text-gray-600">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base text-gray-600">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base text-gray-600">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg md:text-xl">
                      <span>Total</span>
                      <span className="text-[#FF6B5B]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full px-6 py-3 bg-[#FF6B5B] text-white rounded-lg hover:bg-[#FF5545] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isProcessing ? 'Processing...' : `Order Now $${total.toFixed(2)}`}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3 md:mt-4">
                  By completing your purchase you agree to our Terms of Service
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}