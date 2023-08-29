import React from 'react';
import { UilBars } from '@iconscout/react-unicons';

const HamburgerMenu = ({ onClick }) => (
    <button onClick={onClick} className="h-10 w-10 text-gray-600 hover:text-gray-800">
        <UilBars size={24} />
    </button>
);

export default HamburgerMenu;