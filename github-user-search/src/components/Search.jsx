import React, { useState } from "react";
import {
  fetchUserData,
  fetchAdvancedSearchResults,
} from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState(""); // Holds the search query for advanced searches
  const [users, setUsers] = useState([]); // Array to hold multiple user results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handle form submission for advanced search
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]); // Clear previous results

    try {
      const data = await fetchAdvancedSearchResults(query); // Fetch multiple users
      setUsers(data.items || []); // Populate users array
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter search query (e.g., location:Nairobi repos:>10)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong. Please try again.</p>}
      {!loading && !error && users.length === 0 && <p>No users found.</p>}

      {/* Render User Cards */}
      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded-md shadow-sm flex flex-col items-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full"
              />
              <h2 className="text-center text-lg mt-2">{user.login}</h2>
              <p className="text-center">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
