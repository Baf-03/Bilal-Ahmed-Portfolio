'use client'
import React, { useEffect, useState } from 'react';

const TyperEffect = () => {
    const [word, setWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isRemoving, setIsRemoving] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150); // Adjust typing speed for smoother effect

    const qualities = ["powerful", "reliable", "elegant"];

    useEffect(() => {
        const handleTyping = () => {
            if (!isRemoving) {
                if (letterIndex < qualities[wordIndex].length) {
                    setWord((prevWord) => prevWord + qualities[wordIndex][letterIndex]);
                    setLetterIndex((prevIndex) => prevIndex + 1);
                    setTypingSpeed(100); // Adjust for typing speed
                } else {
                    setIsRemoving(true);
                    setTypingSpeed(500); // Pause before deleting
                }
            } else {
                if (letterIndex > 0) {
                    setWord((prevWord) => prevWord.slice(0, -1));
                    setLetterIndex((prevIndex) => prevIndex - 1);
                    setTypingSpeed(20); // Adjust for deleting speed
                } else {
                    setIsRemoving(false);
                    setWordIndex((prevIndex) => (prevIndex + 1) % qualities.length);
                    setTypingSpeed(100); // Pause before typing the next word
                }
            }
        };

        const interval = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(interval);
    }, [wordIndex, letterIndex, isRemoving, typingSpeed]);

    return (
        <div className='text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] h-[5rem] lg:h-[7rem] xl:h-[9rem] 3xl:text-[4.2rem] 3xl:mb-9'>
            I build
            <span className="text-gradient !bg-clip-text !text-transparent !bg-gradient-to-r !from-blue-500 !to-teal-400 smooth flex">{word}| software</span>

        </div>
    )
}

export default TyperEffect;
