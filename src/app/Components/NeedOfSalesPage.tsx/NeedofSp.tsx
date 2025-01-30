import Image from "next/image";
import React from "react";
import rocket from "../../../../public/rocket.png"
const NeedofSp = () => {
  return (
    <div className="text-black w-[95vw] p-4 sm:p-8 sm:w-[80vw] md:w-[70vw]  flex flex-wrap xl:flex-nowrap justify-center gap-[3%] lg:gap-0 items-center bg-gradient-to-r from-[#a0bff1] to-[#4b92f6] mb-12 rounded-2xl shadow-lg">
      <div className="w-[45%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[15%] mt-4 sm:mt-0 ">
        <Image
          src={rocket}
          alt="bilal portfolio"
          layout="responsive"
          width={500}
          height={200}
        />
      </div>
      <div className="w-[100%] lg:w-[80%] xl:w-[60%] p-2 sm:p-7 flex flex-col gap-1 text-center lg:text-left 3xl:text-[1.5rem]">
        <h2 className="font-bold text-[1.5rem] mt-3 sm:mt-0 sm:text-[2rem] text-gray-800 3xl:text-[3.4rem] ">
          Are you in need of a <span className="text-white">landing page</span>{" "}
          ?
        </h2>
        <p className="italic text-white">
          Are you going to launch a product? Do you want to promote an online
          course or event?
        </p>
        <p className="mt-4 text-white">
          You’re in the right place! My{" "}
          <span className="font-bold">specialty</span> is creating{" "}
          <span className="text-white font-bold">attractive</span> landing
          pages with{" "}
          <span className="text-white font-bold">
            a high conversion rate{" "}
          </span>
          , using the main and most current technologies on the market.
        </p>
      </div>

      <a
        href="https://wa.link/zlze49"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[200px] bg-white flex justify-center items-center text-[#3b82f6] p-3 rounded-2xl cursor-pointer lg:text-[1.5rem] my-5 sm:my-0 hover:bg-[#3b82f6] hover:text-white transition-colors duration-300 ease-in-out shadow-md transform hover:scale-105"
      >
        Let’s talk
      </a>
    </div>
  );
};

export default NeedofSp;
