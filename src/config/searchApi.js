import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// Kullanıcı arama sorgusuna göre filmleri çeken fonksiyon
export const fetchMoviesBySearch = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
        language: "tr-TR",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Arama sırasında bir hata oluştu:", error);
    return [];
  }
};
