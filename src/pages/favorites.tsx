import Movieslist from "../components/MoviesList";
import { useFavorites } from "../context/favorites-context";
import { useEffect, useState } from "react";
import { getMoviesByIds } from "../services/api";

export default function Favorites() {
    const { favorites } = useFavorites();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (favorites.length > 0) {
            getMoviesByIds(favorites).then(data => setMovies(data));
        } else {
            setMovies([]);
        }
    }, [favorites]);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-6">Избранное</h1>
            {movies.length > 0 ? (
                <Movieslist movies={movies} />
            ) : (
                <p className="text-gray-500">Тут пока пусто...</p>
            )}
        </div>
    );
}