import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form'
  import { Input } from '@/components/ui/input'
  import type { FieldValues } from 'react-hook-form'
  import type { InputFormProps } from '@/app/types/components/inputForm'
  
  export const InputForm = <S extends FieldValues>({
    name,
    control,
    label,
    ...inputProps
  }: InputFormProps<S>) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                {...inputProps}
                onChange={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                disabled={field.disabled}
                name={field.name}
                ref={field.ref}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
  