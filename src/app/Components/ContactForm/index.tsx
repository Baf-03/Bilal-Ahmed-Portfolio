"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = ({ language }:any) => {
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
      setEmailError(language["email_error"]);
      return false;
    }
  };

  const submitHandler = async (e: any) => {
    if (!name || !email || !textarea) {
      alert(language["fill_all_fields"]);
      return;
    }
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }
    setLoading(language["loading"]);
    
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
        setLoading(language["submitted_successfully"]);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div id="connect" className="z-[2]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-gradient mt-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {language["get_in_touch"]}
        </h2>
      </motion.div>
      <div className="w-[90%] md:w-[80%] flex flex-col sm:flex-row gap-3  mb-[50px]  p-8 m-auto mt-3 rounded-lg shadow-lg ">
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
            {language["lets_chat"]}
          </h2>
          <p className="text-center  sm:w-[80%] 3xl:text-[1.5rem] ">
            {language["contact_description"]}
          </p>
          <a
            href="https://wa.link/zlze49"
            target="_blank"
            className="w-[200px] border border-[#3b82f6] bg-[#3b82f6] hover:bg-[#2563eb] flex justify-center items-center  p-3 rounded-lg cursor-pointer lg:text-[1rem] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out 3xl:text-[1.5rem] text-center"
          >
            {language["discuss_on_whatsapp"]}
          </a>
        </section>
        <section className="flex gap-3 flex-col w-[100%] sm:w-[50%] p-3 items-center justify-center">
          <h1 className="backgroundimage text-center text-xl md:text-2xl font-bold pt-9">
            {language["contact_form"]}
          </h1>
          <div className="w-[100%] 3xl:text-[1.5rem] ">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder={language["enter_name"]}
              disabled={
                loading === language["loading"] ||
                loading === language["submitted_successfully"]
              }
              className="block bg-transparent w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] "
            />
          </div>

          <div className="w-[100%]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder={language["enter_email"]}
              disabled={
                loading === language["loading"] ||
                loading === language["submitted_successfully"]
              }
              className="block bg-transparent w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] "
            />
          </div>

          <div className="w-[100%]">
            <textarea
              onChange={(e) => setTextarea(e.target.value)}
              name="message"
              placeholder={language["enter_message"]}
              className="w-full h-24 px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-[#3b82f6] bg-transparent  resize-none"
              required
              disabled={
                loading === language["loading"] ||
                loading === language["submitted_successfully"]
              }
            ></textarea>
          </div>
          {emailError && <div className="text-[#f87171]">{emailError}</div>}
          <button
            onClick={submitHandler}
            className="w-[200px] border bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] flex justify-center items-center  p-3 rounded-lg cursor-pointer lg:text-[1rem] 3xl:text-[1.5rem] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
            disabled={
              loading === language["loading"] ||
              loading === language["submitted_successfully"]
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
