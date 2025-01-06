"use client";
import React, { useEffect } from "react";
import Timer from "./components/timer.component";
import TujuanPembayaran from "./components/tujuan.pembayaran.component";
import DetailPemesanan from "./components/detail.pemesanan.component";
import { useGameStore } from "@/stores/game.data.store";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface PendingPaymentViewProps {
  slug: string;
}

export default function PendingPaymentViewSlug({
  slug,
}: PendingPaymentViewProps) {
  const { tempGame, tempItem } = useGameStore();
  const router = useRouter();

  const item = tempItem;

  if (!tempGame || tempItem === undefined) {
    return <div>Loading order details...</div>;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      Swal.fire({
        title: "Payment Successful",
        text: "You will be redirected shortly.",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        router.push("/invoice");
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
          <DetailPemesanan game={tempGame} item={item} />
        </div>
      </div>
    </div>
  );
}
