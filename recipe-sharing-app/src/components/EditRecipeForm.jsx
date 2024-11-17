import { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    // Prevents the form from reloading the page
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{
          display: "block",
          margin: "10px 0",
          padding: "5px",
          width: "100%",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={{
          display: "block",
          margin: "10px 0",
          padding: "5px",
          width: "100%",
          height: "100px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          background: "green",
          color: "white",
          border: "none",
        }}
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
