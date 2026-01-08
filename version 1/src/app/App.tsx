import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PerfumesPage } from './pages/PerfumesPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perfumes" element={<PerfumesPage />} />
          {/* Placeholder routes for other categories */}
          <Route path="/bags" element={<div className="pt-32 pb-16 px-8"><h1>Bags Collection - Coming Soon</h1></div>} />
          <Route path="/shoes" element={<div className="pt-32 pb-16 px-8"><h1>Shoes Collection - Coming Soon</h1></div>} />
          <Route path="/earrings" element={<div className="pt-32 pb-16 px-8"><h1>Earrings Collection - Coming Soon</h1></div>} />
          <Route path="/keyholders" element={<div className="pt-32 pb-16 px-8"><h1>Keyholders Collection - Coming Soon</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
