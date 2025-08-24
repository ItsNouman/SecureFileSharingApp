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
    <div className="relative min-h-screen flex items-center justify-center px-6 font-sans">

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
        </video>
      </div>

      {/* 🔹 Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* 🔹 Centered Foreground Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h4 className="text-lg md:text-xl text-gray-200 mb-4 tracking-wide">
          Welcome to
        </h4>

        <TypeAnimation
          sequence={[
            "SecureShare.",
            2000,
            "Your Secure Platform.",
            2000,
            "",
            500,
          ]}
          wrapper="h1"
          className="text-4xl md:text-6xl font-extrabold mb-6"
          style={{ color: "#ffffff" }}
          speed={50}
          repeat={Infinity}
        />

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Send your files and photos{" "}
          <span className="font-semibold text-white">securely</span> with SecureShare{" "}
          <span className="font-semibold text-white">anytime</span> and{" "}
          <span className="font-semibold text-white">anywhere</span> in the world.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <SignedOut>
            <SignUpButton className="text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out font-medium text-sm px-8 py-3 rounded-full shadow-sm">
              Create Account
            </SignUpButton>
            <SignInButton className="text-blue-600 bg-white border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out font-medium text-sm px-8 py-3 rounded-full shadow-sm">
              Login Now
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              to="/app"
              className="text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out font-medium text-sm px-8 py-3 rounded-full shadow-sm"
            >
              Get Started
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
