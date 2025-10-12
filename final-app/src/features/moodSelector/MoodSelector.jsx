import { useState } from "react";
import styled from "styled-components";
import { moods } from "./MoodData";
import { movies } from "../MovieSuggestions/movies";

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: red;
    background: #ff9900;
  }

  &.selected {
    border-color: #ff9900;
    background-color: teal;
  }
`;

const MovieItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
  text-align: center;
`;

const EmptyState = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
  text-align: center;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 8px;
`;

export default function MoodSelector() {
  const [movieList, setMovieList] = useState([]); //receives the movie list
  const [selectedMood, setSelectedMood] = useState(null);

  function handleMoodClick(moodName) {
    setSelectedMood(moodName);
    const filtered = movies.filter((movie) => movie.mood === moodName); //if movie mood matches the mood name display
    setMovieList(filtered);
  }

  return (
    <div className="mood-container-button">
      <h2>Select Your Mood</h2>
      {moods.map(
        (
          mood //maps the mood into buttons
        ) => (
          <Button
            key={mood.id}
            className={selectedMood === mood.name ? "selected" : ""}
            onClick={() => handleMoodClick(mood.name)}
          >
            {mood.icon} {mood.name}
          </Button>
        )
      )}
      {/*If the movie list is < 0 it will display if not : 'message'*/}
      {movieList.length > 0 && (
        <MovieCard>
          {movieList.map((movie) => (
            <MovieItem key={movie.id}>
              <Image src={movie.poster_path} alt={movie.title} />
              <p>{movie.title}</p>
            </MovieItem>
          ))}
        </MovieCard>
      )}
      {movieList.length === 0 && <EmptyState>No movies Found</EmptyState>}
    </div>
  );
}
