import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Action to update the search term
  setSearchTerm: (term) =>
    set((state) => {
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes };
    }),

  // Action to initialize recipes (optional if recipes are fetched from an API)
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes, // Initialize filteredRecipes to include all recipes
    })),
}));

export default useRecipeStore;
