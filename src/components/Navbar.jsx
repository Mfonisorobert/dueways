// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-blue-950 shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 py-4">
//         <Link to="/" className="text-2xl font-bold text-white">
//           <div className="md:w-[30%]  ">
//             <img 
//             src="/DLogo.png" alt="Logo" className="rounded-lg " />
//           </div>
//         </Link>
//         <div className="space-x-4 hidden md:flex text-white">
//           <Link to="/" className="hover:text-blue-500 font-medium">Home</Link>
//           <Link to="/services" className="hover:text-blue-500 font-medium">Services</Link>
//           <Link to="/catalogue" className="hover:text-blue-500 font-medium">Catalogue</Link>
//           <Link to="/submit-work" className="hover:text-blue-500 font-medium">Submit Work</Link>
//           <Link to="/track-order" className="hover:text-blue-500 font-medium">Track Order</Link>
//           <Link to="/feedback" className="hover:text-blue-500 font-medium">Feedback</Link>
//         </div>
//         {/* Mobile Menu Icon (optional, can be improved later) */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-950 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          <div className="md:w-[30%]  w-[50%]">
            <img 
            src="/DLogo.png" alt="Logo" className="rounded-lg " />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-4 hidden md:flex text-white">
          <Link to="/" className="hover:text-blue-500 font-medium">Home</Link>
          <Link to="/services" className="hover:text-blue-500 font-medium">Services</Link>
          <Link to="/catalogue" className="hover:text-blue-500 font-medium">Catalogue</Link>
          <Link to="/submit-work" className="hover:text-blue-500 font-medium">Submit Work</Link>
          <Link to="/track-order" className="hover:text-blue-500 font-medium">Track Order</Link>
          <Link to="/feedback" className="hover:text-blue-500 font-medium">Feedback</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-700 font-semibold">Home</Link>
            <Link to="/services" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-700 font-semibold">Services</Link>
            <Link to="/catalogue" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-700 font-semibold">Catalogue</Link>
            <Link to="/submit-work" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-700 font-semibold">Submit Work</Link>
            <Link to="/track-order" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-700 font-semibold">Track Order</Link>
            <Link to="/feedback" onClick={toggleMenu} className="text-gray-700 hover:text-indigo-700 font-semibold">Feedback</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
