import React from "react";
import Typewriter from "./Typewriter";

function HomeContent() {
    return (
        <div className="flex flex-col items-start p-6">
            <h1 className="text-4xl font-bold text-slate-50 text-border">Hi, I'm Ralfs Dambītis!</h1>
            <h2 className="text-slate-50 text-lg mt-2">
                A Passionate <Typewriter text="Front-End Developer"/>
            </h2>
            <p className="text-slate-50 max-w-md mt-4">
                Specializing in crafting captivating user experiences while embracing back-end challenges.
                My coding journey is marked by ambition, determination, and a focus on delivering exceptional
                results.
            </p>
        </div>
    );
}

export default HomeContent;
