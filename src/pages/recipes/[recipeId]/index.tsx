import { useRouter } from 'next/router';
import Image from 'next/image';
import { trpc } from '@/utils/trpc';
import { Button } from '@/ui/button/Button';
import { getAsString } from '@/lib/helpers';
import { PageHeader } from '@/ui/PageHeader';

function RecipeDetailPage() {
  const router = useRouter();
  const { recipeId } = router.query;

  const { data, error, isLoading } = trpc.useQuery([
    'recipes.getById',
    { recipeId: getAsString(recipeId) },
  ]);

  return (
    data && (
      <>
        <PageHeader title={data.name} />
        <div className='border-b-2 border-sky-500 relative py-4 flex align-center justify-between'>
          <Button path={`/`} size='small' hierarchy='tertiary'>
            {`Back to index`}
          </Button>
          <Button path={`/recipes/${data.id}/edit`} size='small'>
            Edit
          </Button>
        </div>
        <div className='lg:grid grid-cols-12 pt-8'>
          <div className='lg:col-span-5 xl:col-span-7'>
            <Image
              src={data.image}
              alt={data.name}
              width={864}
              height={648}
              className='max-w-full max-h-full object-contain'
              priority
            />
          </div>
          <div className='lg:col-span-7 xl:col-span-5'>
            <div className='w-full h-full text-white flex-1 text-xl leading-relaxed py-8 lg:py-0 lg:px-8 flex flex-col justify-end'>
              {data.description}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default RecipeDetailPage;
