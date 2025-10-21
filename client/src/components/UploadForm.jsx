import React, { useState } from "react";
import {
  AdvancedPasswordInput,
  FilePreview,
  ProgressBar,
  CopyToClipboardBtn,
} from "../components";
import axios from "axios";
import { toast } from "react-toastify";
import { z } from "zod";
import {API} from "../api"

const receiversEmailSchema = z.string().email();
const passwordSchema = z
  .string()
  .min(10, "Password field must be valid length and value");

const UploadForm = ({ progress }) => {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [receiverEmail, setReceiverEmail] = useState("");
  const [filePassword, setFilePassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  const allowedExtensions = [
    "pdf", "docx", "doc", "xls", "xlsx", "csv", "txt", "rtf",
    "html", "zip", "mp3", "m4a", "wma", "mpg", "flv", "avi",
    "jpg", "jpeg", "png", "gif", "ppt", "pptx", "wav", "mp4",
    "m4v", "wmv", "avi", "epub",
  ];

  const onFileSelect = (file) => {
    if (file && file.size > 10000000) {
      toast.warn("File size is more than 10MB");
      setErrorMsg("Max file upload size is 10MB");
      return;
    }

    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      toast.warn("File type not allowed");
      setErrorMsg(
        `File type not allowed. Allowed types: ${allowedExtensions.join(", ")}`
      );
      return;
    }

    setErrorMsg(null);
    setFile(file);
  };

  async function generateKey(password, salt, keyLength = 256) {
    const algo = {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: new TextEncoder().encode(salt),
      iterations: 1000,
    };
    const baseKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const aesKey = await crypto.subtle.deriveKey(
      algo,
      baseKey,
      { name: "AES-GCM", length: keyLength },
      true,
      ["encrypt", "decrypt"]
    );

    return aesKey;
  }

  const encryptFile = async (file, password) => {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const key = await generateKey(password, salt);

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encryptedContent = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      await file.arrayBuffer()
    );

    return new Blob([salt, iv, new Uint8Array(encryptedContent)]);
  };

  const upload = async (e) => {
    e.preventDefault();

    if (receiverEmail.length === 0) {
      toast.warn("Please enter value for email");
      return;
    }

    if (!receiversEmailSchema.safeParse(receiverEmail).success) {
      toast.warn("Please enter valid email");
      return;
    }

    if (!passwordSchema.safeParse(filePassword).success) {
      toast.warn(
        "File password must be minimum 10 characters and must be string"
      );
      return;
    }

    if (!hasUpperCase(filePassword)) {
      toast.warn("File password should have at least 1 uppercase character");
      return;
    }

    try {
      const hashedPassword = await hashPassword(filePassword);
      const encryptedFile = await encryptFile(file, filePassword);

      let formData = new FormData();
      formData.append("encryptedFile", encryptedFile);
      formData.append("originalName", file.name);
      formData.append("receiverEmail", receiverEmail);
      formData.append("password", hashedPassword);

      await axios.post(API, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("File successfully uploaded");
    } catch (error) {
      console.log(error);
      toast.error("Error uploading file");
    }
  };

  const hasUpperCase = (str) => {
    return str !== str.toLowerCase();
  };

  const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  return (
    <div className="w-full min-h-screen bg-[#C7C1BE] py-10 px-6 text-gray-800">
      <div className="w-full px-4 md:px-12">
        <div className="text-center text-white text-3xl md:text-4xl font-bold mb-6">
          Send Your File Securely
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label htmlFor="dropzone-file">
            <div className="flex flex-col items-center justify-center h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-gray-100">
              <svg
                className="w-12 h-12 mb-4 text-blue-500"
                fill="none"
                viewBox="0 0 20 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-700">
                Click to upload or{" "}
                <span className="text-blue-500">drag & drop</span>
              </p>
              <p className="text-sm text-gray-500">(Max Size: 10MB)</p>
            </div>
          </label>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </div>

        {file && <FilePreview file={file} removeFile={() => setFile(null)} />}

        {/* Receiver Email */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-black">
            Receiver's Email
          </label>
          <input
            type="email"
            placeholder="Enter Receiver's Email Address"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#CBA135]"
          />
        </div>

    
          <AdvancedPasswordInput
            seePassword={seePassword}
            setSeePassword={setSeePassword}
            filePassword={filePassword}
            setFilePassword={setFilePassword}
            idValue="file-password-encrypt"
            placeValue="Set File Password"
          />
    

        {errorMsg && (
          <div className="text-red-700 bg-red-100 p-4 rounded-lg my-4">
            <strong>Error:</strong> {errorMsg}
          </div>
        )}

        <p className="text-sm text-black mb-4">
          Note: Remember to copy your password and send to the receiver. For
          security reasons, we don’t store passwords.
        </p>

        <div className="flex flex-col items-center">
          {/* Copy Password Button */}
          <CopyToClipboardBtn
            filePassword={filePassword}
            className="bg-[#CBA135] text-white hover:opacity-90 transition"
          />

          {progress === 0 ? (
            <ProgressBar progress={progress} />
          ) : (
            <button
  disabled={!file}
  onClick={(e) => upload(e)}
  className="mt-6 w-1/2 p-3 text-white font-semibold rounded-md
             bg-[#CBA135] hover:bg-[#b08f2f] focus:ring-4 focus:outline-none
             focus:ring-[#d6b654] disabled:opacity-50 disabled:cursor-not-allowed transition"
>
  Send Now
</button>

          )}
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
