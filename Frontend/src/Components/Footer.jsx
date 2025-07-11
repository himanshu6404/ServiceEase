import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161B22] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ServiceEase</h2>
          <p>Your Trusted Partner for All House Services and Repairs.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-pink-500 text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-500 text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 text-xl"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="text-sm/6 font-semibold text-white relative inline-block after:block after:h-0.5 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Services</a></li>
            <li><a href="#reviews" className="text-sm/6 font-semibold text-white relative inline-block after:block after:h-0.5 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Reviews</a></li>
            <li><a href="#ask-ai" className="text-sm/6 font-semibold text-white relative inline-block after:block after:h-0.5 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Ask AI</a></li>
            <li><a href="#contact" className="text-sm/6 font-semibold text-white relative inline-block after:block after:h-0.5 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="mb-1">📧 Email: support@ServiceEase.com</p>
          <p className="mb-1">📞 Phone: +1 234 567 890</p>
          <p className="mb-1">📍 Address: NIT Jalandhar, Punjab, India – 144011</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © 2025 ServiceEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
