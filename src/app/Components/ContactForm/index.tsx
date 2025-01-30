"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      alert("Please enter all fields");
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

  return (
    <div id="connect" className="z-[2]">
      <h1 className="backgroundimage text-center text-2xl md:text-3xl font-bold pt-9">
        Contact Us
      </h1>
      <div className="w-[90%] md:w-[80%] flex flex-col sm:flex-row gap-3  mb-[50px] bg-gray-800 p-8 m-auto mt-3 rounded-lg shadow-lg ">
        <section className="flex flex-col items-center w-[100%] sm:w-[50%] gap-5">
          <div className="w-[20%] ">
            <Image
              src="https://eiharold.com/wp-content/uploads/2022/02/icon-chat.png"
              alt="bilal portfolio"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
          <h2 className="text-[1.5rem] 3xl:text-[2.5rem]  font-bold ">
            Let <span className="text-[#3b82f6]">{"'s chat "}</span>?
          </h2>
          <p className="text-center text-gray-300 sm:w-[80%] 3xl:text-[1.5rem] ">
            Did you like my work? Do you want to hire a service, make a proposal
            or send me feedback? Contact! You can use the form or speak via
            WhatsApp.
          </p>
          <a
            href="https://wa.link/zlze49"
            target="_blank"
            className="w-[200px] border border-[#3b82f6] bg-[#3b82f6] hover:bg-[#2563eb] flex justify-center items-center  p-3 rounded-lg cursor-pointer lg:text-[1rem] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out 3xl:text-[1.5rem] text-center"
          >
            Discuss on Whatsapp
          </a>
        </section>
        <section className="flex gap-3 flex-col w-[100%] sm:w-[50%] p-3 items-center justify-center">
        <h1 className="backgroundimage text-center text-xl md:text-2xl font-bold pt-9">
            Contact Form
          </h1>
          <div className="w-[100%] 3xl:text-[1.5rem] ">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter Name"
              disabled={
                loading === "Loading" ||
                loading === "You submitted your record successfully"
              }
              className="block bg-transparent w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] "
            />
          </div>

          <div className="w-[100%]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Email"
              disabled={
                loading === "Loading" ||
                loading === "You submitted your record successfully"
              }
              className="block bg-transparent w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] "
            />
          </div>

          <div className="w-[100%]">
            <textarea
              onChange={(e) => setTextarea(e.target.value)}
              name="message"
              placeholder="Enter text..."
              className="w-full h-24 px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] bg-transparent  resize-none"
              required
              disabled={
                loading === "Loading" ||
                loading === "You submitted your record successfully"
              }
            ></textarea>
          </div>
          {emailError && <div className="text-[#f87171]">{emailError}</div>}
          <button
            onClick={submitHandler}
            className="w-[200px] border bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] flex justify-center items-center  p-3 rounded-lg cursor-pointer lg:text-[1rem] 3xl:text-[1.5rem] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
            disabled={
              loading === "Loading" ||
              loading === "You submitted your record successfully"
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