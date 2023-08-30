import React, {useEffect, useState} from 'react';

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText(text.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    setDisplayText('');
                    setCurrentIndex(0);
                }, 3000);
            }
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, text]);

    return (
        <span>
      {displayText && (
          <>
              <span className="font-bold">{displayText}</span>
              <span className="blink">|</span>
          </>
      )}
    </span>
    );
};

export default Typewriter;