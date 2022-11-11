import { object, string, TypeOf } from 'zod';

export const createRecipeSchema = object({
  name: string(),
  image: string(),
  description: string(),
});

export const recipeSchema = object({
  id: string(),
  name: string(),
  image: string(),
  description: string(),
});

export const getRecipeByIdSchema = object({ recipeId: string() });

export type CreateRecipeSchema = TypeOf<typeof createRecipeSchema>;
export type RecipeSchema = TypeOf<typeof recipeSchema>;