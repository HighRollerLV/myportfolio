import React from 'react';

const SidebarItem = ({icon, text, isNew}) => {
    return (
        <li>
            <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
                <span className="inline-flex justify-center items-center ml-4">{icon}</span>
                <span className="ml-2 text-xl tracking-wide truncate">{text}</span>
                {isNew && (
                    <span
                        className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
            New
          </span>
                )}
            </a>
        </li>
    );
};

export default SidebarItem;