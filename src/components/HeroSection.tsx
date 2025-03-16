
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative bg-blue-600 overflow-hidden">
      {/* Background World Map */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
          alt="World Map" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Main Content */}
      <div className="min-h-[90vh] flex flex-col items-center justify-center relative z-10 py-8 md:py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="block mb-2 md:mb-3">Welcome to</span>
            <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Adarsh English Medium School
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
            Adarsh English Medium School has over 2,000+ years of educational excellence.
            <span className="hidden sm:inline"><br/></span>
            <span className="sm:hidden">{" "}</span>
            Your child to inspire by learning - Get Destination to discover dreams
          </p>
          <button className="bg-yellow-500 text-blue-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 animate-slide-up opacity-0 text-base sm:text-lg" style={{animationDelay: '0.6s'}}>
            ENROLL NOW
          </button>
        </div>
        
        {/* Photo Grid */}
        <div className="w-full max-w-5xl mx-auto mt-10 md:mt-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <div className="rounded-lg overflow-hidden border-2 sm:border-4 border-yellow-400 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="School Event" 
                className="w-full h-24 sm:h-32 md:h-40 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border-2 sm:border-4 border-yellow-400 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80" 
                alt="Classroom" 
                className="w-full h-24 sm:h-32 md:h-40 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border-2 sm:border-4 border-yellow-400 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Students" 
                className="w-full h-24 sm:h-32 md:h-40 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border-2 sm:border-4 border-yellow-400 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Student Achievement" 
                className="w-full h-24 sm:h-32 md:h-40 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Floating bubble path */}
        <div className="absolute left-0 right-0 bottom-0 h-16 sm:h-24 md:h-32 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C176.57,101.57,258.88,83.26,321.39,56.44Z" 
              className="fill-current text-blue-100 opacity-50 bubble-path"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
