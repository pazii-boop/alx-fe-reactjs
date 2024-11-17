import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import AddRecipeForm from "./components/AddRecipeForm"; // Import AddRecipeForm

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm /> {/* Include AddRecipeForm */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
