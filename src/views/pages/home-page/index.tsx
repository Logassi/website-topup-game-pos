import React from "react";
import HeroComponent from "./components/hero.component";
import FlashSalesComponent from "./components/flashsales.component";
import GameFavoritesComponent from "./components/gamefavorit.component";

export default function HomePageView() {
  return (
    <div>
      <HeroComponent />
      <FlashSalesComponent />
      <GameFavoritesComponent />
    </div>
  );
}
