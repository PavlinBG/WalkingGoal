import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/About" className="ml-4 text-white">
              About
            </Link>
          </div>
          <div className="text-white">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
