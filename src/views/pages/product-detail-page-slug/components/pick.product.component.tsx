"use client";
import { Game, useGameStore } from "@/stores/game.data.store";
import { useRouter } from "next/navigation";
import React from "react";

interface PickProductProps {
  game: Game | undefined;
}

export default function PickProduct({ game }: PickProductProps) {
  const router = useRouter();
  const { setTempGame, setTempItem } = useGameStore();

  if (!game) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pilih Produk</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {game.items.map((item) => (
            <div
              onClick={() => {
                setTempGame(game);
                setTempItem(item);
                router.push(`/pending-payment/${item.id}`);
              }}
              key={item.id}
              className="flex items-center justify-between bg-gray-800 hover:bg-gray-500 shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              {/* Product Details */}
              <div className="text-left ">
                <h3 className="text-white text-lg font-bold mb-1">
                  {item.name}
                </h3>
                <p className="text-green-500 text-lg font-bold">{item.price}</p>
              </div>

              {/* Product Icon */}
              <img
                src={item.iconUrl}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
