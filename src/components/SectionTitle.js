import React from 'react';

const SectionTitle = ({ sectionName }) => {
    return (
        <li className="px-5">
            <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">{sectionName}</div>
            </div>
        </li>
    );
};

export default SectionTitle;