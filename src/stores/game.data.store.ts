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
  tempGame: Game | undefined;
  tempItem: GameItem | undefined;
  selectedItems: GameItem[];
  loading: boolean;
  error: string | null;
  fetchGames: () => Promise<void>;
  setSelectedItems: (item: GameItem) => void;
  setTempGame: (game: Game) => void;
  setTempItem: (item: GameItem) => void;
  //   fetchInvoice: () => Promise<void>;
}

export const useGameStore = create<GameStore>((set) => ({
  games: [],
  tempGame: undefined,
  tempItem: undefined,
  selectedItems: [],
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
          // price: `Rp${item.price.toLocaleString()}`, // Ensure price is formatted with currency
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

  setSelectedItems: (item: GameItem) =>
    set((state) => ({
      selectedItems: [...state.selectedItems, item], // Add item to the selectedItems array
    })),

  setTempItem: (item: GameItem) => set({ tempItem: item }),

  setTempGame: (game: Game) => set({ tempGame: game }),
  // storeItems: async (){

  // }

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
