"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa6";
import { CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

type OnDropFunction = (acceptedFiles: File[]) => void;
const DynamicRoutePage = () => {
  const { slugs } = useParams<any>();
  const [data, setData] = useState<any>("");
  const router = useRouter();
  console.log(slugs[0]);
  const AuthUser = async () => {
    try {
      const token_local_storage = localStorage.getItem("token");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_local_storage}`,
      };

      const getUser = await axios.post(
        "http://localhost:5000/api/dashboard",
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

  const LoadProject = async () => {
    const token_local_storage = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token_local_storage}`,
    };
    const getUser = await axios.post(
      "http://localhost:5000/api/findprojectbyid",
      { id: slugs[0] },
      { headers }
    );
    console.log("what is", getUser?.data?.data);
    setData(getUser?.data?.data);
    console.log("hemlo", getUser?.data?.data);
    setName(getUser?.data?.data?.name);
    setprojectImages(getUser?.data?.data?.project_images);
    setprojectLink(getUser?.data?.data?.live_link);
    setLiveLink(getUser?.data?.data?.project_link);
    setImgPr(getUser?.data?.data?.project_images);
    setshortDetail(getUser?.data?.data?.short_detail);
    setprojectImages(getUser?.data?.data?.project_images);
    setUploadedFiles(getUser?.data?.data?.project_images);
  };

  useEffect(() => {
    if (slugs[0]) {
      LoadProject();
    }
  }, []);

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [imgPr, setImgPr] = useState<string[]>([]);
  const [name, setName] = useState<any>("");
  const [shortDetail, setshortDetail] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [projectLink, setprojectLink] = useState("");
  let [projectImages, setprojectImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleDrop: OnDropFunction = useCallback((acceptedFiles) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeFile = (index: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/*": ["jpeg", "jpg", "png", "gif", "bmp", "tiff", "svg"],
    },
  });

  useEffect(() => {
    console.log(projectImages);
  }, [projectImages]);

  const handleProjectSubmit = async () => {
    try {
      setLoading(true);
      const token_local_storage = localStorage.getItem("token");
      if (!token_local_storage) {
        router.push("/Login", { scroll: false });
        setLoading(false);

        return;
      }
      if (!slugs[0] || !name || !shortDetail || !liveLink || !projectLink) {
        alert("all fields are required");
        setLoading(false);
        return;
      }

      //----------------------sending-image---------------------------------
      const formData = new FormData();
      if (!uploadedFiles?.length) {
        return;
      }
      uploadedFiles.forEach((file) => {
        // (file?.slice(0, 4) == "http")? <></> : (<>{console.log("howa",file)}formData.append("image", file)</>);
        formData.append("image", file)
      });
      const response = await axios.post(
        "http://localhost:5000/api/uploadimage",
        formData ,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("cool",response?.data)
      setImgPr(prevImages => [...prevImages, response?.data?.data]);
      setprojectImages(prevImages => [...prevImages, response?.data?.data]);
      console.log(response?.data?.data);

      if (!response?.data?.data) {
        alert("something went wrong From Ourside!");
        return;
      }
      //-----------------------using data got from sended image--------------

      const objToSend = {
        name,
        shortDetail,
        liveLink,
        projectLink,
        projectImages: response?.data?.data,
        id:slugs[0]
      };
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_local_storage}`,
      };
      const authUser = await axios.post(
        "http://localhost:5000/api/findprojectbyidandupdate",
        objToSend,
        { headers }
      );
      if (!authUser?.data?.status) {
        alert("try again");
        setLoading(false);
        return;
      }
      console.log("aya data", authUser);
      handleClick();
      setLoading(false);
      setName("");
      setprojectImages([]);
      setprojectLink("");
      setLiveLink("");
      setImgPr([]);
      setshortDetail("");
      setUploadedFiles([]);
    } catch (err: any) {
      console.log(err.message);
      setLoading(false);
    }
  };
  return (
    <div className={`${styles.slider} slider min-h-[100vh] w-[80%] m-auto`}>
      {data ? (
        <div className="w-[90%] m-auto">
          <div className=" cursor-pointer ">
            <div {...getRootProps()} className="border border-red-500">
              <input {...getInputProps()} className="border text-red-400 " />

              <div className="relative p-5  h-[20rem] flex flex-col items-center m-auto w-[100%]">
                <div className="text-[2rem] text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <FaUpload />
                </div>
                <div className="relative z-50">
                  <p className="">
                    Drag n drop some images here, or click to select images
                  </p>
                </div>
              </div>

              <div className="flex w-[20vw] overflow-scroll gap-2 m-auto">
                <>
                  {uploadedFiles.map((file, index) => {
                    console.log("whatis", file);
                    return (
                      <div key={file.name + index} className="w-fit">
                      {file && (file as any).slice(0, 4) == "http" ? (
                          <img
                            src={`${file}`}
                            alt={`Preview ${file.name}`}
                            className="w-[100%]"
                          />
                        ) : (
                          <img
                            src={URL?.createObjectURL(file)}
                            alt={`Preview ${file.name}`}
                            className="w-[100%]"
                          />
                        )}

                        <p>{index + 1}</p>
                        <button onClick={() => removeFile(index)}>
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </>
              </div>
            </div>

            
          </div>
          <div className="mt-5 flex flex-col gap-3 text-black">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              // disabled={
              //   loading === "Loading" ||
              //   loading == "You submitted your record successfully"
              // }
              className="bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
            <input
              onChange={(e) => setprojectLink(e.target.value)}
              type="text"
              name="name"
              value={projectLink}
              placeholder="Enter Github Link"
              // disabled={
              //   loading === "Loading" ||
              //   loading == "You submitted your record successfully"
              // }
              className="bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
            <input
              onChange={(e) => setLiveLink(e.target.value)}
              type="text"
              name="live link"
              value={liveLink}
              placeholder="Enter Live url"
              // disabled={
              //   loading === "Loading" ||
              //   loading == "You submitted your record successfully"
              // }
              className="bg-gray-300 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
            <div className="w-[100%]">
              <textarea
                onChange={(e) => setshortDetail(e.target.value)}
                name="message"
                value={shortDetail}
                placeholder="Enter Short detail about your project..."
                className="w-[100%] h-24 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500 bg-gray-100 resize-none"
                required
                //   disabled={
                //     loading === "Loading" ||
                //     loading == "You submitted your record successfully"
                //   }
              ></textarea>
            </div>
            <button
              onClick={handleProjectSubmit}
              className="border border-red-500 p-3 mt-3 rounded-lg text-red-500"
            >
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Project added Successfully"
              />
              {loading ? (
                <CircularProgress color="inherit" />
              ) : (
                <div>Submit Project Final</div>
              )}
            </button>
          </div>
        </div>
      ) : (
        <>loading</>
      )}
      {/* */}
    </div>
  );
};

export default DynamicRoutePage;
