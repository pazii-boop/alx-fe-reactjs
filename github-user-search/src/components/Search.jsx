import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Fetch user data using fetchUserData
      setUserData(data);
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
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      {error && <p>Looks like we can't find the user.</p>}
      {userData && (
        <div className="p-4 border rounded-md shadow-sm mt-4">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-center text-lg">
            {userData.name || userData.login}
          </h2>
          <p className="text-center">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
