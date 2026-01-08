import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer, WhatsAppSection } from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { HomePage } from './pages/HomePage';
import { PerfumesPage } from './pages/PerfumesPage';
import { BagsPage } from './pages/BagsPage';
import { ShoesPage } from './pages/ShoesPage';
import { EarringsPage } from './pages/EarringsPage';
import { KeyholdersPage } from './pages/KeyholdersPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/perfumes" element={<PerfumesPage />} />
            <Route path="/bags" element={<BagsPage />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/earrings" element={<EarringsPage />} />
            <Route path="/keyholders" element={<KeyholdersPage />} />
            <Route path="/:category/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
          <WhatsAppSection />
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}