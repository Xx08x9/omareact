import { Link } from "react-router-dom";
import { useFavorites } from "../context/favorites-context";
import React from "react";

type Movie = {
  id: number;
  primaryTitle?: string;
  originalTitle?: string;
  image?: string;
  poster?: string;
  primaryImage?: {
    url?: string;
  };
};

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  const isFav = isFavorite(movie.id);

  const title = movie.primaryTitle || movie.originalTitle || "Без названия";

  const image =
    movie.primaryImage?.url ||
    movie.image ||
    movie.poster ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFav) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie.id);
    }
  };

  return (
    <article className="flex flex-col h-full bg-white border rounded-lg shadow-sm overflow-hidden">
      <Link to={`/movie/${movie.id}`} className="flex-1">
        <div className="aspect-[2/3] bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/300x450?text=No+Image";
            }}
          />
        </div>

        <div className="p-3">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>

      <div className="p-3 pt-0">
        <button
          onClick={toggleFavorite}
          className={[
            "w-full py-2 rounded-md text-sm font-medium transition",
            isFav
              ? "bg-red-100 text-red-600 hover:bg-red-200"
              : "bg-blue-600 text-white hover:bg-blue-700",
          ].join(" ")}
        >
          {isFav ? "Удалить и избранного" : "Добавить в избранное"}
        </button>
      </div>
    </article>
  );
}