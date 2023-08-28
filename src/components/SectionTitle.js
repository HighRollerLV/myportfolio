import React from 'react';

const SectionTitle = ({ sectionName }) => {
    return (
        <li className="px-5">
            <div className="flex flex-row items-center h-14">
                <div className="text-base font-light tracking-wide text-gray-500 z-10">{sectionName}</div>
            </div>
        </li>
    );
};

export default SectionTitle;