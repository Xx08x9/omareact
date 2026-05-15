import MovieCard from "./MovieCard";

type Movie = {
  id: string;
};

type Props = {
  movies: Movie[];
};

export default function MoviesList({ movies }: Props) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}