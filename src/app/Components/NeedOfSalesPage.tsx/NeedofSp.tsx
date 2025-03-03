import Image from "next/image";
import React from "react";
import rocket from "../../../../public/rocket.png";
import {motion} from "framer-motion"

const NeedofSp = ({ language }:any) => {
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
        <h2 className="text-xl  md:text-2xl lg:text-3xl font-extrabold text-white leading-[1.7]">
          {language["need_a_stunning_landing_page"]} {/* Dynamic title */}
        </h2>
        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl italic font-light tracking-wide">
          {language["launching_a_product"]} {/* Dynamic description */}
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          {language["specialize_in_high_converting_landing_pages"]} {/* Dynamic description */}
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
          <span className="relative z-10">
            {language["lets_talk"]} {/* Dynamic CTA text */}
          </span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-600 opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </a>
      </div>
    </div>
  );
};

export default NeedofSp;
