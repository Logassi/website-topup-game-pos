import React from "react";

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-blue-600 text-white p-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <img
          src="/images/mobile-legends.png"
          alt="Mobile Legends Bang Bang"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold">Mobile Legends Bang Bang</h1>
        <p className="text-sm mt-2">Moonton | Garena Service</p>
      </div>
    </div>
  );
}
