import { CreateRecipeSchema } from '@/schema/recipe.schema';
import NextImage from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputField } from './form-fields/InputField';
import { TextareaField } from './form-fields/TextareaField';

function testImage(url: string, setImageUrl: (url: string) => void) {
  const tester = new Image();
  tester.onerror = () => setImageUrl('/placeholder.png')
  tester.onload= () => setImageUrl(url);
  tester.src=url;
}

type RecipeFormProps = {
  onSubmit: (values: CreateRecipeSchema) => void;
  children: ReactNode;
  values?: CreateRecipeSchema;
}

export function RecipeForm({
  children,
  onSubmit,
  values,
}: RecipeFormProps) {
  const [imageUrl, setImageUrl] = useState('/placeholder.png');
  const methods = useForm<CreateRecipeSchema>({ mode: 'onBlur', defaultValues: values });
  const { handleSubmit, watch } = methods;
  const imageWatch = watch('image');

  // TODO: make this more efficient
  useEffect(() => {
    testImage(imageWatch, setImageUrl)
  }, [imageWatch]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='xl:grid grid-cols-12 gap-4 bg-zinc-700'>
          <div className='col-span-7 px-8 py-4 xl:py-8 mt-[-2rem]'>
            <ol>
              <InputField name='name' label='Name' required />
              <InputField name='image' label='Image' required />
              <TextareaField name='description' label='description' required />
              
            </ol>
          </div>
          <div className='w-[20rem] xl:w-full col-span-5 flex flex-col items-center justify-end px-8 py-4 xl:py-8 relative'>
            <NextImage
              src={imageUrl}
              alt='Recipe image'
              width={864}
              height={648}
              className='max-w-full max-h-full object-cover'
            />
          </div>
        </div>
        <div>{children}</div>
      </form>
    </FormProvider>
  );
};
