'use client'
import React, { useEffect, useState } from 'react'
import Typewriter from "typewriter-effect";
import "./LandingPage.css";


const TyperEffect = () => {
    let [word, setWord] = useState("");
    let [wordIndex, setWordIndex] = useState(0);
    let [letterIndex, setLetterIndex] = useState(0);
    let [isRemoving, setIsRemoving] = useState(false);
  
    useEffect(() => {
    // const qualities = ["Developer.", "Professional Coder", "Problem Solver"];
    const qualities = ["beautiful.", "Optimized", "that convert"];


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
    <div className=' text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] h-[5rem] lg:h-[7rem] xl:h-[9rem]'>
         I like creating websites<div className="text-red-500 flex smooth">{word}
         <Typewriter   />{" "}
         </div>
         
             
    </div>
  )
}

export default TyperEffect