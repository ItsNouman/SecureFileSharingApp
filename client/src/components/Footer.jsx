import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.msg || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#C7C1BE] w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full max-w-[1600px] mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo + Links */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            <Link to="/" className="flex items-center space-x-3">
              <img src={Logo} width={90} height={90} alt="SecureShare Logo" />
            </Link>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
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
                          ? "text-black font-bold underline"
                          : "hover:underline text-black"
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
          <div id="contact" className="bg-[#C7C1BE] rounded-xl p-6 shadow-md lg:w-2/3">
            <h2 className="text-xl font-bold text-black mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Info */}
              <div className="flex flex-col gap-3 text-black">
                <p>
                  <span className="font-semibold text-black">Email:</span>{" "}
                  itsnouman.dev@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-black">Phone:</span>{" "}
                  +91 9003800172
                </p>
                <p className="text-black-400 text-sm">
                  Our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Form */}
              <form className="flex flex-col gap-3" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#CBA135]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#CBA135]"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  value={form.message}
                  onChange={onChange}
                  required
                  className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#CBA135]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-2 text-white font-semibold rounded-md transition ${
                    loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#CBA135] hover:bg-[#b08f2f]"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300 dark:border-gray-600" />

        {/* Copyright */}
        <p className="text-center text-black text-sm md:text-base font-semibold">
          © 2024{" "}
          <Link to="/" className="hover:underline font-bold text-black">
            SecureShare™
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
