"use client";
import { Game, GameItem } from "@/stores/game.data.store";
import { useRouter } from "next/navigation";
import React from "react";

interface InvoiceFormProps {
  item: GameItem | undefined;
  game: Game | undefined;
}

export default function InvoiceForm({ item, game }: InvoiceFormProps) {
  const router = useRouter();

  if (!item) {
    return <div>Loading item...</div>;
  }

  const itemFee = item.price * (12 / 100);
  const totalPrice = itemFee + item.price;

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Invoice Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-green-400 font-bold text-sm">
            Nomor Pesanan: IVR/2-230802/XXIII/VIII/709651986
          </div>
          <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-md">
            Pesanan Berhasil
          </button>
        </div>

        {/* Game and Details Section */}
        <div className="flex items-center mb-6">
          {/* Game Icon */}
          <img
            src="/path/to/game-icon.jpg"
            alt="Game Icon"
            className="w-16 h-16 rounded-md mr-4"
          />
          {/* Game Name */}
          <div>
            <h2 className="text-lg font-bold">{game?.name}</h2>
            <p className="text-gray-400 text-sm">{game?.publisher}</p>
          </div>
        </div>

        {/* Details */}
        <div className="bg-gray-700 p-4 rounded-md text-sm mb-4">
          <div className="grid grid-cols-2 gap-y-2">
            <div>
              <span className="font-bold">Item:</span> {item?.name}
            </div>
            <div className="text-right">
              <span className="font-bold">Harga:</span> {item?.price}
            </div>
            <div>
              <span className="font-bold">USER ID:</span> 924936253
            </div>
            <div className="text-right">
              <span className="font-bold">Fee:</span> {itemFee}
            </div>
            <div>
              <span className="font-bold">ZONE ID:</span> 12666
            </div>
            <div className="text-right">
              <span className="font-bold">Kode Unik:</span> 338
            </div>
            <div>
              <span className="font-bold">Username:</span> SilverQuens
            </div>
            <div>
              <span className="font-bold">Metode Pembayaran:</span> QRIS untuk
              semua pembayaran
            </div>
          </div>
        </div>

        {/* Total Payment */}
        <div className="bg-green-500 text-black p-4 rounded-md flex justify-between items-center mb-6">
          <p className="font-bold">Total Pembayaran:</p>
          <p className="text-lg font-extrabold">{totalPrice}</p>
        </div>

        {/* Review Section */}
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-white font-semibold mb-3">Tambahkan Ulasan</h3>
          {/* Rating */}
          <div className="flex space-x-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className="text-yellow-500 text-2xl focus:outline-none"
              >
                ★
              </button>
            ))}
          </div>
          {/* Textarea */}
          <textarea
            className="w-full bg-gray-700 text-white p-2 rounded-md mb-4 focus:outline-none"
            placeholder="Tulis ulasan singkat dan ceritakan pengalamanmu..."
            rows={4}
          ></textarea>
          {/* Submit Button */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
            Tambahkan Ulasan
          </button>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/")}
            className="bg-transparent text-white py-2 px-4 border border-white rounded-md"
          >
            Kembali ke beranda
          </button>
        </div>
      </div>
    </div>
  );
}
