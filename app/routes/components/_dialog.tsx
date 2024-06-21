import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ダイアログを開く</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ダイアログタイトル</DialogTitle>
          <DialogDescription>
            ダイアログの補助テキストが入ります。
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-4">
            <Label htmlFor="name">ラベル</Label>
            <Input id="name" />
          </div>
          <div className="grid gap-4">
            <Label htmlFor="username">ラベル</Label>
            <Input id="username" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">ボタン</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
