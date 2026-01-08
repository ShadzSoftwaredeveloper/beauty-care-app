import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="https://via.placeholder.com/100x50/000000/FFFFFF?text=Beauty+Care" 
            alt="Beauty Lane Logo" 
            className="h-10"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
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

        {/* Shopping Cart */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ShoppingBag className="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </header>
  );
}