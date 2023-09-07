import React, {useState} from 'react';
import SectionTitle from "./SectionTitle";
import SidebarItem from "./SidebarItem";
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
} from "@iconscout/react-unicons";
import HamburgerMenu from "./Hamburger";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="relative">
            {/* Display the HamburgerMenu button only on smaller screens */}
            <div className="lg:hidden">
                <HamburgerMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            </div>
            <div
                // Control visibility based on screen size
                className={`fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}
            >
                {/* Sidebar content */}
                <ul className="flex flex-col py-4 space-y-1">
                    {/* Main Section */}
                    <SectionTitle sectionName="Main"/>
                    <SidebarItem icon={<UilEstate/>} text="Home" to="/"/>
                    <SidebarItem icon={<UilUser/>} text="About" to="/about"/>
                    <SidebarItem icon={<UilBookAlt/>} text="Education" to="/education"/>

                    {/* Journey Section */}
                    <SectionTitle sectionName="Journey"/>
                    <SidebarItem icon={<UilBracketsCurly/>} text="Projects" to="/projects"/>
                    <SidebarItem icon={<UilFlask/>} text="Experience" to="/experience"/>
                    <SidebarItem icon={<UilHourglass/>} text="Timeline" to="/timeline"/>

                    {/* Contact Section */}
                    <SectionTitle sectionName="Contact"/>
                    <SidebarItem icon={<UilUserSquare/>} text="Contact" to="/contact"/>

                    {/* Media Section */}
                    <SectionTitle sectionName="Media"/>
                    <SidebarItem icon={<UilLinkedin/>} text="LinkedIn"
                                 link="https://www.linkedin.com/in/ralfs-dambitis-880369264/"/>
                    <SidebarItem icon={<UilInstagram/>} text="Instagram" link="https://www.instagram.com/ralfs_d/"/>
                    <SidebarItem icon={<UilFacebook/>} text="Facebook"
                                 link="https://www.facebook.com/ralfs.dambitis"/>
                    <SidebarItem icon={<UilTwitter/>} text="Twitter" link="https://twitter.com/RalfsDambitis"/>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;