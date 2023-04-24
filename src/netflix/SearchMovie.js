import axios from "axios";
import React, { useState } from "react";

function SearchMovie() {
  const resultsStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const movieStyle = {
    width: "20%",
    height: "400px",
    margin: "2rem 1rem",
  };

  const imgStyle = {
    width: "100%",
    height: "70%",
  };

  const [input, setinput] = useState("");
  const [moviesArray, setMoviesArray] = useState([]);
  const img_full_path = "https://image.tmdb.org/t/p/original";

  function handleChange(e) {
    setinput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //SEARCH MOVIE ON TMDB USING THE API KEY WITH AXIOS
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=8125db8f67d23da1d30f6063b1b794b8&language=en-US&query=${input}&page=1&include_adult=false'`
      )
      .then((results) => {
        console.log(results.data.results);
        setMoviesArray(results.data.results);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <div className="results" style={resultsStyle}>
        {moviesArray.map((movie, index) => {
          return (
            <div key={index} className="movie" style={movieStyle}>
              <div className="movie-image">
                <img
                  src={img_full_path + movie.poster_path}
                  alt={movie.title || movie.original_title}
                  style={imgStyle}
                />
              </div>
              <div className="movie-title">
                <h3>{movie.title || movie.original_title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchMovie;
