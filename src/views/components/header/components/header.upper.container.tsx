"use client";

import { useRouter } from "next/navigation";
// components/header.upper.container.tsx
import React from "react";

export default function UpperContainer() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between  px-6 py-3 text-white">
      {/* Logo */}
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex items-center gap-2"
      >
        <img
          src="/logo.png" // Replace with your logo's file path
          alt="GameManiac Logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-bold">GameManiac</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-lg bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 outline-none"
        />
        <button className="rounded-lg bg-gray-700 p-2 hover:bg-gray-600">
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Right-Side Actions */}
      <div className="flex items-center gap-6">
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <span>🌙</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-gray-600 peer-focus:ring-2 peer-focus:ring-gray-500 transition duration-300">
              <div className="w-5 h-5 bg-white rounded-full transform peer-checked:translate-x-5 transition-transform duration-300"></div>
            </div>
          </label>
          <span>☀️</span>
        </div>

        {/* User Auth */}
        <button className="rounded-lg bg-gray-700 px-4 py-2 hover:bg-gray-600">
          Masuk/Daftar
        </button>

        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <span>[supposely flag]</span>
          <select
            className="bg-gray-700 text-white rounded-lg px-2 py-1 outline-none hover:bg-gray-600"
            defaultValue="id"
          >
            <option value="id">ID-ID</option>
            <option value="en">EN-US</option>
          </select>
        </div>
      </div>
    </div>
  );
}
