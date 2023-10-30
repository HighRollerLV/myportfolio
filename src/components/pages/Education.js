import React from 'react';
import EducationData from './Education/EducationData';

function Education() {
    return (
        <div
            className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate flex flex-col items-center justify-between">
            <div className="mt-8 max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-semibold text-white mb-8">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-500 lg:w-full">
                    <EducationData GraduationImage="/media/DacvgGrad.jpg"
                                   SchoolName="Draudzīgā Aicinājuma Cēsu Valsts ģimnāzija"
                                   EducationLevel="Middle School" StartDate="2016" EndDate="2019" Study="None"/>
                    <EducationData GraduationImage="/media/VTDTGraduation.png"
                                   SchoolName="Vidzemes Tehnoloģiju un Dizaina tehnikums"
                                   EducationLevel="Vocational Degree" StartDate="2019" EndDate="2023"
                                   Study="Computer Science"/>
                </div>
            </div>
        </div>
    );
}


export default Education;