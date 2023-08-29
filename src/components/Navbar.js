import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto py-4 px-6 md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-semibold">
                        Your Logo
                    </Link>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 6H21V8H3V6Z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="md:flex space-x-4">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-gray-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-gray-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        {/* Add more menu items here */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;