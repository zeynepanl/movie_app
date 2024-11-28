"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchMoviesBySearch } from "@/config/searchApi";
import ThemeComp from "@/components/ThemeComp"; // Tema değiştirme bileşeni

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return; // Boş sorgu için işlem yapma
    const searchResults = await fetchMoviesBySearch(searchQuery);
    onSearch(searchResults); // Arama sonuçlarını üst bileşene gönder
  };

  return (
    <header className="bg-white text-black dark:bg-black dark:text-white py-4 px-6 fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Arama Kutusu */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-200 dark:bg-gray-800 px-6 py-3 rounded-full w-full max-w-md"
        >
          <FaSearch className="text-xl mr-3" />
          <input
            type="text"
            placeholder="Search movies or TV shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-black dark:text-white focus:outline-none w-full"
          />
        </form>

        {/* Menü ve Tema Butonu */}
        <div className="flex items-center gap-4">
          <nav className="flex gap-6">
            <a href="/about" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
              About
            </a>
            <a href="/login" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
              Sign In
            </a>
          </nav>

          {/* Tema Değiştirme Butonu */}
          <ThemeComp /> {/* Tema bileşeni */}
        </div>
      </div>
    </header>
  );
};

export default Header;
