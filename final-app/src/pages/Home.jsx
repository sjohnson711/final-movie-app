import MoodSelector from "../features/moodSelector/MoodSelector.jsx";
import styled from "styled-components";
import MovieList from "../features/MovieSuggestions/MovieList";

const Body = styled.body`
  height: 100vh;
`;

export default function Home() {
  return (
    <div>
      <MoodSelector />
      <MovieList />
    </div>
  );
}
