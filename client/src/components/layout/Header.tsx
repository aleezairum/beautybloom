import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useCart } from "@/hooks/useCart";
import { BRAND_NAME, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="fixed w-full z-50 glass-effect py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold gradient-text tracking-tighter cursor-pointer hover-scale">
                {BRAND_NAME}
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`text-sm uppercase font-medium tracking-wider transition-colors duration-300 hover-scale ${
                  location === item.href 
                    ? "text-orange-500" 
                    : "text-gray-300 hover:text-orange-500"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                className="text-gray-300 hover:text-orange-500 focus:outline-none transition-colors duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 glass-effect rounded-lg animate-fadeInUp">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a 
                    className={`block px-4 py-2 text-sm uppercase font-medium tracking-wider transition-colors duration-300 ${
                      location === item.href 
                        ? "text-orange-500" 
                        : "text-gray-300 hover:text-orange-500"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
