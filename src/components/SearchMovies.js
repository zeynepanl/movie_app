"use client";

import React, { useState } from "react";
import axios from "axios";

const SearchMovies = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return; // Do not proceed if query is empty
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
      onSearch(response.data.results); // Send search results to parent component
    } catch (error) {
      console.error("An error occurred during the search:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center bg-gray-200 dark:bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full max-w-md mx-auto gap-2 sm:gap-4">
      <input
        type="text"
        placeholder="Search movies..."
        className="bg-transparent text-black dark:text-white focus:outline-none w-full text-sm sm:text-base"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-orange-500 text-white px-4 py-2 rounded-full w-full sm:w-auto text-sm sm:text-base"
      >
        Ara
      </button>
    </div>
  );
};

export default SearchMovies;
