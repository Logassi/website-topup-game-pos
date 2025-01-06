"use client";

import { useGameStore } from "@/stores/game.data.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// const games = [
//   { id: 1, image: "/images/game1.png", title: "Mobile Legends" },
//   { id: 2, image: "/images/game2.png", title: "Clash of Clans" },
//   { id: 3, image: "/images/game3.png", title: "PUBG Mobile" },
//   { id: 4, image: "/images/game4.png", title: "Free Fire" },
//
// ];

export default function GameFavoritesComponent() {
  const { games, loading, error, fetchGames } = useGameStore();
  const router = useRouter();

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Temukan Game Favorit</h2>
        <div className="mb-6">
          <select className="p-2 rounded-md text-gray-800">
            <option>Mobile Game</option>
            <option>PC Game</option>
          </select>
        </div>

        {/* Renders data from zustand */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              onClick={() => {
                router.push(`/product-detail/${game.id.toLowerCase()}`);
              }}
              key={game.id}
              className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-900"
            >
              <img
                src={game.image}
                alt={game.name}
                className="h-24 w-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">{game.name}</h3>
              <h3 className="text-lg font-bold">{game.publisher}</h3>
              {/* <p
                className="text-sm mt-2 text-gray-300"
                dangerouslySetInnerHTML={{ __html: game.description }}
              /> */}
              {/* {game.items.map((item) => (
                <div key={item.id}>
                  <h3>{item.name}</h3>
                  <img src={item.iconUrl} />
                </div>
              ))} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
