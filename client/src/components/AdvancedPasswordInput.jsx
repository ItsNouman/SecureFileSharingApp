import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const AdvancedPasswordInput = ({seePassword, setSeePassword, filePassword, setFilePassword, idValue, placeValue}) => {
  return (
    <div className="mb-6 w-full">
  <label
    htmlFor={idValue}
    className="font-medium text-white"
  >
    Set File Password
  </label>

  <div className="relative">
    <input
      required
      type={seePassword ? "text" : "password"}
      placeholder={placeValue}
      value={filePassword}
      onChange={(e) => setFilePassword(e.target.value)}
      id={idValue}
      className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    {seePassword ? (
      <FaRegEyeSlash
        className="text-xl absolute right-4 top-3.5 text-gray-600 cursor-pointer"
        onClick={() => setSeePassword(!seePassword)}
      />
    ) : (
      <FaRegEye
        className="text-xl absolute right-4 top-3.5 text-gray-600 cursor-pointer"
        onClick={() => setSeePassword(!seePassword)}
      />
    )}
  </div>
</div>

  );
};

export default AdvancedPasswordInput;
