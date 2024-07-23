// components/BackButton.js
import Link from "next/link";
import React from "react";

export default function BackButton({ to }) {
  return (
    <Link
      href={to}
      className="inline-flex items-center w-12 h-12 md:w-16 md:h-16 justify-center border-2 border-black text-black font-semibold rounded-full hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
    >
      <svg
        className="w-6 h-6 md:w-8 md:h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 5.5L14 4l-8 8 8 8 1.5-1.5L9 12z" />
      </svg>
    </Link>
  );
}
