import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-6">
        
        
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold text-green-400">FoodDelivery</h2>
          <p className="text-gray-400 mt-2">
            Your favorite meals delivered fast & fresh. Order now and enjoy delicious food at your doorstep.
          </p>
        </div>

        
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-3 text-green-400">Useful Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Menu</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-3 text-green-400">Contact Us</h3>
          <p className="flex items-center gap-2 text-gray-400">
            <MdPhone className="text-green-400" /> +91 9876543210
          </p>
          <p className="flex items-center gap-2 text-gray-400 mt-1">
            <MdEmail className="text-green-400" /> support@fooddelivery.com
          </p>

          
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>
      
      
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; 2025 FoodDelivery. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
