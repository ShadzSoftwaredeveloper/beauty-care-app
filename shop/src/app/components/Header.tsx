import image_13c7c68c6ec33e0e1b706291bd748a19c6fa9eba from '../../assets/13c7c68c6ec33e0e1b706291bd748a19c6fa9eba.png';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';

export function Header() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-[70px] py-[16px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={image_13c7c68c6ec33e0e1b706291bd748a19c6fa9eba} 
            alt="Beauty Lane Logo" 
            className="h-8 md:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-[#FF6B5B] hover:text-[#FF6B5B]/80 transition-colors">
            Home
          </Link>
          <Link to="/perfumes" className="text-gray-700 hover:text-[#FF6B5B] transition-colors">
            Perfumes
          </Link>
          <Link to="/bags" className="text-gray-700 hover:text-[#FF6B5B] transition-colors">
            Bags
          </Link>
          <Link to="/shoes" className="text-gray-700 hover:text-[#FF6B5B] transition-colors">
            Shoes
          </Link>
          <Link to="/earrings" className="text-gray-700 hover:text-[#FF6B5B] transition-colors">
            Earrings
          </Link>
          <Link to="/keyholders" className="text-gray-700 hover:text-[#FF6B5B] transition-colors">
            Keyholders
          </Link>
        </nav>

        {/* Right side - Cart & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Shopping Cart */}
          <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF6B5B] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 md:px-8 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-[#FF6B5B] hover:text-[#FF6B5B]/80 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/perfumes" 
              className="text-gray-700 hover:text-[#FF6B5B] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Perfumes
            </Link>
            <Link 
              to="/bags" 
              className="text-gray-700 hover:text-[#FF6B5B] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bags
            </Link>
            <Link 
              to="/shoes" 
              className="text-gray-700 hover:text-[#FF6B5B] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shoes
            </Link>
            <Link 
              to="/earrings" 
              className="text-gray-700 hover:text-[#FF6B5B] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Earrings
            </Link>
            <Link 
              to="/keyholders" 
              className="text-gray-700 hover:text-[#FF6B5B] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Keyholders
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}