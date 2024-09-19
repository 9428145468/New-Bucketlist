// components/Navbar.tsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-teal/30 border border-white/30 shadow-xl rounded-full mx-4 my-4 md:mx-8 md:my-6 p-2 py-4 flex justify-between items-center">
      <div className="ml-4">
        <img src="../images/b_logo.jpeg" alt="URBUCKET Logo" className="h-8 w-auto" />
      </div>

      <div className="hidden md:flex items-center gap-6 mr-4">
        <a
          href="/bucketlist"
          className="text-black  hover:text-opacity-50 uppercase font-medium transition"
        >
          My Bucket
        </a>
        <a
          href="/add"
          className="text-black  hover:text-opacity-50 uppercase font-medium transition"
        >
          Add Wish
        </a>
        <a
          href="/login"
          className="text-black  hover:text-opacity-50 uppercase font-medium transition"
        >
          Login
        </a>
      </div>

      <button className="md:hidden text-[#24291C] mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
}