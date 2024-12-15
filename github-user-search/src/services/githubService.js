import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
});

export const fetchUserData = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
