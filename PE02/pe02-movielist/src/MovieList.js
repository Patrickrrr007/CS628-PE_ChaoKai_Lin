import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const movies = [
    { title: 'Spider-Man', genre: 'Action', releaseYear: 2002 },
    { title: 'The Dark Knight Trilogy', genre: 'Action/Thriller', releaseYear: 2005 },
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { title: 'Transformer', genre: 'Action/Sci-Fi', releaseYear: 2007 },
    { title: 'The Titan Attack', genre: 'Fantasy/Animation', releaseYear: 2013 },
    { title: 'Avengers: Endgame', genre: 'Action/Sci-Fi', releaseYear: 2019 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];
  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleGenreChange = (e) => setSelectedGenre(e.target.value);

  const handleMovieClick = (title) => alert(`You clicked on ${title}`);

  return (
    <div>
      <h1>Movie List</h1>
      <select onChange={handleGenreChange} value={selectedGenre}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="container">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <div className="card-title">{movie.title}</div>
            <div className="card-genre">{movie.genre}</div>
            <div className="card-year">{movie.releaseYear}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;