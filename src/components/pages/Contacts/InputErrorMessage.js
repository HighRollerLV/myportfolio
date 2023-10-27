import React, {useEffect, useState} from 'react';

function InputErrorMessage() {
    const [showInputError, setShowInputError] = useState(false);

    useEffect(() => {
        if (showInputError) {
            setTimeout(() => {
                setShowInputError(false);
            }, 3000);
        }
    }, [showInputError]);

    return (
        showInputError && (
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg absolute top-4 right-4">
                Fill out all of the input fields.
            </div>
        )
    );
}

export default InputErrorMessage;