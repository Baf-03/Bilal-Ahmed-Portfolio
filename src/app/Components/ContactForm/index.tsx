'use client'
import React, { useState } from 'react'

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
        await fetch(`https://formsubmit.co/ajax/${process.env.email}`, {
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
    <div className="w-[90%] md:w-[50%] flex flex-col gap-3 text-black mb-[200px]">
         <h2 className="backgroundimage text-[2rem] text-center  md:text-[3rem] font-bold">
       05. Contact Us
      </h2>
    <div>
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
    <div>
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

    <div>
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
      className="text-black border bg-blue-gray-100 cursor-not-allowed"
      onClick={submitHandler}
      disabled={
        loading === "Loading" ||
        loading == "You submitted your record successfully"
      }
    >
      {loading}
    </button>
  </div>
  )
}

export default ContactForm