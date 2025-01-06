import { useGameStore } from "@/stores/game.data.store";
import React from "react";

interface BannerProps {
  name: string;
  image: string;
  description: string;
  publisher: string;
}

export default function Banner({
  name,
  image,
  description,
  publisher,
}: BannerProps) {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-blue-600 text-white p-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <img
          src={image}
          alt="Mobile Legends Bang Bang"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-sm mt-2">{publisher}</p>
        <p
          className="text-sm mt-2 text-gray-300"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
