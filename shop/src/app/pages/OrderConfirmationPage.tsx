import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Mail, Home } from 'lucide-react';

export function OrderConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  useEffect(() => {
    // Redirect to home if no order data
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  const { orderNumber, formData } = orderData;

  return (
    <div className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 lg:px-[70px] bg-[#FAF9F8] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Success Icon */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-green-100 rounded-full mb-4 md:mb-6">
            <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4" style={{ fontFamily: 'serif' }}>
            Order Confirmed!
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            Thank you for your purchase
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm mb-4 md:mb-6">
          <div className="border-b pb-4 md:pb-6 mb-4 md:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-xs md:text-sm text-gray-600 mb-1">Order Number</p>
                <p className="text-xl md:text-2xl tracking-wide">{orderNumber}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs md:text-sm text-gray-600 mb-1">Order Date</p>
                <p className="text-base md:text-lg">
                  {new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl" style={{ fontFamily: 'serif' }}>
              What happens next?
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B5B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B5B]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg mb-1">Order Confirmation Email</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    We've sent a confirmation email to{' '}
                    <span className="font-medium">{formData.email}</span> with
                    your order details and receipt.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B5B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B5B]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg mb-1">Order Processing</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Your order is being prepared and will be shipped within 2-3
                    business days. You'll receive a tracking number once it ships.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B5B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B5B]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg mb-1">Delivery</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Your order will be delivered to:
                  </p>
                  <p className="text-xs md:text-sm mt-2">
                    {formData.firstName} {formData.lastName}
                    <br />
                    {formData.address}
                    <br />
                    {formData.city}, {formData.state} {formData.zipCode}
                    <br />
                    {formData.country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <Link
            to="/"
            className="flex-1 px-6 py-3 bg-[#FF6B5B] text-white text-center rounded-lg hover:bg-[#FF5545] transition-colors text-sm md:text-base"
          >
            Continue Shopping
          </Link>
          <button
            onClick={() => window.print()}
            className="flex-1 px-6 py-3 border-2 border-gray-300 text-center rounded-lg hover:border-gray-400 transition-colors text-sm md:text-base"
          >
            Print Receipt
          </button>
        </div>

        {/* Support */}
        <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gray-50 rounded-xl text-center">
          <p className="text-sm md:text-base text-gray-600 mb-2">
            Need help with your order?
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Contact our support team at{' '}
            <a
              href="mailto:support@beautylane.com"
              className="text-[#FF6B5B] hover:underline"
            >
              support@beautylane.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}