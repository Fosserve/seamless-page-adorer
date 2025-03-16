
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Adarsh English Medium School. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-sm mx-2 hover:underline">Privacy Policy</a>
          <span className="text-sm">|</span>
          <a href="#" className="text-sm mx-2 hover:underline">Terms of Service</a>
          <span className="text-sm">|</span>
          <a href="#" className="text-sm mx-2 hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
