import { movies } from "./movies";

console.log(movies);

export default function MovieList() {
  const certMovies = Object.values(movies).filter((title) =>
    title.title.toLowerCase().startsWith("s")
  );
  console.log(certMovies);

  return (
    <div>
      {certMovies.map((movie) => {
        return (
          <li style={{ listStyle: "none" }} key={movie.id}>
            {movie.title}
          </li>
        );
      })}
    </div>
  );
}
