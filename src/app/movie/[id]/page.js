import React from "react";
import Image from "next/image";
import axios from "axios";

// Veri çekme fonksiyonu
const getMovieDetails = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=tr-TR`
  );
  return response.data;
};

const MovieDetailPage = async ({ params }) => {
  const { id } = params; // URL'den id'yi alıyoruz
  const movieDetail = await getMovieDetails(id);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Film Banner */}
      <div className="relative w-full">
        <div className="w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
            alt={movieDetail.title}
            width={1920}
            height={1080}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Film Detayları */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="py-8 space-y-8">
          {/* Başlık ve Oylama */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
              {movieDetail.title}
            </h1>
            <p className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md text-sm sm:text-base md:text-lg lg:text-xl">
              Puan: {movieDetail.vote_average} / 10
            </p>
          </div>

          {/* Açıklama */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 text-center">
            {movieDetail.overview}
          </p>

          {/* Çıkış Tarihi ve Türler */}
          <div className="text-gray-600 dark:text-gray-300 text-center space-y-2">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              <strong>Çıkış Tarihi:</strong> {movieDetail.release_date}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              <strong>Türler:</strong>{" "}
              {movieDetail.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>

          {/* Ekstra Detaylar */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md space-y-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Ekstra Detaylar
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              <strong>Orijinal Dil:</strong> {movieDetail.original_language}
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              <strong>Popülerlik:</strong> {movieDetail.popularity.toFixed(2)}
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              <strong>Bütçe:</strong>{" "}
              {movieDetail.budget
                ? `$${movieDetail.budget.toLocaleString()}`
                : "Bilinmiyor"}
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              <strong>Gelir:</strong>{" "}
              {movieDetail.revenue
                ? `$${movieDetail.revenue.toLocaleString()}`
                : "Bilinmiyor"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
