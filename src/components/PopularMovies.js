import React from "react";
import Link from "next/link";

const PopularMovies = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md"
            />
            <h3 className="mt-2 font-semibold">{movie.title}</h3>
            <p className="text-sm">{movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularMovies;
