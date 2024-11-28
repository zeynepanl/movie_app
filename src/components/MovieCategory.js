import React, { useState, useEffect } from "react";
import PopularMovies from "./PopularMovies";

const MovieCategories = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${category}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <PopularMovies movies={movies} />
    </div>
  );
};

export default MovieCategories;
