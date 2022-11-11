import { CreateRecipeSchema } from '@/schema/recipe.schema';
import { Button } from '@/ui/button/Button';
import { PageHeader } from '@/ui/PageHeader';
import { RecipeForm } from '@/ui/RecipeForm';
import { trpc } from '@/utils/trpc';
import { useRouter } from 'next/router';
import React from 'react';

const defaultValues = {
  name: '',
  image: '',
  description: '',
};

function NewRecipePage() {
  const router = useRouter();

  const { mutate, error } = trpc.useMutation(['recipes.create'], {
    onSuccess: ({ id }) => {
      router.push(id);
    },
  });

  const submitFormData = (values: CreateRecipeSchema) => {
    mutate(values);
  };

  return (
    <>
      <PageHeader title='New Recipe' />
      <div className='relative pt-8'>
        <RecipeForm onSubmit={submitFormData} values={defaultValues}>
          <p className='py-4 full-w mt-[1.1rem] flex gap-4 align-center justify-start'>
            <Button>Add Recipe</Button>
            <Button path='/' hierarchy='tertiary'>
              Cancel
            </Button>
          </p>
        </RecipeForm>
      </div>
    </>
  );
}

export default NewRecipePage;
