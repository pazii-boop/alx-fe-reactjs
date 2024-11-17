import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // Recipe data
  favorites: [], // Array of favorite recipe IDs
  recommendations: [], // Array of recommended recipes

  // Add recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Remove recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const favoriteRecipes = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );

      // Example recommendation logic (mocked)
      const recommendations = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );

      return { recommendations };
    }),
}));

export default useRecipeStore;
