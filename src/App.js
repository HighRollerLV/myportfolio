import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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

import Home from './components/pages/Home';
import About from './components/pages/About';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Timeline from './components/pages/Timeline';
import Contact from './components/pages/Contact';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                <Sidebar/>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <SectionTitle sectionName="MyPortfolio"/>
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
            <Routes>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/education" component={Education}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/timeline" component={Timeline}/>
                <Route path="/contact" component={Contact}/>
            </Routes>
        </Router>
    );
};

export default App;
