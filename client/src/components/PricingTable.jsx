import React from "react";
import SinglePricingElement from "./SinglePricingElement";

const pricingFeatures = {
  easy: [10, "10MB", "100KB"],
  standard: [100, "1GB", "10MB"],
  professional: ["Unlimited", "100GB", "100MB"],
};

const PricingTable = () => {
  return (
    <div className="text-center px-6 py-14 max-w-full mx-auto bg-[#C7C1BE]">
      <h2 className="text-5xl text-black font-bold mb-4 max-sm:text-3xl">
        Choose the plan for <span className="text-blue-500">you</span>
      </h2>
      <p className="text-xl text-black font-bold text-gray-600 max-sm:text-lg">
        Pricing model made for you so you can enjoy all the benefits!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <SinglePricingElement
          planName="Free"
          price="0"
          features={pricingFeatures.easy}
          color="bg-blue-500"
        />
        <SinglePricingElement
          planName="Standard"
          price="20"
          features={pricingFeatures.standard}
          color="bg-teal-400"
        />
        <SinglePricingElement
          planName="Professional"
          price="100"
          features={pricingFeatures.professional}
          color="bg-purple-600"
        />
      </div>
    </div>
  );
};

export default PricingTable;
