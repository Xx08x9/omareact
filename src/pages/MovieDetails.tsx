import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../services/api";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        if (id) getMovieById(id).then(res => setMovie(res.results || res));
    }, [id]);

    if (!movie) return null;

    return (
        <div className="flex p-5 gap-5">
            <img src={movie?.primaryImage?.url} className="w-80 h-auto" />
            <div>
                <h1 className="text-2xl font-bold">{movie?.originalTitle}</h1>
                <p className="mt-4">{movie?.plot?.plotText?.plainText}</p>
            </div>
        </div>
    );
}