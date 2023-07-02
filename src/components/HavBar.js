import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExampleComponent = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="ml-4 relative">
      <button
        className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-300"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link to="/Tools" className="block px-4 py-3 text-sm">
          Tools
        </Link>
      </button>
      {isDropdownOpen && (
        <div
          className="absolute z-1 bg-gray-800 text-white py-1 mt-2 rounded-md shadow-lg"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
         
          <Link to="BMI" className="block px-4 py-2 text-sm">
            BMI Mass Index
          </Link>
          <Link to="TDEE" className="block px-4 py-2 text-sm">
            TDEE
          </Link>
          <Link to="CalorieBurn" className="block px-4 py-2 text-sm">
            Calorie Burn
          </Link>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center"></div>
          <div className="flex items-center">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/Walking-Calculator" className="ml-4 text-white">
              Walk Goal
            </Link>
            {/* ADD drop-down menu under Tools  */}
            <ExampleComponent />
            <Link to="/TrainingPrograms" className="ml-4 text-white">
              Programs
            </Link>
            <Link to="/About" className="ml-4 text-white">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
