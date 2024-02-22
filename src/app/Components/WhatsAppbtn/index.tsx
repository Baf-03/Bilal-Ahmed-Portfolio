'use client'
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const whatsAppHandler =()=>{
        window.open('https://wa.link/zlze49');
    }
  return (
    <div onClick={whatsAppHandler} className="fixed flex justify-center items-center text-white text-[2rem] md:text-[3rem] bottom-3 right-3 p-2 md:right-9 bg-green-500 md:p-3 rounded-full cursor-pointer">
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppButton;