import { useRouter } from 'next/router';
import { trpc } from '@/utils/trpc';
import { Button } from '@/ui/button/Button';
import { RecipeListItem } from '@/ui/RecipeListItem';
import { PageHeader } from '@/ui/PageHeader';

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = trpc.useQuery(['recipes.getAll']);
  const { mutate } = trpc.useMutation(['recipes.destroy'], {
    onSuccess: () => {
      router.push('/');
    },
  });

  const handleDelete = (recipeId: string) => {
    mutate({ recipeId });
  };

  return (
    <>
      <PageHeader title='My Recipes'>
        <Button path='recipes/new'>New Recipe</Button>
      </PageHeader>
      <ul>
        {data?.map((recipe) => (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
}
