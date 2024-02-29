"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Dropzone from "../Components/AdminDashboard/FileUpload";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const AuthUser = async () => {
    try {
      const token_local_storage = localStorage.getItem("token");
      if (!token_local_storage) {
        router.push("/Login", { scroll: false });
        return;
      }
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_local_storage}`,
      };
      const authUser = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard`,
        {},
        { headers }
      );
      
      if (!authUser?.data?.status) {
        localStorage.removeItem("token");
        router.push("/Login", { scroll: false });

        return;
      }
      setLoading(false);
    } catch (err: any) {
      console.log("err", err.message);
    }
  };
  useEffect(() => {
    AuthUser();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="w-[100%] border border-black flex flex-col items-center  min-h-[100vh] ">
          <h1 className="font-bold text-[2rem] capitalize my-4">Add Project</h1>
            <Dropzone/>
        </div>
      )}
    </>
  );
};

export default Dashboard;
