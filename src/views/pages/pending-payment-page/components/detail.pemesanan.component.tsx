import React from "react";

export default function DetailPemesanan() {
  return (
    <div>
      {/* Order Summary Section */}
      <div className="bg-gray-800 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-bold">Mobile Legends Bang Bang</h2>
        <div className="flex flex-col md:flex-row justify-between mt-4">
          <div className="text-sm mb-2 md:mb-0">
            <div className="font-bold">Tanggal Pemesanan:</div>
            <div>08/09/2023</div>
          </div>
          <div className="text-sm mb-2 md:mb-0">
            <div className="font-bold">Nomor Pesanan:</div>
            <div>ML-1235-09827-VXAEIWNMASDFBB</div>
          </div>
          <div className="text-sm">
            <div className="font-bold">Metode Pembayaran:</div>
            <div>QRIS untuk semua pembayaran</div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Detail</h2>

        {/* Grid Layout for Parallel Details */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="text-left">
            <h3 className="text-gray-400 text-base mb-1">Item</h3>
            <p className="text-white text-sm">5 Diamond</p>
          </div>
          <div className="text-right">
            <h3 className="text-gray-400 text-base mb-1">Harga</h3>
            <p className="text-white text-sm">Rp1.500,-</p>
          </div>

          <div className="text-left">
            <h3 className="text-gray-400 text-base mb-1">USER ID</h3>
            <p className="text-white text-sm">924936253</p>
          </div>
          <div className="text-right">
            <h3 className="text-gray-400 text-base mb-1">Fee</h3>
            <p className="text-white text-sm">Rp45,-</p>
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
      <div className="bg-slate-400 text-white p-4 mb-4 rounded-b-lg flex items-center justify-between">
        <p className="text-lg font-semibold">Total Pembayaran:</p>
        <p className="text-2xl font-bold text-green-500">Rp188.000</p>
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
