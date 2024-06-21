import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Button } from '~/components/ui/button'

const formSchema = z.object({
  lastName: z.string().nonempty('姓は必須です'),
  firstName: z.string().nonempty('名は必須です'),
  lastNameKana: z.string().nonempty('姓（カタカナ）は必須です'),
  firstNameKana: z.string().nonempty('名（カタカナ）は必須です'),
  postalCode: z.string().nonempty('郵便番号は必須です'),
  prefecture: z.string().nonempty('都道府県は必須です'),
  phoneNumber: z.string().nonempty('電話番号は必須です'),
})

const FatherInformationForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      postalCode: '',
      prefecture: '',
      phoneNumber: '',
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="mx-auto my-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="text-2xl font-bold">
            父となる方の情報を入力してください
          </h1>

          <div className="grid gap-4">
            <h2 className="text-xl font-semibold">名前</h2>
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    姓 <span className="text-destructive">※必須</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    名 <span className="text-destructive">※必須</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastNameKana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    氏（カタカナ）{' '}
                    <span className="text-destructive">※必須</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstNameKana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    名（カタカナ）{' '}
                    <span className="text-destructive">※必須</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4">
            <h2 className="text-xl font-semibold">住所</h2>
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    郵便番号 <span className="text-destructive">※必須</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prefecture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    都道府県 <span className="text-destructive">※必須</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="選択なし" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tokyo">東京都</SelectItem>
                      <SelectItem value="osaka">大阪府</SelectItem>
                      {/* 他の都道府県をここに追加 */}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    電話番号 <span className="text-destructive">※必須</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4">
            <Button type="submit">次へ</Button>
            <Button variant="outline" type="button">
              戻る
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default FatherInformationForm
