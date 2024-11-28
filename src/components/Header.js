import React from "react";
import ThemeComp from "@/components/ThemeComp"; // Tema değiştirme bileşeni
import { FaSearch } from "react-icons/fa"; // Arama ikonu

const Header = () => {
  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Sign In", path: "/login" },
  ];

  return (
    <header className="bg-white text-black dark:bg-black dark:text-white py-4 px-6 fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Arama Kutusu */}
        <div className="flex items-center bg-gray-200 dark:bg-gray-800 px-6 py-3 rounded-full w-full max-w-md">
          <FaSearch className="text-xl mr-3" />
          <input
            type="text"
            placeholder="Search movies or TV shows..."
            className="bg-transparent text-black dark:text-white focus:outline-none w-full"
          />
        </div>

        {/* Menü ve Tema Butonu */}
        <div className="flex items-center gap-4">
          <nav className="flex gap-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="hover:text-gray-500 dark:hover:text-gray-400 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <ThemeComp /> {/* Tema değiştirme bileşeni */}
        </div>
      </div>
    </header>
  );
};

export default Header;
