import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert("Recipe deleted!");
    navigate("/"); // Redirect to the home page or recipes list after deletion
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
        cursor: "pointer",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
