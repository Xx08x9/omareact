import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type FavoritesContextType = {
  favorites: string[];
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addToFavorites = (id: string) => {
    setFavorites((prev) => [...prev, id]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((movieId) => movieId !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  const value: FavoritesContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}