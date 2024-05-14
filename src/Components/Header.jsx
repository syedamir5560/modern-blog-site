import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

function Header() {
    return (
        <header className="bg-white-200 py-4 px-9 border-b-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img src="./src/Images/Logo.webp" alt="Logo" className="h-12  w-[180px] mr-4" />

                </div>

                {/* Navigation */}
                <nav className="flex flex-col md:flex-row justify-center md:justify-center flex-grow mb-4 md:mb-0  md:text-center">
                    <NavLink to="/" className= " text-black text-[1.2rem] hover:font-bold cursor-pointer px-4 py-2 md:py-0 md:px-4" activeClassName="font-bold">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="text-black text-[1.2rem] hover:font-bold cursor-pointer px-4 py-2 md:py-0 md:px-4" activeClassName="font-bold">
                        About Us
                    </NavLink>
                    <NavLink to="/contact" className="text-black text-[1.2rem] hover:font-bold cursor-pointer px-4 py-2 md:py-0 md:px-4" activeClassName="font-bold">
                        Contact Us
                    </NavLink>
                </nav>

                {/* Subscribe Button */}
                <button className="bg-red-500 hover:bg-red-600 rounded-full text-white font-bold py-2 px-4">
                    Subscribe
                    <i className="fa-brands fa-youtube mx-2"></i>
                </button>
            </div>
        </header>
    );
}

export default Header;
