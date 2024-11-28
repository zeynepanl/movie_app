"use client";

import React, { useState } from "react";
import axios from "axios";

const SearchMovies = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return; // Sorgu boşsa işlem yapma
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
            query: query,
            language: "tr-TR",
          },
        }
      );
      onSearch(response.data.results); // Arama sonuçlarını üst bileşene gönder
    } catch (error) {
      console.error("Arama sırasında bir hata oluştu:", error);
    }
  };

  return (
    <div className="flex items-center bg-gray-200 dark:bg-gray-800 px-6 py-3 rounded-full w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search movies..."
        className="bg-transparent text-black dark:text-white focus:outline-none w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-orange-500 text-white px-4 py-2 rounded-full ml-4"
      >
        Ara
      </button>
    </div>
  );
};

export default SearchMovies;
