import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
});

export const fetchGitHubUser = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};
