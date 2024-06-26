import React from 'react';

function Navbar() {
  return (
    <div className="relative p-4 flex items-center ">
      <div className="absolute left-4 text-black text-2xl font-bold">Logo</div>
      <div className="flex justify-center w-full">
        <div className="flex space-x-4">
          <a href="#home" className="text-black text-lg font-sans font-semibold hover:underline">Home</a>
          <a href="#pricing" className="text-black text-lg font-sans font-semibold hover:underline">Pricing</a>
          <a href="#blog" className="text-black text-lg font-sans font-semibold hover:underline">Blog</a>
          <a href="#faqs" className="text-black text-lg font-sans font-semibold hover:underline">FAQs</a>
          <a href="#about" className="text-black text-lg font-sans font-semibold hover:underline">About Us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
