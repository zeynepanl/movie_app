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
      <div className="relative w-full h-[500px] lg:h-[600px]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
          fill
          style={{ objectFit: "cover" }}
          priority
          className="rounded-b-lg shadow-lg"
        />
      </div>

      {/* Film Detayları */}
      <div className="p-8 max-w-5xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Sol Taraf */}
        <div className="md:col-span-8 space-y-6">
          {/* Başlık ve Oylama */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <h1 className="text-4xl font-bold text-orange-500">
              {movieDetail.title}
            </h1>
            <p className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md">
              Puan: {movieDetail.vote_average} / 10
            </p>
          </div>

          {/* Açıklama */}
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {movieDetail.overview}
          </p>

          {/* Çıkış Tarihi ve Türler */}
          <div className="text-gray-600 dark:text-gray-300">
            <p>
              <strong>Çıkış Tarihi:</strong> {movieDetail.release_date}
            </p>
            <p>
              <strong>Türler:</strong>{" "}
              {movieDetail.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>

        {/* Sağ Taraf */}
        <div className="md:col-span-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-bold text-center">Ekstra Detaylar</h2>
          <p>
            <strong>Orijinal Dil:</strong> {movieDetail.original_language}
          </p>
          <p>
            <strong>Popülerlik:</strong> {movieDetail.popularity.toFixed(2)}
          </p>
          <p>
            <strong>Bütçe:</strong>{" "}
            {movieDetail.budget
              ? `$${movieDetail.budget.toLocaleString()}`
              : "Bilinmiyor"}
          </p>
          <p>
            <strong>Gelir:</strong>{" "}
            {movieDetail.revenue
              ? `$${movieDetail.revenue.toLocaleString()}`
              : "Bilinmiyor"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
