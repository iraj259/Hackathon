import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] py-16 px-6 text-gray-300">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr_1fr_1fr] gap-12">
        {/* Company Information */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Avion</h3>
          <address className="not-italic">
            21 New York Street <br />
            New York City <br />
            United States of America <br />
            432 34
          </address>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            Social links
          </h4>
          <div className="flex flex-wrap gap-6 items-center">
            <a href="#" className="hover:text-white text-3xl">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white text-3xl">
              <FaFacebookSquare />
            </a>
            <a href="#" className="hover:text-white text-3xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white text-3xl">
              <FaSkype />
            </a>
            <a href="#" className="hover:text-white text-3xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white text-3xl">
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Menu</h4>
          <ul className="space-y-2">
            {[
              "New arrivals",
              "Best sellers",
              "Recently viewed",
              "Popular this week",
              "All products",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            {["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"].map(
              (category) => (
                <li key={category}>
                  <a href="#" className="hover:text-white">
                    {category}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Our company</h4>
          <ul className="space-y-2">
            {[
              "About us",
              "Vacancies",
              "Contact us",
              "Privacy",
              "Returns policy",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700  pt-6 ml-20">
        <p>© 2022 Avion LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
