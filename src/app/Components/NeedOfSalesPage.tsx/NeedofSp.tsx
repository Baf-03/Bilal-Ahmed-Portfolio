import Image from "next/image";
import React from "react";
import rocket from "../../../../public/rocket.png";

const NeedofSp = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-10 md:py-12 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 bg-gradient-to-r from-[#4b92f6] via-[#7ba9f9] to-[#a0bff1] rounded-3xl shadow-xl my-8 sm:my-12 lg:my-16 transition-all duration-500 hover:shadow-2xl">
      {/* Image Section */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 relative z-50 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <Image
          src={rocket}
          alt="Rocket illustration for landing page"
          layout="fill"
          objectFit="cover"
          className="border-white border-[8px] sm:border-[10px] rounded-lg shadow-lg shadow-black"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 max-w-full lg:max-w-[60%]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
          Need a <span className="bg-white text-[#4b92f6] px-2 py-1 rounded-md">Stunning</span> Landing Page?
        </h2>
        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl italic font-light tracking-wide">
          Launching a product, course, or event? Let’s make it unforgettable!
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          I specialize in crafting{" "}
          <span className="font-semibold text-[#dbeafe]">high-converting</span>, visually striking landing pages using cutting-edge technologies.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
        <a
          href="https://wa.link/zlze49"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#4b92f6] rounded-xl text-base sm:text-lg md:text-xl font-semibold overflow-hidden transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span className="absolute inset-0 w-full h-full bg-[#4b92f6] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Let’s Talk
          </span>
          <svg
            className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NeedofSp;