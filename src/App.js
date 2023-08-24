import React from 'react';
import Sidebar from './components/Sidebar';
import SidebarItem from './components/SidebarItem';
import SectionTitle from './components/SectionTitle';
import {
    UilBookAlt,
    UilBracketsCurly,
    UilEstate,
    UilFacebook,
    UilFlask,
    UilHourglass,
    UilInstagram,
    UilLinkedin,
    UilTwitter,
    UilUser,
    UilUserSquare
} from '@iconscout/react-unicons';


const App = () => {
    return (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <Sidebar />
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    <SectionTitle sectionName="MyPortfolio" />
                    {/* Main Section */}
                    <SectionTitle sectionName="Main" />
                    <SidebarItem icon={<UilEstate />} text="Home" />
                    <SidebarItem icon={<UilUser />} text="About" />
                    <SidebarItem icon={<UilBookAlt />} text="Education" />

                    {/* Journey Section */}
                    <SectionTitle sectionName="Journey" />
                    <SidebarItem icon={<UilBracketsCurly />} text="Projects" />
                    <SidebarItem icon={<UilFlask />} text="Experience" />
                    <SidebarItem icon={<UilHourglass />} text="Timeline" />

                    {/* Contact Section */}
                    <SectionTitle sectionName="Contact" />
                    <SidebarItem icon={<UilUserSquare />} text="Contact" />

                    {/* Media Section */}
                    <SectionTitle sectionName="Media" />
                    <SidebarItem icon={<UilLinkedin />} text="LinkedIn" />
                    <SidebarItem icon={<UilInstagram />} text="Instagram" />
                    <SidebarItem icon={<UilFacebook />} text="Facebook" />
                    <SidebarItem icon={<UilTwitter />} text="Twitter" />
                </ul>
            </div>
        </div>
    );
};

export default App;
