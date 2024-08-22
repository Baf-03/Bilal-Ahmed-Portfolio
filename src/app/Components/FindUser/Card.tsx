"use client";
import Image from "next/image";
import React from "react";

interface props {
  imgurl: string;
  title: string;
}
const Card = ({ imgurl, title }: props) => {
  return (
    <div className="border w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[20vw] flex flex-col justify-center items-center m-auto">
      <div className="w-[100%] h-[15rem] border-2 border-[#3b82f6] relative">
        <Image
          src={imgurl[0]}
          alt="bilal portfolio"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="bg-gray-600 w-[100%] text-center text-[1.5rem]">
        {title}
      </div>
    </div>
  );
};

export default Card;
