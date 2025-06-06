"use client";
import React, { useEffect } from "react";
import InvoiceForm from "./components/invoice.form.component";
import { InvoiceProps } from "@/types/invoice";
import { useGameStore } from "@/stores/game.data.store";

export default function InvoicePageView({ slug }: InvoiceProps) {
  const { tempGame, tempItem } = useGameStore();

  const item = tempItem;
  const game = tempGame;
  return (
    <div>
      <InvoiceForm item={item} game={game} />
    </div>
  );
}
