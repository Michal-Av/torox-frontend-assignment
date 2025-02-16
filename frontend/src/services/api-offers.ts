import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const fetchOffers = async (page: number) => {
  const response = await axios.get(`${API_BASE_URL}/offers?page=${page}`);
  return response.data;
};
