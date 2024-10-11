import axios from "axios";

const API_KEY = "mj37NY3H-sIFFcw4OqLcFSNvC9sTckof4I6GPoNBDZk";
const BASE_URL = "https://api.unsplash.com/search/photos";

export interface IPhoto {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
    location: string;
  };
  likes: number;
}

export interface GetPhotos {
  results: IPhoto[];
  total: number;
  total_pages: number;
  per_page: number;
}

export const getPhotos = async (
  query: string,
  page: number
): Promise<GetPhotos> => {
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
    total: response.data.total,
    total_pages: response.data.total_pages,
    per_page: response.data.per_page,
  };
};
