import React from "react";
import Timer from "./components/timer.component";
import TujuanPembayaran from "./components/tujuan.pembayaran.component";
import DetailPemesanan from "./components/detail.pemesanan.component";

export default function PendingPaymentView() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
        {/* Left Column: Timer and Tujuan Pembayaran */}
        <div>
          <Timer />
          <TujuanPembayaran />
        </div>
        {/* Right Column: Detail Pemesanan */}
        <div>
          <DetailPemesanan />
        </div>
      </div>
    </div>
  );
}
