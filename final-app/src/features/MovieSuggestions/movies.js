// src/data/movies.js
// export const movies = [
//   {
//     id: 1,
//     title: "Spider-Man: No Way Home",
//     overview:
//       "Peter Parker's life gets complicated after his identity is revealed.",
//     release_date: "2021-12-15",
//     vote_average: 8.3,
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
//     mood: "excited",
//   },
//   {
//     id: 2,
//     title: "The Batman",
//     overview:
//       "Batman uncovers corruption in Gotham City while facing a serial killer.",
//     release_date: "2022-03-04",
//     vote_average: 8.2,
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
//     mood: "excited",
//   },
//   {
//     id: 3,
//     title: "Doctor Strange in the Multiverse of Madness",
//     overview:
//       "Dr. Strange navigates the dangers of the multiverse with new allies.",
//     release_date: "2022-05-04",
//     vote_average: 7.5,
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
//     mood: "happy",
//   },
//   {
//     id: 4,
//     title: "Avatar: The Way of Water",
//     overview:
//       "Jake Sully lives among the Na'vi and faces a new threat to Pandora.",
//     release_date: "2022-12-16",
//     vote_average: 7.8,
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     mood: "happy",
//   },
//   {
//     id: 5,
//     title: "Top Gun: Maverick",
//     overview: "Maverick returns to train a new generation of fighter pilots.",
//     release_date: "2022-05-27",
//     vote_average: 8.4,
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
//     mood: "inspired",
//   },
// ];

//Api Data to filter the movies

const moodGenres = {
  happy: 35,
  sad: 18,
  scared: 27,
  excited: 28,
  romantic: 10749,
  inspired: 12 || 14,
};

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

  // Example: map genres to moods
  return data.results.filter((movie) => {
    if (mood === "happy") return movie.genre_ids.includes(35); // comedy
    if (mood === "sad") return movie.genre_ids.includes(18); // drama
    if (mood === "scared") return movie.genre_ids.includes(27); // horror
    if (mood === "excited") return movie.genre_ids.includes(28); // action
    if (mood === "romantic") return movie.genre_ids.includes(10749); // romance
    if (mood === "inspired") return movie.genre_ids.includes(99); // documentary / inspirational
    return true;
  });
};
