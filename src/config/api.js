import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const fetchMoviesByCategory = async (categoryKey) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${categoryKey}`, {
      params: {
        api_key: API_KEY,
        language: "tr-TR",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(`${categoryKey} filmleri çekerken hata oluştu:`, error);
    return [];
  }
};
