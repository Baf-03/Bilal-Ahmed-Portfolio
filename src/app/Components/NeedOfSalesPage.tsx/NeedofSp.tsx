import Image from "next/image";
import React from "react";

const NeedofSp = () => {
  return (
    <div className="text-black w-[95vw] p-2 sm:p-8 sm:w-[80vw] md:w-[65vw] flex flex-wrap justify-center gap-[3%] items-center bg-red-100 mb-12 rounded-2xl">
      <div className="w-[25%] sm:w-[20%] md:w-[20%] lg:w-[10%] mt-4 sm:mt-0">
        <Image
          src="https://eiharold.com/wp-content/uploads/2022/02/icon-lancamento.png"
          alt="bilal portfolio"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
      <div className="w-[100%] lg:w-[60%] p-2 sm:p-7 flex flex-col gap-1">
        <h2 className="font-bold text-[1.5rem] mt-3 sm:mt-0 sm:text-[2rem]">
          Are you in need of a <span className="text-red-500">sales page</span>{" "}
          ?
        </h2>
        <p className="italic">
          Are you going to launch a product? Do you want to promote an online
          course or event?
        </p>
        <p className="mt-4">
          Youre in the right place! My{" "}
          <span className="font-bold">specialty</span> is creating{" "}
          <span className="text-red-500 font-bold">attractive</span> landing
          pages with{" "}
          <span className="text-red-500 font-bold">
            a high conversion rate{" "}
          </span>
          , using the main and most current technologies on the market.
        </p>
      </div>

      <a
        href="https://wa.link/zlze49"
        target="_blank"
        className="w-[200px] bg-red-500  flex justify-center items-center  text-white p-2 rounded-2xl cursor-pointer lg:text-[1.5rem] my-5 sm:my-0 hover:bg-gray-300 hover:text-red-500 transition-colors duration-200 ease-in-out "
      >
        lets talk
      </a>
    </div>
  );
};

export default NeedofSp;
