import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black px-10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold ">Need Help?</h3>
            <p className="text-sm">Contact us at: support@example.com</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
