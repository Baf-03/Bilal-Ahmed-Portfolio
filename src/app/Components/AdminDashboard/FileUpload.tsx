"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone, DropEvent, FileRejection } from "react-dropzone";
import axios from "axios";
import { FaUpload } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
type OnDropFunction = (acceptedFiles: File[]) => void;

const Dropzone: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [imgPr, setImgPr] = useState<string>("");
  const [name, setName] = useState("");
  const [shortDetail, setshortDetail] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [projectLink, setprojectLink] = useState("");
  const [projectImages, setprojectImages] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  const uploadImages = async () => {
    try {
      const formData = new FormData();
      if (!uploadedFiles?.length) {
        return;
      }
      uploadedFiles.forEach((file) => formData.append("image", file));
      const response = await axios.post(
        "http://localhost:5000/api/uploadimage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImgPr(response?.data?.data?.secure_url);
      setprojectImages(response?.data?.data);
      return true;
    } catch (error:any) {
      console.error("Error uploading images:", error.message);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/*": ["jpeg", "jpg", "png", "gif", "bmp", "tiff", "svg"],
    },
  });

  const handleProjectSubmit = async () => {
    try {
      setLoading(true);
      const token_local_storage = localStorage.getItem("token");
      if (!token_local_storage) {
        router.push("/Login", { scroll: false });
        setLoading(false);

        return;
      }
      if (!name || !shortDetail || !liveLink || !projectLink) {
        alert("all fields are required");
        setLoading(false);
        return;
      }
      const upimages = await uploadImages();
      if (!upimages) {
        alert("images are missing");
        setLoading(false);
        return;
      }
      const objToSend = {
        name,
        shortDetail,
        liveLink,
        projectLink,
        projectImages,
      };
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_local_storage}`,
      };
      const authUser = await axios.post(
        "http://localhost:5000/api/createproject",
        objToSend,
        { headers }
      );
      handleClick();
      setLoading(false);
      setName("");
      setprojectImages("");
      setprojectLink("");
      setLiveLink("");
      setImgPr("");
      setshortDetail("");
      setprojectImages("");
      setUploadedFiles([]);
    } catch (err: any) {
      console.log(err.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className=" cursor-pointer">
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
            {uploadedFiles.map((file, index) => (
              <div key={file.name + index} className="w-fit">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${file.name}`}
                  className="w-[100%]"
                />
                <p>{index + 1}</p>
                <button onClick={() => removeFile(index)}>Remove</button>
              </div>
            ))}
          </div>
        </div>

        {imgPr && (
          <div>
            Uploaded image preview:{" "}
            <img
              src={imgPr}
              alt="Uploaded"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        )}
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
    </>
  );
};

export default Dropzone;
