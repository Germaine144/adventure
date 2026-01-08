// src/components/Header.tsx
"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileDestinationsOpen, setIsMobileDestinationsOpen] = useState(false);

  const destinations = [
    { name: 'Rwanda', href: '/destinations/rwanda' },
    { name: 'Tanzania', href: '/destinations/tanzania' },
    { name: 'Kenya', href: '/destinations/kenya' },
    { name: 'Zanzibar', href: '/destinations/zanzibar' },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 transition-colors duration-300 ${scrolled ? 'bg-black/60 backdrop-blur' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link href="/" className="text-white flex-shrink-0">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* Responsive logo sizing */}
            <span className="font-serif text-base sm:text-lg md:text-xl font-bold">SAFARI</span>
            <span className="font-serif text-base sm:text-lg md:text-xl">INTO AFRICA</span>
          </div>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none p-2 -mr-2 hover:bg-white/10 rounded-md transition-colors"
          aria-label="Open menu"
          onClick={() => setIsMobileOpen(true)}
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:space-x-4 lg:space-x-6 xl:space-x-8 text-white uppercase tracking-widest text-xs lg:text-sm">
          <Link href="/" className="hover:text-brand-primary transition-colors py-2">Home</Link>
          <Link href="/about" className="hover:text-brand-primary transition-colors py-2">About Us</Link>
          
          {/* Destinations dropdown */}
          <div className="relative group">
            <button
              className="hover:text-brand-primary transition-colors flex items-center space-x-1 py-2"
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              <span>Destinations</span>
              <svg 
                className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-44 lg:w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                isDestinationsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              {destinations.map((destination) => (
                <Link
                  key={destination.name}
                  href={destination.href}
                  className="block px-4 py-2.5 lg:py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-brand-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {destination.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link href="/contact" className="hover:text-brand-primary transition-colors py-2">Contact</Link>
        </nav>
      </div>

      {/* Mobile menu drawer */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsMobileOpen(false)} 
          />
          
          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-72 xs:w-80 sm:w-96 max-w-[85vw] bg-white text-gray-900 shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between z-10">
              <span className="font-serif text-lg sm:text-xl font-bold">Menu</span>
              <button 
                aria-label="Close menu" 
                onClick={() => setIsMobileOpen(false)} 
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu items */}
            <div className="px-4 sm:px-6 py-4 space-y-2">
              <Link 
                href="/" 
                onClick={() => setIsMobileOpen(false)} 
                className="block py-3 px-3 font-semibold text-base rounded-md hover:bg-gray-100 transition-colors"
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                onClick={() => setIsMobileOpen(false)} 
                className="block py-3 px-3 font-semibold text-base rounded-md hover:bg-gray-100 transition-colors"
              >
                About Us
              </Link>

              {/* Destinations accordion */}
              <div className="rounded-md overflow-hidden">
                <button
                  className="w-full flex items-center justify-between py-3 px-3 font-semibold text-base hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileDestinationsOpen((v) => !v)}
                >
                  <span>Destinations</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${isMobileDestinationsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Accordion content with smooth animation */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isMobileDestinationsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 py-2 space-y-1">
                    {destinations.map((d) => (
                      <Link 
                        key={d.name} 
                        href={d.href} 
                        onClick={() => setIsMobileOpen(false)} 
                        className="block py-2.5 px-6 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-primary transition-colors"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                href="/contact" 
                onClick={() => setIsMobileOpen(false)} 
                className="block py-3 px-3 font-semibold text-base rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;