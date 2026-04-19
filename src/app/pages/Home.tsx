import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CompanyLogos } from '../components/CompanyLogos';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}