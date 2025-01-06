import React from "react";

export default function Timer() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 flex flex-col items-center">
      <h2 className="text-lg font-bold">MENUNGGU PEMBAYARAN</h2>
      <p className="text-sm mt-2">Selesaikan pembayaran sebelum waktu habis:</p>
      <div className="text-4xl font-bold mt-4 flex items-center space-x-4">
        {/* Jam */}
        <div className="border border-gray-500 rounded p-4 flex flex-col items-center justify-center">
          <span>7</span>
          <span className="text-lg">Jam</span>
        </div>

        {/* Menit */}
        <div className="border border-gray-500 rounded p-4 flex flex-col items-center justify-center">
          <span>29</span>
          <span className="text-lg">Menit</span>
        </div>

        {/* Detik */}
        <div className="border border-gray-500 rounded p-4 flex flex-col items-center justify-center">
          <span>35</span>
          <span className="text-lg">Detik</span>
        </div>
      </div>
      <p className="text-xs mt-2 text-gray-400">
        Agar pesanan tidak otomatis batal
      </p>
    </div>
  );
}
