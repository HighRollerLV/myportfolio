import React from 'react';
import {
    UilBars,
    UilTimes,
} from '@iconscout/react-unicons';

const HamburgerMenu = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div className="relative">
            <button
                className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <div className={`transition-transform transform ${isSidebarOpen ? 'rotate-0 transition duration-700 ease-in-out' : 'rotate-180 transition duration-700 ease-in-out'}`}>
                    {isSidebarOpen ? (
                        <UilTimes className="md:w-6 md:h-6" color="currentColor" />
                    ) : (
                        <UilBars className="md:w-6 md:h-6" color="currentColor" />
                    )}
                </div>
            </button>
        </div>
    );
};

export default HamburgerMenu;