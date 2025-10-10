import { movies } from "./movies";
import styled from "styled-components";

console.log(movies);

export default function MovieList() {
  const certMovies = Object.values(movies).filter((title) =>
    title.title.toLowerCase().startsWith("t")
  );
  console.log(certMovies);

  const MovieCard = styled.div`
    display: flex;
    flex-direction: rows;
    max-width: 400px;
    text-align: center;
  `;

  const Image = styled.img`
    height: 200px;
    width: 200px;
  `;

  return (
    <MovieCard>
      {certMovies.map((movie) => {
        return (
          <>
            <Image src={movie.poster_path} />
            <li style={{ listStyle: "none" }} key={movie.id}>
              {movie.title}
            </li>
          </>
        );
      })}
    </MovieCard>
  );
}
