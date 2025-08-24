import { useState } from "react";
import Logo from "../assets/logo.png";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#C7C1BE] w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 max-sm:flex-col max-sm:gap-y-5">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} width={100} height={230} alt=" Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
          <SignedOut>
            <SignInButton className="text-blue-500 bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-7 py-3 text-center">
              Sign In
            </SignInButton>

            <SignUpButton className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-7 py-3 text-center">
              Sign Up
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-x-2">
              <Link
                to="/app"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-7 py-3 text-center"
              >
                Get Started
              </Link>
              {/* <SignOutButton
              aftersignouturl="/"
              className="text-blue-500 bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-7 py-3 text-center"
            >Sign Out</SignOutButton> */}
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            !isMenuOpen ? "hidden" : ""
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-[#C7C1BE] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#C7C1BE]">
  <li>
    <NavLink
      to="/"
      className={(isActiveObj) =>
        isActiveObj.isActive
          ? "block py-2 px-3 font-bold text-black md:text-blue-800 md:p-0"
          : "block py-2 px-3 text-black rounded hover:text-blue-700 md:p-0"
      }
    >
      Home
    </NavLink>
  </li>

  <li>
  <a
    href="#contact"
    className="block py-2 px-3 text-black rounded hover:text-blue-700 md:p-0"
  >
    Contact
  </a>
</li>

  <li>
    <NavLink
      to="/app"
      className={(isActiveObj) =>
        isActiveObj.isActive
          ? "block py-2 px-3 font-bold text-black md:text-blue-800 md:p-0"
          : "block py-2 px-3 text-black rounded hover:text-blue-700 md:p-0"
      }
    >
      Send File
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/download"
      className={(isActiveObj) =>
        isActiveObj.isActive
          ? "block py-2 px-3 font-bold text-black md:text-blue-800 md:p-0"
          : "block py-2 px-3 text-black rounded hover:text-blue-700 md:p-0"
      }
    >
      File Download
    </NavLink>
  </li>
</ul>


        </div>
      </div>
    </nav>
  );
};

export default Header;
