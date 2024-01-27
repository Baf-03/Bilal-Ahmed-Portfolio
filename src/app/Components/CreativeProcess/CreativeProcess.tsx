// CreativeProcess.tsx
import React from "react";
import Image from "next/image";

const CreativeProcess = () => {
  return (
    <div className="relative h-[90rem] w-[85%]">
     {/* <h2 className="backgroundimage text-[2rem] text-center md:text-[3rem] font-bold">
    Creative Process
</h2> */}
      <p className="w-[85%] mt-9 border-l border-dotted border-red-500 ps-2">
        Creating a digital solution
        <span className="text-red-500 font-bold">
          is not as simple as it seems
        </span>
        . There are several steps, from conception to product launch. Below I
        highlight some of these steps, in summary, so that you can visualize the
        process.
      </p>
     
      <div className="flex flex-wrap w-[100%] mt-9 justify-center">
        <div className="w-[22vw] flex items-center text-center p-4">
          <div className="flex flex-col items-center  ">
          <picture>
      <source srcSet="https://example.com/hero.avif" type="image/avif" />
      <source srcSet="https://example.com/hero.webp" type="image/webp" />
      <img
        src="https://example.com/hero.jpg"
        alt="Landscape picture"
        width={800}
        height={500}
      />
    </picture>
            <h2 className="font-bold">01. Planning</h2>
            <p className="w-[65%] ">
              We study your idea to outline the best strategy and choose the
              most appropriate digital solutions .
            </p>
          </div>
        </div>
        {/* Repeat the above structure for other steps */}
      </div>
    </div>
  );
};

export default CreativeProcess;
