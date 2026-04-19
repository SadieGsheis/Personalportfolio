import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 transition-all duration-300 ${
        isScrolled
          ? 'bg-black shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`text-xl tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
          style={{ fontFamily: "'Young Serif', serif" }}
        >
          {/* TODO: Replace with SVG logo */}
          Lara
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className="relative text-white/80 transition-colors duration-300 group"
          >
            Work
            <span 
              className="absolute left-0 right-0 bottom-[-4px] h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
            ></span>
          </Link>
          <Link
            to="/about"
            className="relative text-white/80 transition-colors duration-300 group"
          >
            About
            <span 
              className="absolute left-0 right-0 bottom-[-4px] h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6, #06b6d4)' }}
            ></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black shadow-lg border-t border-white/10">
          <div className="flex flex-col px-6 py-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
            >
              Work
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}