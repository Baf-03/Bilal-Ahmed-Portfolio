"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../Components/FindUser/Card";
import Link from "next/link";

const FindUserAdmin = () => {
  const [findUser, setFindUser] = useState("");
  const [respData, setRespData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [cardloading, setCardLoading] = useState(false);
  const router = useRouter();

  const AuthUser = async () => {
    try {
      const token_local_storage = localStorage.getItem("token");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_local_storage}`,
      };
      //idhar dashboard ke api lage hae confuse mat hona just for authorization k liyae ke hae
      const getUser = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard`,
        {},
        { headers }
      );
      if (!getUser?.data?.status) {
        localStorage.removeItem("token");
        router.push("/Login", { scroll: false });
        return;
      }
      setLoading(false);
    } catch (err: any) {
      console.log(err.message);
      alert("Something is wrong on ourside Refresh Page or try again later!");
    }
  };

  useEffect(() => {
    const token_local_storage = localStorage.getItem("token");
    if (!token_local_storage) {
      router.push("/Login", { scroll: false });
      return;
    }
    AuthUser();
  }, []);
  const submitHandler = async () => {
    setCardLoading(true);
    const token_local_storage = localStorage.getItem("token");
    try {
      if (!findUser) {
        alert("required fields are missing");
        return;
      }
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_local_storage}`,
      };
      const getUser = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/finduser`,
        { projectName: findUser },
        { headers }
      );
      setRespData(getUser?.data?.data);
      setFindUser("");
    } catch (err: any) {
      console.log(err.message);
    }
    setCardLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="w-[100vw] h-[80vh] flex justify-center items-center ">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div className=" min-h-[100vh] flex flex-col gap-5">
          <h2 className="text-[1.5rem] text-center mt-4 lg:mt-8">
            find Project
          </h2>
          <div className="text-black w-[90%] lg:w-[40%] mx-auto">
            <input
              onChange={(e) => setFindUser(e.target.value)}
              type="text"
              name="name"
              value={findUser}
              placeholder="Enter Name"
              // disabled={
              //   loading === "Loading" ||
              //   loading == "You submitted your record successfully"
              // }
              className="bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="border p-3 mt-3 border-red-500 "
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>

          {respData ? (
            <div className="w-[90%] flex flex-wrap gap-3 mt-3 m-auto sm:justify-center md:justify-start ">
              {respData.map((element, index) => {
                return (
                  <Link
                    key={index}
                    href={`/finduser/single-project/${element?._id}`}
                    onClick={() => setLoading(true)}
                  >
                    <Card
                      key={index}
                      imgurl={element?.project_images}
                      title={element?.name}
                    />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-red-500 text-center">
              {" "}
              {cardloading ? (
                <div className="w-[100vw] h-[80vh] flex justify-center items-center ">
                  <div className="loader"></div>
                </div>
              ) : (
                <>No data Found</>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FindUserAdmin;
