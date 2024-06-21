import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Calendar } from '~/components/ui/calendar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'

const favoriteOptions = ['music', 'movies', 'books', 'sports', 'food'] as const

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  birthDate: z.date({
    required_error: 'A birth date is required.',
  }),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Please select a gender.',
  }),
  favorites: z.array(z.enum(favoriteOptions)).min(1, {
    message: 'Please select at least one favorite.',
  }),
})

type FormValues = z.infer<typeof formSchema>

const UserProfileEdit: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [tempFavorite, setTempFavorite] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      favorites: [],
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    // Here you would typically send the data to your backend
  }

  const handleAddFavorite = () => {
    if (tempFavorite) {
      const currentFavorites = form.getValues('favorites')
      form.setValue('favorites', [
        ...currentFavorites,
        tempFavorite as (typeof favoriteOptions)[number],
      ])
      setTempFavorite(null)
      setIsDialogOpen(false)
    }
  }

  return (
    <div className="mx-auto my-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-6 text-2xl font-bold">Edit User Profile</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Birth Date</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    className="rounded-md border"
                  />
                </FormControl>
                {field.value && (
                  <div className="mt-2 rounded bg-gray-100 p-2">
                    Selected Date: {field.value.toLocaleDateString()}
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="male" />
                      </FormControl>
                      <FormLabel className="font-normal">Male</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="font-normal">Female</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="other" />
                      </FormControl>
                      <FormLabel className="font-normal">Other</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="favorites"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Favorites</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-2">
                    {field.value.map((fav, index) => (
                      <span
                        key={index}
                        className="rounded bg-gray-200 px-2 py-1"
                      >
                        {fav}
                      </span>
                    ))}
                  </div>
                </FormControl>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button type="button" variant="outline" className="mt-2">
                      Add Favorite
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add a Favorite</DialogTitle>
                    </DialogHeader>
                    <Select onValueChange={setTempFavorite}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a favorite" />
                      </SelectTrigger>
                      <SelectContent>
                        {favoriteOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={handleAddFavorite} className="mt-4">
                      Confirm
                    </Button>
                  </DialogContent>
                </Dialog>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default UserProfileEdit
