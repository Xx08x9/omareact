import { Link } from "react-router-dom";
import { useFavorites } from "../context/favorites-context";
import type React from "react";

export default function MovieCard({ movie }: { movie: any }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const favorite = isFavorite(movie.id);


  console.log("ДАННЫЕ ФИЛЬМА:", movie);

  const handleFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie.id);
    }
  };

  
  const imageUrl = movie.primaryImage?.url || movie.image || movie.poster || null;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
      <Link to={`/movie/${movie.id}`} className="flex-1">
        <div className="aspect-[2/3] bg-gray-100 relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="poster"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x450?text=No+Image";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
              Нет изображения
            </div>
          )}
        </div>

        <div className="p-3">
          <h3 className="font-bold text-gray-800 text-sm line-clamp-2">
            {movie.primaryTitle || movie.originalTitle || "Без названия"}
          </h3>
        </div>
      </Link>

      <div className="p-3 pt-0">
        <button
          onClick={handleFavorites}
          className={`w-full py-2 rounded-md text-sm font-semibold transition-colors ${
            favorite ? "bg-red-50 text-red-600" : "bg-blue-600 text-white"
          }`}
        >
          {favorite ? "Удалить" : "В избранное"}
        </button>
      </div>
    </div>
  );
}