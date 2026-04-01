import { useState, useEffect } from 'react';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="bg-white sticky top-0 z-50"
      style={{
        borderBottom: '1px solid #E2E4EF',
        boxShadow: scrolled ? '0 4px 24px rgba(93,95,239,0.10)' : '0 1px 3px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center animate-pulse-glow"
              style={{ flexShrink: 0 }}
            >
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>D</span>
            </div>
            <span style={{ fontFamily: 'Sora, sans-serif' }} className="font-bold text-xl text-[#1A1D2E]">
              Digi<span className="text-[#5D5FEF]">Tools</span>
            </span>
          </div>

          {/* Nav Links — Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link text-[#6B7194] font-medium text-sm hover:text-[#5D5FEF]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Cart & CTA */}
          <div className="flex items-center gap-3">
            <button
              className="relative p-2.5 rounded-full hover:bg-[#EEF0FF] transition-colors cursor-pointer"
              title="Cart"
            >
              <FiShoppingCart className="w-5 h-5 text-[#1A1D2E]" />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  style={{ fontSize: '10px' }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            <button className="hidden sm:block border border-[#DDE1F0] text-[#1A1D2E] px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#F5F6FA] hover:border-[#5D5FEF] transition-all cursor-pointer">
              Login
            </button>
            <button className="hidden sm:block btn-primary-custom text-white px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer">
              Get Started
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2.5 rounded-xl hover:bg-[#F5F6FA] transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <FiX className="w-5 h-5 text-[#1A1D2E]" />
                : <FiMenu className="w-5 h-5 text-[#1A1D2E]" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: '1px solid #E2E4EF',
            backgroundColor: '#fff',
            padding: '12px 0 20px',
          }}
        >
          <div className="container-custom flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-[#6B7194] font-medium hover:text-[#5D5FEF] hover:bg-[#EEF0FF] transition-all text-sm"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-3 mt-3 px-4">
              <button className="flex-1 border border-[#DDE1F0] text-[#1A1D2E] px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#F5F6FA] transition-all cursor-pointer">
                Login
              </button>
              <button className="flex-1 btn-primary-custom text-white px-4 py-2.5 rounded-xl font-semibold text-sm cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
