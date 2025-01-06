"use client";
import React, { useEffect } from "react";
import Banner from "./components/banner.component";
import PickProduct from "./components/pick.product.component";
import PickPaymentMethod from "./components/pick.paymentmethod.component";
import FormUserData from "./components/form.userdata.component";
import { useGameStore } from "@/stores/game.data.store";

interface ProductDetailPageViewProps {
  slug: string;
}

export default function ProductDetailPageViewSlug({
  slug,
}: ProductDetailPageViewProps) {
  const { games, fetchGames } = useGameStore();

  useEffect(() => {
    if (games.length === 0) {
      fetchGames(); // Fetch games if not already loaded
    }
  }, [games, fetchGames]);

  const game = games.find(
    (game) => game.id.toLowerCase() === slug.toLowerCase()
  );

  if (!game) {
    return <div>Loading or Game not found...</div>;
  }

  return (
    <div>
      <Banner
        name={game.name}
        image={game.image}
        description={game.description}
        publisher={game.publisher}
      />
      <PickProduct products={game.items} />
      <FormUserData />
      <PickPaymentMethod />
    </div>
  );
}
