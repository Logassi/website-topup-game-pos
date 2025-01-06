import React from "react";

export default function FormUserData() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Topup Game</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-gray-700 font-bold mb-2"
            >
              Nomor ID Anda
            </label>
            <input
              type="text"
              id="userId"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Nomor ID Anda"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="serverId"
              className="block text-gray-700 font-bold mb-2"
            >
              Server ID (Opsional)
            </label>
            <input
              type="text"
              id="serverId"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Server ID"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="promoCode"
              className="block text-gray-700 font-bold mb-2"
            >
              Kode Promo (Opsional)
            </label>
            <input
              type="text"
              id="promoCode"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Kode Promo"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
