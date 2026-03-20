import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">More</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Business Strategy</li>
            <li>Graphics Design</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">info@domain.com</p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        © 2022 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;