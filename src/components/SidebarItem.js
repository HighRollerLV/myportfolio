import React from 'react';

const SidebarItem = ({icon, text, isNew, link}) => {
    return (
        <li>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center h-11 pl-4 hover:bg-gray-50 text-gray-600 hover:text-gray-800 transition-all duration-300 ease-in-out w-64"
            >
                <span className="inline-flex justify-center items-center">{icon}</span>
                <span className="ml-4 text-xl tracking-wide truncate">{text}</span>
                {isNew && (
                    <span
                        className="absolute top-1 right-1 px-2 py-0.5 text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                        New
                    </span>
                )}
            </a>
        </li>
    );
};

export default SidebarItem;