"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reqfields, setFields] = useState(false);
  const [loading, setLoading] = useState("");
  const router = useRouter();
  const submitHandler = async () => {
    if (!email || !password) {
      alert("all fields are required");
      setFields(true);
      return;
    }
    setFields(false);
    const objToSend = {
      email,
      password,
    };
    let loginResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
      objToSend
    );
    if (!loginResponse?.data?.status) {
      alert("try again");
      return;
    }
    localStorage.setItem("token", loginResponse?.data?.token);
    router.push("/dashboard", { scroll: false });
  };
  return (
    <div className="bg-gray-800 h-[100vh] flex flex-col gap-3 justify-center items-center">
      <h1 className="text-[2rem] font-bold ">Login page</h1>
      <div className=" border border-dotted border-red-500 w-[90%] sm:w-[50%] md:w-[30%] flex flex-col items-center py-7 gap-3">
        <div className="w-[80%]">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="name"
            placeholder="Enter Email"
            disabled={
              loading === "Loading" ||
              loading == "You submitted your record successfully"
            }
            className="bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="w-[60%]">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="name"
            placeholder="Enter Password"
            disabled={
              loading === "Loading" ||
              loading == "You submitted your record successfully"
            }
            className="bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
          />
          {reqfields ? (
            <div className="text-red-500 mt-3">all fields are required</div>
          ) : (
            <></>
          )}
        </div>
        <div className="w-[60%] flex justify-center">
          <button className="border border-red-500 p-3" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
