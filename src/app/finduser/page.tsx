"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../Components/FindUser/Card";
import Link from "next/link";

const FindUserAdmin = () => {
  const [findUser, setFindUser] = useState("");
  const [respData, setRespData] = useState<any[] | null>(null);

  const router = useRouter();

  const AuthUser = async () => {
    try {
      const token_local_storage = localStorage.getItem("token");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_local_storage}`,
      };

      const getUser = await axios.post(
        "https://cyan-tough-sheep.cyclic.app/api/dashboard",
        {},
        { headers }
      );
      if (!getUser?.data?.status) {
        localStorage.removeItem("token");
        router.push("/Login", { scroll: false });
      }
    } catch (err: any) {
      console.log(err.message);
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
        "https://cyan-tough-sheep.cyclic.app/api/finduser",
        { projectName: findUser },
        { headers }
      );
      setRespData(getUser?.data?.data);
      console.log(getUser?.data?.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className=" min-h-[100vh]">
      <h2 className="text-[1.5rem]">find Project</h2>
      <div className="text-black w-[90%] mx-auto">
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
      <div>
        <button
          className="border p-3 mt-3 border-red-500 ms-3"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
      {respData ? (
        <div className="flex flex-col gap-3 mt-3">
          {respData.map((element, index) => {
            return (
              <Link
                key={index}
                href={`/finduser/single-project/${element?._id}`}
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
        <>no data found</>
      )}
    </div>
  );
};

export default FindUserAdmin;
