import React from "react";
import Link from "next/link";

const PopularMovies = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <div className="bg-gray-800 text-white p-2 sm:p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <div className="w-full aspect-[2/3]">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="mt-2 font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">
              {movie.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base">{movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularMovies;
