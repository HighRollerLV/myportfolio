import React from 'react';
import { UilBars } from '@iconscout/react-unicons';

const HamburgerMenu = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div className="relative">
            <button
                className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? (
                    /* Replace with your close icon or symbol if needed */
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    /* Use the UilBars icon here */
                    <UilBars size="24" color="currentColor" />
                )}
            </button>
        </div>
    );
};

export default HamburgerMenu;