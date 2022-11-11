import { recipeSchema } from './../../schema/recipe.schema';
import {
  createRecipeSchema,
  getRecipeByIdSchema,
} from '@/schema/recipe.schema';
import { prismaClient } from '@/utils/prisma';
import { createRouter } from '../createRouter';

export const recipeRouter = createRouter()
  .query('getAll', {
    resolve() {
      return prismaClient.recipe.findMany();
      // return new Promise(resolve => setTimeout(() => resolve(data), 2000));
    },
  })
  .query('getById', {
    input: getRecipeByIdSchema,
    resolve({ input }) {
      return prismaClient.recipe.findFirst({ where: { id: input.recipeId } });
    },
  })
  .mutation('create', {
    input: createRecipeSchema,
    async resolve({ input }) {
      const recipe = await prismaClient.recipe.create({ data: input });
      return recipe;
    },
  })
  .mutation('update', {
    input: recipeSchema,
    async resolve({ input }) {
      const recipe = await prismaClient.recipe.update({ data: input, where: {id: input.id} });
      return recipe;
    },
  })
  .mutation('destroy', {
    input: getRecipeByIdSchema,
    async resolve({ input }) {
      return await prismaClient.recipe.delete({where: {id: input.recipeId} });
    },
  });

export type AppRouter = typeof recipeRouter;
