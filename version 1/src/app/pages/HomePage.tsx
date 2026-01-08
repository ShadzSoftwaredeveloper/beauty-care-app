import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { WhatsAppSection, Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <WhatsAppSection />
      <Footer />
    </>
  );
}
