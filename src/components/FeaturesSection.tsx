
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="relative bg-blue-100 py-16 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/3 left-16 w-16 h-16 rounded-full bg-yellow-300 animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full bg-green-400 animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Dotted line pattern */}
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" className="absolute opacity-20">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-blue-500" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* True Excellence Card */}
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <div className="absolute -top-8 -left-8 w-full h-full bg-pink-200 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-pink-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-red-500 mb-4">True Excellence</h3>
                <p className="text-gray-700">
                  "True education means more than the pursuing of a certain course of study. It means more than a preparation for the life that is now. It has to do with the whole being, and with the whole period of existence possible to man. It is the harmonious development of the physical, the mental, and the spiritual powers. It prepares the student for the joy of service in this world and for the higher joy of wider service in the world to come."
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Student with Globe" 
                  className="absolute -bottom-12 -right-12 w-36 h-36 object-cover rounded-full border-4 border-yellow-300 shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Wisdom is Light Card */}
          <div className="flex justify-center mt-16 md:mt-0">
            <div className="relative max-w-md">
              <div className="absolute -top-8 -left-8 w-full h-full bg-blue-200 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-blue-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-500 mb-4">Wisdom is Light</h3>
                <p className="text-gray-700">
                  At Adarsh, we believe that education is more than memorizing information – it's about igniting a lifelong love of learning. Our holistic approach nurtures critical thinking, creativity, and character development. We cultivate an environment where students feel empowered to explore, question, and discover their unique potential. Through innovative teaching methods and a supportive community, we guide each child to become not just knowledgeable, but truly wise.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80" 
                  alt="Student Reading" 
                  className="absolute -bottom-12 -right-12 w-36 h-36 object-cover rounded-full border-4 border-green-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
