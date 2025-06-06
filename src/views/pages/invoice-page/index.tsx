"use client";
import InvoiceForm from "./components/invoice.form.component";
import { useGameStore } from "@/stores/game.data.store";
import { SlugProps } from "@/types/props";

export default function InvoicePageView({ slug }: SlugProps) {
  const { tempGame, tempItem } = useGameStore();

  const item = tempItem;
  const game = tempGame;
  return (
    <div>
      <InvoiceForm item={item} game={game} />
    </div>
  );
}
