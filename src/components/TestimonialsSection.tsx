
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Jai",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "I am very proud and satisfied with Adarsh School. The teachers are extremely qualified and caring. My son has flourished academically and personally."
  },
  {
    id: 2,
    name: "Priya",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Choosing Adarsh was the best decision we made for our daughter. The emphasis on values alongside academics makes this school special."
  },
  {
    id: 3,
    name: "Rajesh",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    content: "The facilities and teaching methods at Adarsh are exceptional. My children have developed a love for learning that I credit to their wonderful teachers."
  },
  {
    id: 4,
    name: "Anita",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "I've seen remarkable growth in my child's confidence and academic abilities since joining Adarsh. The school truly cares for each student's development."
  },
  {
    id: 5,
    name: "Vikram",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    content: "The balance of academics, sports, and extracurricular activities at Adarsh is perfect. My son is receiving a truly well-rounded education."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say About Us</h2>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card flex-1 min-w-[300px]"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="flex justify-end mt-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={prevSlide}
              className="mx-2 w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-md hover:bg-yellow-600 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2 items-center mx-4">
              {testimonials.slice(0, testimonials.length - 2).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === activeIndex ? 'bg-yellow-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="mx-2 w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-md hover:bg-yellow-600 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
