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

  // Header'dan gelen arama sonuçlarını güncelle
  const handleSearchResults = (searchResults) => {
    setMovies(searchResults);
  };

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen p-8">
      {/* Header */}
      <Header onSearch={handleSearchResults} />

      {/* Menü */}
      <nav className="flex justify-center gap-6 mb-6 mt-20">
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

      {/* Filmler */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <a
            href={`/movie/${movie.id}`}
            key={movie.id}
            className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{movie.title}</h3>
              <p className="text-sm text-gray-400">
                {movie.release_date} - Puan: {movie.vote_average}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
