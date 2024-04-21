"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [loading, setLoading] = useState("Submit");
  const [emailError, setEmailError] = useState('');


  const validateEmail = (email: string): boolean => {
    if (emailRegex.test(email)) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Please enter a valid email address.');
      return false;
    }
  };



  const submitHandler = async (e: any) => {
    if (!name || !email || !textarea) {
      alert("enter all fields");
      return;
    }
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }
    setLoading("Loading");
    
    await fetch(`https://formsubmit.co/ajax/bilalahmedfarooqi03@gmail.com`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        message: textarea,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading("You submitted your record successfully");
      })
      .catch((error) => console.log(error.message));
  };
  // &apos;
  return (
    <div id="connect" className="z-[10000]">
      <h2 className="backgroundimage text-[2rem] text-center  md:text-[3rem] font-bold">
      Contact Us
      </h2>
      <div className="w-[90%] md:w-[80%] flex flex-col sm:flex-row gap-3 text-black mb-[50px] border border-dotted border-red-500 p-5 m-auto mt-3 rounded-lg">
        <section className=" flex flex-col items-center w-[100%] sm:w-[50%] gap-3">
          <div className="w-[20%] ">
            <Image
              src="https://eiharold.com/wp-content/uploads/2022/02/icon-chat.png"
              alt="bilal portfolio"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
          <h2 className="text-[1.5rem] font-bold">
            Let <span className="text-red-500">&apos;s chat </span>?
          </h2>
          <p className="text-center sm:w-[80%]">
            Did you like my work? Do you want to hire a service, make a proposal
            or send me feedback? Contact! You can use the form or speak via
            WhatsApp
          </p>
          <a
            href="https://wa.link/zlze49"
            target="_blank"
            className="w-[200px] border  bg-red-500 border-black flex justify-center items-center  text-white p-2 rounded-lg cursor-pointer lg:text-[1rem] my-5 sm:my-0"
          >
            Discuss on Whatsapp
          </a>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </section>
        <section className="flex gap-3 flex-col w-[100%] sm:w-[50%] p-3 items-center justify-center">
          <h2 className="text-[1.5rem] font-bold text-center sm:text-start">Contact Form</h2>
          <div className="w-[100%]">
            
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter Name"
              disabled={
                loading === "Loading" ||
                loading == "You submitted your record successfully"
              }
              className="block bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
          </div>
          
          <div className="w-[100%]" >
            {" "}
            <input
              onChange={(e) => setEmail(e.target.value)}
              // type="email"
              name="email"
              placeholder="Enter Email"
              disabled={
                loading === "Loading" ||
                loading == "You submitted your record successfully"
              }
              className="block bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="w-[100%]">
            <textarea
              onChange={(e) => setTextarea(e.target.value)}
              name="message"
              placeholder="Enter text..."
              className="w-[100%] h-24 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500 bg-gray-100 resize-none"
              required
              disabled={
                loading === "Loading" ||
                loading == "You submitted your record successfully"
              }
            ></textarea>
          </div>
           {emailError && <div className="text-red-500">{emailError}</div>}
          <button
            onClick={submitHandler}
            className="w-[200px] border  bg-red-500 border-black flex justify-center items-center  text-white p-2 rounded-lg cursor-pointer lg:text-[1rem] my-5 sm:my-0"
            disabled={
              loading === "Loading" ||
              loading == "You submitted your record successfully"
            }
          >
            {loading}
          </button>

          
            
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
