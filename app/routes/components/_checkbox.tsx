import { useEffect } from 'react'
import {
  Form,
  FormLabel,
  FormControl,
  FormItem,
  FormField,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Label, Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { Checkbox } from '~/components/ui/checkbox'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const items = [
  {
    id: 'movies',
    label: 'Movies',
  },
  {
    id: 'music',
    label: 'Music',
  },
  {
    id: 'books',
    label: 'Books',
  },
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
})

export function CheckboxDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['movies'],
    },
  })
  const formInvalid = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  })

  useEffect(() => {
    formInvalid.trigger()
  }, [formInvalid])

  return (
    <div className="grid grid-flow-col gap-4">
      <Form {...form}>
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => (
                    <FormItem
                      className="flex items-center space-x-2 space-y-0"
                      key={item.id}
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id,
                                  ),
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          )}
        />
      </Form>
      <Form {...form}>
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => (
                    <FormItem
                      className="flex items-center space-x-2 space-y-0"
                      key={item.id}
                    >
                      <FormControl>
                        <Checkbox
                          disabled={true}
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id,
                                  ),
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          )}
        />
      </Form>
      <Form {...formInvalid}>
        <FormField
          control={formInvalid.control}
          name="items"
          render={() => (
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={formInvalid.control}
                  name="items"
                  render={({ field }) => (
                    <FormItem
                      className="flex items-center space-x-2 space-y-0"
                      key={item.id}
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id,
                                  ),
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          )}
        />
      </Form>
    </div>
  )
}
