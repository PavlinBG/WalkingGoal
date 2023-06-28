import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             
          </div>
          <div className="flex items-center">
          <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/CalTest" className="ml-4 text-white">
              Calculator
            </Link>
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
