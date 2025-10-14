import { useState, useEffect } from "react";
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

const Input = styled.input`
  padding: 4px;
  font-family: monospace;
  border-radius: 8px;
  width: 300px;
  margin-top: 50px;

  &::placeholder {
    color: lightpurple;
    opacity: 0.5;
  }
`;

export default function MoodSelector() {
  const [movieList, setMovieList] = useState([]); //receives the movie list
  const [selectedMood, setSelectedMood] = useState(null);
  const [userSelect, setUserSelect] = useState("");
  const [matchingMovie, setMatchingMovie] = useState(null);

  console.log(userSelect);

  function handleMoodClick(moodName) {
    setSelectedMood(moodName);
    const filtered = movies.filter((movie) => movie.mood === moodName); //if movie mood matches the mood name display
    setMovieList(filtered);
  }

  function handleOnchange(event) {
    setUserSelect(event.target.value); //userinput
  }

  function onSubmit(event) {
    //prevent refresh and also saved user input into state
    event.preventDefault();
    setUserSelect(userSelect);
  }

  useEffect(() => {
    if (!userSelect) {
      setMatchingMovie([]); //prevents error/edge case
      return;
    }

    const firstLetterOfInput = userSelect[0].toLowerCase();
    const result = movies.filter((movie) => {
      return movie.title[0].toLowerCase().includes(userSelect.toLowerCase()); //compares the first letters of both
    });
    setMatchingMovie(result);
  }, [userSelect]);

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
      <form onSubmit={onSubmit}>
        <Input
          name="user-input"
          className="user=input"
          autoComplete="off"
          type="text"
          value={userSelect}
          onChange={handleOnchange}
          placeholder="search for movie..."
        />
        {/**disable button if nothing is in input */}
        <span>
          <button disabled={userSelect === "" ? true : false}>Search</button>
        </span>
      </form>
      {userSelect ? (
        matchingMovie && matchingMovie.length > 0 ? ( //if movie matches first letter for both user input and movie display below:
          <MovieCard>
            {matchingMovie.map((movie) => (
              <MovieItem key={movie.id}>
                <Image src={movie.poster_path} alt={movie.title} />
                <p>{movie.title}</p>
              </MovieItem>
            ))}
          </MovieCard>
        ) : (
          <EmptyState>No movies found</EmptyState>
        )
      ) : null}
    </div>
  );
}
