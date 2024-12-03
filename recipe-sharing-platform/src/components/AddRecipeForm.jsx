import React, { useState } from "react";
import "./AddRecipeForm.css";

// Validation function for the form
const validate = (title, ingredients, steps) => {
  const errors = {};
  if (!title.trim()) {
    errors.title = "Title is required.";
  }
  if (!ingredients.trim()) {
    errors.ingredients = "Ingredients are required.";
  } else if (ingredients.split(",").length < 2) {
    errors.ingredients = "Please enter at least two ingredients.";
  }
  if (!steps.trim()) {
    errors.steps = "Preparation steps are required.";
  }
  return errors;
};

const AddRecipeForm = () => {
  // State for form fields and validation
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = validate(title, ingredients, steps);

    if (Object.keys(newErrors).length === 0) {
      // If no errors, handle form submission logic (e.g., send data to an API or update state)
      console.log("Form submitted:", { title, ingredients, steps });
      alert("Recipe submitted successfully!");
      // Reset form fields
      setTitle("");
      setIngredients("");
      setSteps("");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-full md:max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Add New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter ingredients"
            rows="3"
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter preparation steps"
            rows="5"
          />
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
