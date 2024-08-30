import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipesSliceType } from "./recipeSlice"
import { FavoriteSliceType, createFavoritesSlice } from "./favoritesSlice";

export const useAppStore = create<RecipesSliceType & FavoriteSliceType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),

  }))
);
