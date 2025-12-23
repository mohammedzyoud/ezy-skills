import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-5 pt-5 flex justify-between md:justify-around items-center relative shadow pb-4 bg-white text-gray-800">
      {/* Logo */}
      <img className="w-35 h-auto mb-4" src={logo} alt="Logo" />

      {/* Mobile menu toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden focus:outline-none text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop menu links */}
      <div className="hidden md:flex space-x-10">
        <Link className="text-gray-500 hover:text-orange-500 transition" to="/">
          Home
        </Link>
        <Link className="text-gray-500 hover:text-orange-500 transition" to="/services">
          Course Selector
        </Link>
        <Link className="text-gray-500 hover:text-orange-500 transition" to="/courses">
          Courses
        </Link>
        <Link className="text-gray-500 hover:text-orange-500 transition" to="/pricing">
          Pricing
        </Link>
        <Link className="text-gray-500 hover:text-orange-500 transition" to="/faq">
          FAQ
        </Link>
        <Link className="text-gray-500 hover:text-orange-500 transition" to="/contact-us">
          Contact
        </Link>
        <Link className="text-gray-500 hover:text-orange-500 transition" to="/about-us">
          About Us
        </Link>
      </div>

      {/* Desktop action buttons */}
      <div className="hidden md:flex space-x-8">
        <Link
          className="rounded-xl p-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
          to="/login"
        >
          Log in
        </Link>

        <Link
          className="rounded-xl p-3 bg-orange-500 text-white hover:bg-orange-600 transition"
          to="/signup"
        >
          Create Account
        </Link>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-800 lg:hidden flex flex-col items-center py-5 space-y-6">
          {/* Mobile menu links */}
          <Link className="text-white hover:text-orange-500" to="/">
            Home
          </Link>
          <Link className="text-white hover:text-orange-500" to="/services">
            Course Selector
          </Link>
          <Link className="text-white hover:text-orange-500" to="/courses">
            Courses
          </Link>
          <Link className="text-white hover:text-orange-500" to="/pricing">
            Pricing
          </Link>
          <Link className="text-white hover:text-orange-500" to="/faq">
            FAQ
          </Link>
          <Link className="text-white hover:text-orange-500" to="/contact-us">
            Contact Us
          </Link>
          <Link className="text-white hover:text-orange-500" to="/about-us">
            About Us
          </Link>

          {/* Mobile action buttons */}
          <Link
            className="rounded-xl p-3 border-2 border-white text-white hover:bg-white hover:text-black w-3/4 text-center"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="rounded-xl p-3 bg-orange-500 text-white hover:bg-orange-600 w-3/4 text-center"
            to="/signup"
          >
            Create Account
          </Link>
        </div>
      )}
    </nav>
  );
}
