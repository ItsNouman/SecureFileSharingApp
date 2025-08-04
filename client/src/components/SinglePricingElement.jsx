import React from "react";
import { ImCheckboxChecked } from "react-icons/im";

const SinglePricingElement = ({ planName, price, features, color }) => {
  return (
    <div
      className={`w-full max-w-sm p-6 rounded-2xl shadow-md text-white ${color} transition-transform hover:scale-105 duration-300`}
    >
      <h5 className="mb-4 text-2xl font-extrabold text-center">
        {planName} Plan
      </h5>

      <div className="flex justify-center items-baseline mb-4">
        <span className="text-2xl font-semibold">₹</span>
        <span className="text-5xl font-bold">{price}</span>
      </div>

      <ul className="space-y-4 my-6 text-sm">
        <li className="flex items-center gap-3">
          <ImCheckboxChecked className="text-green-200" />
          <span>{features[0]} Files Monthly</span>
        </li>
        <li className="flex items-center gap-3">
          <ImCheckboxChecked className="text-green-200" />
          <span>Max {features[1]}</span>
        </li>
        <li className="flex items-center gap-3">
          <ImCheckboxChecked className="text-green-200" />
          <span>Max Speed {features[2]}</span>
        </li>
      </ul>

      <button
        type="button"
        className="w-full py-2.5 px-5 text-white bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition duration-200"
      >
        Choose Plan
      </button>
    </div>
  );
};

export default SinglePricingElement;
