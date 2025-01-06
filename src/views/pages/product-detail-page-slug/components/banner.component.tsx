import { Game, useGameStore } from "@/stores/game.data.store";
import React from "react";

interface BannerProps {
  game: Game | undefined;
  // slug: string;
}

export default function Banner({ game }: BannerProps) {
  // const game = games.find(
  //   (game) => game.id.toLowerCase() === slug.toLowerCase()
  // );

  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-blue-600 text-white p-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <img
          src={game?.image}
          alt={game?.name}
          className="w-20 h-20 rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold">{game?.name}</h1>
        <p className="text-sm mt-2">{game?.publisher}</p>
        <p
          className="text-sm mt-2 text-gray-300"
          dangerouslySetInnerHTML={{ __html: game?.description || "" }}
        />
      </div>
    </div>
  );
}
