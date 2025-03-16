
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/59b2f8ae-7f3f-42f7-9d27-198752e98deb.png" 
            alt="Adarsh Logo" 
            className="h-12 object-contain"
          />
          <h1 className={cn(
            "ml-2 font-bold tracking-tight transition-colors",
            scrolled ? "text-blue-600" : "text-white"
          )}>
            <span className="text-xl">Adarsh</span> <span className="text-lg">English Medium School</span>
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Academics', 'Admissions', 'Facilities', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium tracking-wide transition-colors duration-200 hover:text-blue-600",
                scrolled ? "text-gray-800" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
        </div>
        
        <button className="md:hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={cn("w-6 h-6", scrolled ? "text-gray-800" : "text-white")}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
