type Movie = {
  id: string;
  title: string;
  poster?: string;
};

type Props = {
  movies: Movie[];
};

export default function MoviesList({ movies }: Props) {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
}