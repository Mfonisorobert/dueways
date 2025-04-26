import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-950 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-white">
          <div className="md:w-[30%]  ">
            <img 
            src="/DLogo.png" alt="Logo" className="rounded-lg " />
          </div>
        </Link>
        <div className="space-x-4 hidden md:flex text-white">
          <Link to="/" className="hover:text-blue-500 font-medium">Home</Link>
          <Link to="/services" className="hover:text-blue-500 font-medium">Services</Link>
          <Link to="/catalogue" className="hover:text-blue-500 font-medium">Catalogue</Link>
          <Link to="/submit-work" className="hover:text-blue-500 font-medium">Submit Work</Link>
          <Link to="/track-order" className="hover:text-blue-500 font-medium">Track Order</Link>
          <Link to="/feedback" className="hover:text-blue-500 font-medium">Feedback</Link>
        </div>
        {/* Mobile Menu Icon (optional, can be improved later) */}
      </div>
    </nav>
  );
}

export default Navbar;