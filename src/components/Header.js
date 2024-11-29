"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchMoviesBySearch } from "@/config/searchApi";
import ThemeComp from "@/components/ThemeComp"; // Theme toggle component

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return; // Do not proceed with empty query
    const searchResults = await fetchMoviesBySearch(searchQuery);
    onSearch(searchResults); // Send search results to parent component
  };

  return (
    <header className="bg-white text-black dark:bg-black dark:text-white py-4 px-4 sm:px-6 lg:px-12 xl:px-24 fixed top-0 left-0 w-full z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-4 sm:gap-6">
        {/* Search Box */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-200 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full w-full max-w-md lg:max-w-lg xl:max-w-xl"
        >
          <FaSearch className="text-xl sm:text-2xl lg:text-3xl mr-2 sm:mr-3 lg:mr-4" />
          <input
            type="text"
            placeholder="Search movies or TV shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-black dark:text-white focus:outline-none w-full text-sm sm:text-base lg:text-lg xl:text-xl"
          />
        </form>

        {/* Menu and Theme Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex gap-4 sm:gap-6 lg:gap-8">
            <a
              href="/about"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition text-sm sm:text-base lg:text-lg xl:text-xl"
            >
              About
            </a>
            <a
              href="/login"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition whitespace-nowrap text-sm sm:text-base lg:text-lg xl:text-xl"
            >
              Sign In
            </a>
          </nav>

          {/* Theme Toggle Button */}
          <ThemeComp /> {/* Theme component */}
        </div>
      </div>
    </header>
  );
};

export default Header;
