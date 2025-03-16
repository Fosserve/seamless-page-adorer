
import React from 'react';

const JoinSection = () => {
  return (
    <section className="py-16 bg-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-white"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Student" 
              className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
            />
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Join Adarsh Family</h2>
            <p className="text-white text-lg mb-8">
              Join the Adarsh family and give your child the gift of an exceptional education! Our holistic approach nurtures academic excellence, character development, and life skills. With state-of-the-art facilities, experienced faculty, and a supportive community, we create an environment where students thrive. Our alumni's success stories speak volumes about the Adarsh advantage. Don't miss this opportunity for your child's bright future!
            </p>
            
            <button className="bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
