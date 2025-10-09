import { movies } from "./movies";

console.log(movies);

export default function MovieList() {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
