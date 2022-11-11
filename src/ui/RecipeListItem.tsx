import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/ui/button/Button';
import { RecipeSchema } from '@/schema/recipe.schema';

type RecipeListItemProps = {
  recipe: RecipeSchema;
  onDelete: (id: string) => void;
};

export function RecipeListItem({
  recipe: { id, name, description, image },
  onDelete
}: RecipeListItemProps) {
  return (
    <li className=' border-b-2 border-white'>
      <div className='flex flex-row gap-4 py-8'>
        <div className='relative base-[150px] flex-0'>
          <Link href={`recipes/${id}`}>
            <Image
              src={image}
              alt={name}
              width={150}
              height={150}
              className='max-w-full max-h-full object-cover'
            />
          </Link>
        </div>
        <div className='flex-1 text-white overflow-hidden'>
          <Link href={`recipes/${id}`}>
            <h3 className='mb-3 leading-none text-xl font-medium text-sky-500'>
              {name}
            </h3>
          </Link>
          <p className='truncate text-ellipsis overflow-hidden ...'>
            {description}
          </p>
          <div className='flex gap-4 mt-4'>
            <Button path={`recipes/${id}/edit`} size='small'>
              Edit
            </Button>
            <Button
              hierarchy='secondary'
              size='small'
              handleClick={() => onDelete(id as string)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
