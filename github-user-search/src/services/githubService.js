import axios from "axios";

// Create an Axios instance for GitHub API requests
const apiClient = axios.create({
  baseURL: "https://api.github.com", // GitHub API base URL
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

/**
 * Fetch user data by username
 * @param {string} username - GitHub username to search
 * @returns {Promise<Object>} - User data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

/**
 * Fetch advanced search results
 * @param {string} query - Advanced search query (e.g., user:username+location:location+repos:>=count)
 * @returns {Promise<Object>} - Search results containing matching users
 */
export const fetchAdvancedSearchResults = async (query) => {
  try {
    const response = await apiClient.get(`/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching advanced search results:", error);
    throw error;
  }
};
