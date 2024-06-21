import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { useForm } from 'react-hook-form'

const HomePage = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* グローバルメニュー */}
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex items-center justify-between">
            <li>
              <a href="/" className="text-2xl font-bold">
                Company Logo
              </a>
            </li>
            <li className="flex space-x-4">
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#services" className="hover:underline">
                Services
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* お知らせエリア */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>お知らせ</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">2024/06/22:</span>{' '}
                  新製品発売のお知らせ
                </li>
                <li>
                  <span className="font-semibold">2024/06/15:</span>{' '}
                  夏季休業のお知らせ
                </li>
                <li>
                  <span className="font-semibold">2024/06/01:</span>{' '}
                  新しいオフィスへの移転完了
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Pickupエリア */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">ピックアップ</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>製品A</CardTitle>
              </CardHeader>
              <CardContent>
                <p>革新的な機能を搭載した最新製品です。</p>
                <Button className="mt-4">詳細を見る</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>サービスB</CardTitle>
              </CardHeader>
              <CardContent>
                <p>お客様のニーズに合わせたカスタムソリューション。</p>
                <Button className="mt-4">詳細を見る</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>キャンペーンC</CardTitle>
              </CardHeader>
              <CardContent>
                <p>期間限定の特別オファーをお見逃しなく。</p>
                <Button className="mt-4">詳細を見る</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Usエリア */}
        <section id="contact" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お名前</FormLabel>
                        <FormControl>
                          <Input placeholder="山田 太郎" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>メールアドレス</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>メッセージ</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="お問い合わせ内容をご記入ください"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">送信</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-secondary py-4 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
