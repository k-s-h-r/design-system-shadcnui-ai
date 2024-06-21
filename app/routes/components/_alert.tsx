import { CircleCheckBig, CircleX } from 'lucide-react'
import { CircleX } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'

export function AlertDemo() {
  return (
    <div className="grid gap-4">
      <Alert>
        <CircleCheckBig className="h-6 w-6" />
        <AlertTitle>登録手続きは全て完了しました</AlertTitle>
        <AlertDescription>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleX className="h-6 w-6" />
        <AlertTitle>操作を完了できませんでした</AlertTitle>
        <AlertDescription>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </AlertDescription>
      </Alert>
    </div>
  )
}
