import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
});

export const fetchAdvancedSearchResults = async (query) => {
  try {
    const response = await apiClient.get(`/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching advanced search results:", error);
    throw error;
  }
};
