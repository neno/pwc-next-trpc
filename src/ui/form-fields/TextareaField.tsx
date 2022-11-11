import { FieldError, useFormContext } from 'react-hook-form';
import { FieldWrap } from './FieldWrap';
import clsxm from '@/lib/clsxm';
import { FormFieldProps } from './FormField.types';

export function TextareaField({ name, label, required }: FormFieldProps) {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;
  const error = errors[name] as FieldError;

  return (
    <FieldWrap name={name} label={label} required={required}>
      <textarea
        {...register(name, { required: 'This field is required' })}
        id={name}
        rows={5}
        className={clsxm('inline-block w-full p-2', {
          'bg-orange-200': !!error,
        })}
      />
    </FieldWrap>
  );
};
