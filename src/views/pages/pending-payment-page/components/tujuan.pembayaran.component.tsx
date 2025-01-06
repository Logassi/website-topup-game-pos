import React from "react";

export default function TujuanPembayaran() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-lg font-bold">Scan QRIS</h2>
      <p className="text-sm mt-2">
        Dapat digunakan oleh DANA, Gopay, LinkAja, OVO, dll.
      </p>
      <div className="mt-4">
        <img
          src="/images/qris-placeholder.png"
          alt="QR Code"
          className="w-full max-w-xs mx-auto"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg">
        Unduh QR Code
      </button>
    </div>
  );
}
