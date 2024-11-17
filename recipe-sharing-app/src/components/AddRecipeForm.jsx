import { useState } from "react";
import useRecipeStore from "../recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      addRecipe({ id: Date.now(), title, description });
      setTitle("");
      setDescription("");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add a Recipe</h2>
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
          background: "blue",
          color: "white",
          border: "none",
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
