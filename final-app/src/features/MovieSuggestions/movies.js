const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhMzI1YTMxNGY1YWFkZDI0MjExOTQzNGI1YWRkYSIsIm5iZiI6MTc2MDQ4NTM4OC41MzMsInN1YiI6IjY4ZWVlMDBjYjQ5YzdkNjAzZThhMjEyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.td3uhZmK2z36eIo-bjC9DIxqP42N4vgrwMQ57JBRQs4",
  },
};
export const movieApi = async (mood) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  ); // your actual API
  const data = await res.json();

  // filter through the data from Api and base the movies that show up off the mood that is assigned by genre ids 😵‍💫
  return data.results.filter((movie) => {
    if (mood === "happy") return movie.genre_ids.includes(35);
    if (mood === "sad") return movie.genre_ids.includes(878);
    if (mood === "scared") return movie.genre_ids.includes(27);
    if (mood === "excited") return movie.genre_ids.includes(28);
    if (mood === "romantic") return movie.genre_ids.includes(53);
    if (mood === "inspired") return movie.genre_ids.includes(80);
    return true;
  });
};
