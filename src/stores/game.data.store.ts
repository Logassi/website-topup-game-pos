import axiosInstance from "@/libs/axios";
import { create } from "zustand";

export interface GameItem {
  id: number;
  name: string;
  price: number;
  priceDiscount: number;
  iconUrl: string;
}

export interface Game {
  createdAt: string;
  name: string;
  image: string;
  publisher: string;
  description: string;
  category: string | null;
  items: GameItem[];
  id: string;
}

interface GameStore {
  games: Game[];
  loading: boolean;
  error: string | null;
  fetchGames: () => Promise<void>;
  //   fetchInvoice: () => Promise<void>;
}

export const useGameStore = create<GameStore>((set) => ({
  games: [],
  loading: false,
  error: null,

  fetchGames: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get("/products");
      //   console.log(response);

      // Format prices and update the store data
      const formattedGames = response.data.map((game: Game) => ({
        ...game,
        items: game.items.map((item: GameItem) => ({
          ...item,
          price: `Rp${item.price.toLocaleString()}`, // Ensure price is formatted with currency
        })),
      }));

      set({ games: formattedGames, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Failed to fetch games data",
        loading: false,
      });
    }
  },

  //   fetchInvoice: async () => {
  //     set({ loading: true, error: null });
  //     try {
  //       const response = await axiosInstance.get("/invoices");
  //       set({ games: response.data, loading: false });
  //     } catch (error: any) {
  //       set({
  //         error: error.response?.data?.message || "Failed to fetch games data",
  //         loading: false,
  //       });
  //     }
  //   },
}));
