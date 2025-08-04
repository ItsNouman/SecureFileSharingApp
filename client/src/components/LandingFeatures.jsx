import React from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { RiShareLine } from "react-icons/ri";

const features = [
  {
    icon: <MdOutlineSecurity className="text-5xl text-white" />,
    title: "High Security",
    desc: "Strong encryption, secure authentication, zero-trust architecture, and regular audits ensure top-level protection.",
    bg: "bg-blue-500",
  },
  {
    icon: <IoIosSpeedometer className="text-5xl text-white" />,
    title: "Speed Transfer",
    desc: "Quick and optimized protocols ensure fast file transfers with minimal delay, ideal for large and time-sensitive files.",
    bg: "bg-teal-400",
  },
  {
    icon: <RiShareLine className="text-5xl text-white" />,
    title: "Easy Share",
    desc: "An intuitive interface makes it seamless to send documents, images, or videos with just a few clicks.",
    bg: "bg-purple-600",
  },
];

const LandingFeatures = () => {
  return (
    <div className="text-center px-6 py-14 max-w-7xxl mx-auto bg-[#191716]">
      <h2 className="text-5xl font-bold mb-4 max-sm:text-3xl">
        People use <span className="text-blue-500">SecureShare</span> for
      </h2>
      <p className="text-xl font-bold text-gray-600 max-sm:text-lg">
        Send your files and photos <span className="text-blue-500 uppercase">SECURELY</span> with SecureShare{" "}
        <span className="text-blue-500 uppercase">ANYTIME</span> and{" "}
        <span className="text-blue-500 uppercase">ANYWHERE</span> in the world.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bg} text-white p-8 rounded-xl shadow-md hover:scale-105 transition-transform duration-300`}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingFeatures;
