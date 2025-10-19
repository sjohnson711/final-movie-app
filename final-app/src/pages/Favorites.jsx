import { FavoritesContext } from "../App";
import { useContext } from "react";
import styled from "styled-components";

const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(4, 100px);
  gap: 20px;
`;

export default function Favorites() {
  const { favorites, removeFavorites } = useContext(FavoritesContext);
  return (
    <div className="favorites-header">
      <header>
        <nav>
          <h1> ❤️ Your Favorite Movies ♥️</h1>
        </nav>
      </header>
      <Display className="favorite-display">
        {" "}
        {favorites && favorites.length > 0 ? (
          favorites.map((m) => (
            <div key={m.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                alt={m.title}
              />

              <h1>{m.title}</h1>
              <button onClick={() => removeFavorites(m.id)}>
                Remove Favorite
              </button>
            </div>
          ))
        ) : (
          <h1
            className="no-favorites"
            style={{ color: "red", gridColumn: "1/-1" }} // looked up/if there are no movies this will span the entire center of the grid.
          >
            no favorites
          </h1>
        )}
      </Display>
    </div>
  );
}
