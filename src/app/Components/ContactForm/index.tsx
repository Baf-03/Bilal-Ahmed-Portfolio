"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [loading, setLoading] = useState("Submit");
  const submitHandler = async (e: any) => {
    if (!name || !email || !textarea) {
      alert("enter all fields");
      return;
    }
    setLoading("Loading");
    e.preventDefault();
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
    <div id="connect">
      <h2 className="backgroundimage text-[2rem] text-center  md:text-[3rem] font-bold">
        05. Contact Us
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
              className="bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="w-[100%]">
            {" "}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Email"
              disabled={
                loading === "Loading" ||
                loading == "You submitted your record successfully"
              }
              className="bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
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
