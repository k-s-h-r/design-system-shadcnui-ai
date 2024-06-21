import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import {
  Form,
  FormLabel,
  FormControl,
  FromItem,
  FormItem,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Label, Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { useForm } from 'react-hook-form'

export function RadioDemo() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  return (
    <div className="grid grid-flow-col gap-4">
      <Form {...form}>
        <RadioGroup className="flex flex-col space-y-1">
          <FormItem className="flex items-center space-x-2 space-y-0">
            <FormControl>
              <RadioGroupItem value="male" />
            </FormControl>
            <FormLabel className="font-normal">Male</FormLabel>
          </FormItem>
          <FormItem className="flex items-center space-x-2 space-y-0">
            <FormControl>
              <RadioGroupItem value="female" />
            </FormControl>
            <FormLabel className="font-normal">Female</FormLabel>
          </FormItem>
          <FormItem className="flex items-center space-x-2 space-y-0">
            <FormControl>
              <RadioGroupItem value="other" />
            </FormControl>
            <FormLabel className="font-normal">Other</FormLabel>
          </FormItem>
        </RadioGroup>
      </Form>
    </div>
  )
}
