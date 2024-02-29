"use client";
import Image from "next/image";
import React from "react";

interface props{
    imgurl:string,
    title:string
}
const Card = ({imgurl,title}:props) => {
  return (
    <div className="border w-[95%] m-auto sm:w-[50%] flex flex-col justify-center items-center">
      <div className="w-[50%] ">
        <Image
          src={
            imgurl[0]
          }
          alt="bilal portfolio"
          layout="responsive"
          width={300}
          height={300}
        />
      </div>
      <div className="bg-gray-600 w-[100%] text-center text-[1.5rem]">{title}</div>
    </div>
  );
};

export default Card;
