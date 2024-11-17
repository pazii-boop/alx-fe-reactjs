// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert("Recipe deleted!");
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: "10px 15px",
        background: "red",
        color: "white",
        border: "none",
        marginTop: "10px",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
