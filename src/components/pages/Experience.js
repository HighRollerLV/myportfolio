import React from 'react';
import ExperienceData from "./Experience/ExperienceData";

const Experience = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate p-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ExperienceData
                    CompanyImage="/media/latvenergo.jpg"
                    CompanyNameALT="Latvenergo"
                    CompanyName="Latvenergo"
                    DateFrom="03/2022"
                    DateTo="06/2022"
                    Role="IT Specialist Internship"
                    Description="During my internship at Latvenergo, I specialized in virtual machine configuration
                    and hardware management, gaining valuable skills and insights. I was responsible for configuring
                    connections between various machines and the central server, ensuring seamless network
                    communication. Additionally, I handled the installation and integration of hardware appliances
                    such as computers, printers, and projectors, requiring a deep understanding of network
                    compatibility. A highlight of my role was working with computer BIOS systems. I mastered
                    reinstallations and installations through cloning, optimizing system performance. I also
                    played a key role in maintaining and upgrading computer hardware, developing expertise
                    in identifying and addressing hardware issues. My Latvenergo internship equipped me with
                    practical IT skills and a deeper understanding of network operations, enhancing my ability
                    to solve real-world challenges in the field."
                    CompanyWebsite="https://latvenergo.lv/lv"
                />
                <ExperienceData
                    CompanyImage="/media/desktime.png"
                    CompanyNameALT="DeskTime"
                    CompanyName="DeskTime"
                    DateFrom="01/2023"
                    DateTo="05/2023"
                    Role="Programmer Internship"
                    Description="During my internship at DeskTime, I had the exciting opportunity to work on
                     a significant project involving the Laravel framework. My primary task was to develop a
                     dynamic slider that played a pivotal role in showcasing the company's statistics,
                     graphs, ongoing data, and essential information. This slider was more than just a visual
                     component; it served as an engaging and informative tool for both internal and external
                     audiences. It displayed vital company data in a visually appealing manner, making it easy
                     for everyone to stay updated on the latest happenings within the organization. Additionally,
                     I was responsible for creating an intuitive admin panel. This panel allowed authorized users
                     to effortlessly upload images to be featured in the slider, particularly for events and
                     memorable pictures. This feature streamlined the process of updating the slider content,
                     ensuring that it remained fresh and relevant. To enhance the overall user experience,
                     I utilized the Tailwind CSS framework for styling. This choice not only provided a sleek
                     and modern look but also allowed for rapid development and easy maintenance. Overall, my
                     internship at DeskTime was a valuable and very enjoyable experience that allowed me to
                     contribute to the company's digital presence and enhance its ability to effectively
                     communicate important information to its stakeholders."
                    CompanyWebsite="https://desktime.com/"
                />
            </div>
        </div>
    );
};

export default Experience;