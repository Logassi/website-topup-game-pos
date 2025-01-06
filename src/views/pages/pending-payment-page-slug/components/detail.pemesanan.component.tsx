import { Game, GameItem } from "@/stores/game.data.store";
import React from "react";

interface DetailPemesananProp {
  item: GameItem | undefined;
  game: Game | undefined;
}

export default function DetailPemesanan({ item, game }: DetailPemesananProp) {
  if (!item) {
    return <div>Loading item...</div>;
  }

  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  const itemFee = item.price * (12 / 100);
  const totalPrice = itemFee + item.price;
  const generateNomorPesanan = `${game?.name}-${day}${month}${year}`;

  return (
    <div>
      <div className="bg-gray-800 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-bold">{game?.name}</h2>
        <div className="flex flex-col md:flex-row justify-between mt-4">
          <div className="text-sm mb-2 md:mb-0">
            <div className="font-bold">Tanggal Pemesanan:</div>
            <div>{formattedDate}</div>
          </div>
          <div className="text-sm mb-2 md:mb-0">
            <div className="font-bold">Nomor Pesanan:</div>
            <div>{generateNomorPesanan}</div>
          </div>
          <div className="text-sm">
            <div className="font-bold">Metode Pembayaran:</div>
            <div>QRIS untuk semua pembayaran</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Detail</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-left">
            <h3 className="text-gray-400 text-base mb-1">Item</h3>
            <p className="text-white text-sm">{item.name}</p>
          </div>
          <div className="text-right">
            <h3 className="text-gray-400 text-base mb-1">Harga</h3>
            <p className="text-white text-sm">{`Rp. ${item.price}`}</p>
          </div>

          <div className="text-left">
            <h3 className="text-gray-400 text-base mb-1">USER ID</h3>
            <p className="text-white text-sm">924936253</p>
          </div>
          <div className="text-right">
            <h3 className="text-gray-400 text-base mb-1">Fee</h3>
            <p className="text-white text-sm">{`Rp. ${itemFee}`}</p>
          </div>

          <div className="text-left">
            <h3 className="text-gray-400 text-base mb-1">ZONE ID</h3>
            <p className="text-white text-sm">12666</p>
          </div>
          <div className="text-right">
            <h3 className="text-gray-400 text-base mb-1">Kode Unik</h3>
            <p className="text-white text-sm">338</p>
          </div>

          <div className="text-left">
            <h3 className="text-gray-400 text-base mb-1">Username</h3>
            <p className="text-white text-sm">SilverQuens</p>
          </div>
        </div>
      </div>

      {/* Total Payment Section */}
      <div className="bg-slate-600 text-white p-4 mb-4 rounded-b-lg flex items-center justify-between">
        <p className="text-lg font-semibold">Total Pembayaran:</p>
        <p className="text-2xl font-bold text-green-500">{`Rp. ${totalPrice}`}</p>
      </div>

      {/* Contact Us Section */}
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <p>
          Sudah bayar namun pesanan belum masuk?{" "}
          <a className="text-blue-400 hover:underline" href="#">
            Hubungi kami
          </a>
        </p>
      </div>
    </div>
  );
}
