import React from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#191716] w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full max-w-[1600px] mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Logo + Links */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            <Link to="/" className="flex items-center space-x-3">
              <img src={Logo} width={90} height={90} alt="SecureShare Logo" />
            </Link>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white">
              {[
                { to: "/", label: "Home" },
                { to: "/app", label: "Send File" },
                { to: "/download", label: "File Download" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `text-base max-sm:text-sm transition-colors ${
                        isActive
                          ? "text-white font-bold underline"
                          : "hover:underline text-white"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div
            id="contact"
            className="bg-[#22201f] rounded-xl p-6 shadow-md lg:w-2/3"
          >
            <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Contact Info */}
              <div className="flex flex-col gap-3 text-white">
                <p>
                  <span className="font-semibold text-[#CBA135]">Email:</span>{" "}
                  itsnouman.dev@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-[#CBA135]">Phone:</span>{" "}
                  +91 9003800172
                </p>
                <p className="text-gray-400 text-sm">
                  Our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Form */}
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#CBA135]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#CBA135]"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#CBA135]"
                ></textarea>
                <button
                  type="button"
                  className="w-full py-2 bg-[#CBA135] text-white font-semibold rounded-md hover:bg-[#b08f2f] transition"
                >
                  Send Message
                </button>
              </form>

            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300 dark:border-gray-600" />

        {/* Copyright */}
        <p className="text-center text-sm md:text-base text-blue-500 dark:text-gray-400 font-semibold">
          © 2024{" "}
          <Link to="/" className="hover:underline font-bold text-white">
            SecureShare™
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
