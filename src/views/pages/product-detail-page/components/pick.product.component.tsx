import React from "react";

const products = [
  { id: 1, name: "120 Diamonds", price: "Rp20.000" },
  { id: 2, name: "250 Diamonds", price: "Rp40.000" },
  { id: 3, name: "500 Diamonds", price: "Rp75.000" },
];

export default function PickProduct() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pilih Produk</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-blue-500 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
