import { createRouter } from '../createRouter';
import { recipeRouter } from './recipe.router';

export const appRouter = createRouter().merge('recipes.', recipeRouter);

// export type AppRouter = typeof appRouter;

// import { createRouter } from '../createRouter'
// import { postRouter } from './post.router'
// import { userRouter } from './user.router'

// export const appRouter = createRouter()
// .merge('users.', userRouter)
// .merge('posts.', postRouter)

export type AppRouter = typeof appRouter;
