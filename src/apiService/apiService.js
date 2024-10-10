import axios from "axios";

const API_KEY = "mj37NY3H-sIFFcw4OqLcFSNvC9sTckof4I6GPoNBDZk";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const getPhotos = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      orientation: "landscape",
      client_id: API_KEY,
      query,
      page,
      per_page: 12,
    },
  });
  console.log(response.data);
  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
