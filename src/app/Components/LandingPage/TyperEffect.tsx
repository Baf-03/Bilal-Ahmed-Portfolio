// TyperEffect.tsx
import React, { useEffect, useState } from 'react';

const TyperEffect = () => {
    const [word, setWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isRemoving, setIsRemoving] = useState(false);

    useEffect(() => {
        const qualities = ["Developer.", "Professional Coder", "Problem Solver"];  // Move 'qualities' inside useEffect
        const interval = setInterval(() => {
            // Your existing code
        }, 100);

        return () => clearInterval(interval);
    }, [wordIndex, letterIndex, isRemoving]);

    return (
        <div>
            I am <span className="text-red-500 ps-2">{word}</span>{" "}
        </div>
    );
}

export default TyperEffect;
