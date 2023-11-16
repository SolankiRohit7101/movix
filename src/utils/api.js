import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const tmdbToken = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + tmdbToken,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(baseUrl + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
