import React from "react";
import { TypeAnimation } from "react-type-animation";
import landingvideo from "../assets/landingvideo.mp4";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen font-sans flex items-center justify-center px-6 py-10">

      {/* 🔹 Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={landingvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* 🔹 Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* 🔸 Foreground Content */}
      <div className="relative z-10 flex flex-row-reverse items-center justify-between w-full max-w-7xl flex-wrap gap-10 text-white">

        {/* Right Side - Image */}


        {/* Left Side - Text + Buttons */}
        <div className="flex-1 text-left">
          <h4 className="text-2xl text-gray-100 mb-2">Let's move to the</h4>

          <TypeAnimation
            sequence={["SecureShare.", 2000, "a Secure Platform.", 2000, "", 500]}
            wrapper="h1"
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: "#D4E4BC" }} // light green for contrast
            speed={50}
            repeat={Infinity}
          />

          <h4 className="text-2xl text-gray-200 mb-6">
            Send your files and photos{" "}
            <span className="uppercase text-white">securely</span> with SecureShare{" "}
            <span className="uppercase text-white">anytime</span> and{" "}
            <span className="uppercase text-white">anywhere</span> in the world.
          </h4>

          <div className="flex gap-4 flex-wrap mt-6">
            <SignedOut>
              <SignUpButton className="text-white bg-blue-500 border-2 border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 py-3 rounded-full">
                Create Account
              </SignUpButton>
              <SignInButton className="text-blue-500 bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 py-3 rounded-full">
                Login Now
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Link
                to="/app"
                className="text-white bg-blue-500 border-2 border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 py-3 rounded-full"
              >
                Get Started
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
}
