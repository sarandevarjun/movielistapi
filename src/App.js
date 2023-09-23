import React, { useState, useEffect } from "react";
//import React, { useState } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import "./CSS/App.css";
const App = () => {
  // e79ac15c
  // http://www.omdbapi.com/?i=tt3896198&apikey=e79ac15c
  const [counter, setCounter] = useState(5);

  const Movies_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e79ac15c";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // get the moives data using await json method
  const searchMovies = async (movieTitle) => {
    const responseMoviesData = await fetch(`${Movies_API_URL}&s=${movieTitle}`);
    const responseMoviesJsonData = await responseMoviesData.json();
    //console.log(responseMoviesJsonData.Search);
    setMovies(responseMoviesJsonData.Search);
  };

  const movie1 = {
    Title: "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    Year: "2007",
    imdbID: "tt1132238",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="app">
      <button
        style={{ display: "none" }}
        onClick={() => setCounter((counterval) => counterval - 1)}
      >
        Decrease the counter value-
      </button>
      <h1 style={{ display: "none" }}>App content here!{counter}</h1>
      <button
        style={{ display: "none" }}
        onClick={() => setCounter((counterval) => counterval + 1)}
      >
        Increase the counter value+
      </button>
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search Movies here...!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="Search Button"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No movies found..!!!</h1>
        </div>
      )}
    </div>
  );
};

export default App;
