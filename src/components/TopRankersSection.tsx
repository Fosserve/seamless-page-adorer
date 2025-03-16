
import React from 'react';

const TopRankersSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Top Rankers</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          As we continue our tradition of excellence, we are far from complacent. We always look to the future, committed to providing the best in education. Over the years, we have built a strong and stable foundation, just as we've helped thousands of students build a strong foundation for their academic journey.
        </p>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-w-4xl w-full transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Top Students" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRankersSection;
