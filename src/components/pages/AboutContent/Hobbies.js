import React from 'react';
import {GiPistolGun, GiBoatFishing, GiHiking, GiBoxingGloveSurprise} from "react-icons/gi";
import { MdHistoryEdu, MdTravelExplore } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { CgGym } from "react-icons/cg";

const Hobbies = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Hobbies
                </h3>
                <div className="grid grid-cols-2">
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <p className="flex flex-row items-center text-center justify-start gap-2"><GiPistolGun/> Hunting</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><GiBoatFishing/> Fishing</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><CgGym/> Weightlifting/Gym</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><GiBoxingGloveSurprise/> Boxing/MMA</p>
                    </ul>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <p className="flex flex-row items-center text-center justify-start gap-2"><MdHistoryEdu/> History Buffing</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><GoProjectSymlink/> Project Development</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><MdTravelExplore/> Traveling</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><GiHiking/> Hiking</p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;