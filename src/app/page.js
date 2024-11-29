"use client";

import React, { useState, useEffect } from "react";
import { fetchMoviesByCategory } from "@/config/api";
import categories from "@/components/categories";
import Header from "@/components/Header";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMoviesByCategory(selectedCategory);
      setMovies(data);
    };

    getMovies();
  }, [selectedCategory]);

  // Update movies from Header's search results
  const handleSearchResults = (searchResults) => {
    setMovies(searchResults);
  };

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen p-4 sm:p-8 lg:p-16">
      {/* Header */}
      <Header
        onSearch={handleSearchResults}
        className="text-xl sm:text-2xl md:text-3xl"
      />

      {/* Menu */}
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 mt-10 sm:mt-12 lg:mt-20 text-sm sm:text-base md:text-lg">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`${
              selectedCategory === category.key
                ? "text-orange-500 font-semibold"
                : "text-gray-400"
            } transition hover:text-orange-300`}
          >
            {category.name}
          </button>
        ))}
      </nav>

      {/* Movies */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {movies.map((movie) => (
          <a
            href={`/movie/${movie.id}`}
            key={movie.id}
            className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition hover:scale-105"
          >
            <div className="w-full aspect-[2/3]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">
                {movie.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                {movie.release_date} - Rating: {movie.vote_average}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
