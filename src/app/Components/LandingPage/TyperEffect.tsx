'use client'
import React, { useEffect, useState } from 'react'
import { TypewriterClass } from 'typewriter-effect';


const TyperEffect = () => {
    let [word, setWord] = useState("");
    let [wordIndex, setWordIndex] = useState(0);
    let [letterIndex, setLetterIndex] = useState(0);
    let [isRemoving, setIsRemoving] = useState(false);
  
    useEffect(() => {
    const qualities = ["Developer.", "Professional Coder", "Problem Solver"];

      const interval = setInterval(() => {
        if (!isRemoving) {
          if (letterIndex < qualities[wordIndex].length) {
            setWord((prevWord) => prevWord + qualities[wordIndex][letterIndex]);
            setLetterIndex((prevIndex) => prevIndex + 1);
          } else {
            setIsRemoving(true);
          }
        } else {
          if (letterIndex > 0) {
            setWord((prevWord) => prevWord.slice(0, -1));
            setLetterIndex((prevIndex) => prevIndex - 1);
          } else {
            setIsRemoving(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % qualities.length);
          }
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, [wordIndex, letterIndex, isRemoving]);
  return (
    <div>
         I am <span className="text-red-500 ps-2"> {word}</span>{" "}
             {/* <TypewriterClass text="" delay={1000} /> */}
    </div>
  )
}

export default TyperEffect