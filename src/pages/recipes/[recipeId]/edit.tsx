import { useRouter } from 'next/router';
import { trpc } from '@/utils/trpc';
import { Button } from '@/ui/button/Button';
import { getAsString } from '@/lib/helpers';
import { PageHeader } from '@/ui/PageHeader';
import { CreateRecipeSchema } from '@/schema/recipe.schema';
import { RecipeForm } from '@/ui/RecipeForm';

function EditRecipePage() {
  const router = useRouter();
  const recipeId = getAsString(router.query.recipeId);

  const { data, error: queryError, isLoading } = trpc.useQuery([
    'recipes.getById',
    { recipeId: recipeId },
  ]);

  const { mutate, error: mutationError } = trpc.useMutation(['recipes.update'], {
    onSuccess: ({ id }) => {
      router.push(`/recipes/${recipeId}`);
    },
  });

  const submitFormData = (values: CreateRecipeSchema) => {
    mutate({...values, id: recipeId});
  };

  return (data && 
    <>
      <PageHeader title='New Recipe' />
      <div className='relative pt-8'>
        <RecipeForm onSubmit={submitFormData} values={{...data}}>
        <p className='py-4 full-w mt-[1.1rem] flex gap-4 align-center justify-start'>
            <Button>Update Recipe</Button>
            <Button path='/' hierarchy='tertiary'>
              Cancel
            </Button>
          </p>
        </RecipeForm>
      </div>
    </>
  );
}

export default EditRecipePage;
