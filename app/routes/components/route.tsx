import type { MetaFunction } from '@remix-run/node'
import { Button } from '~/components/ui/button'

export const meta: MetaFunction = () => {
  return [{ title: 'Components' }]
}

export default function Index() {
  return (
    <div className="p-4 font-sans">
      <div className="grid grid-flow-row justify-items-start gap-4">
        <h1 className="text-3xl">Components</h1>
        <div className="grid grid-flow-col gap-4">
          <Button variant="default">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="destructive">Button</Button>
          <Button variant="link">Button</Button>
          <Button variant="ghost">Button</Button>
        </div>
        <p className="bg-black text-primary-foreground">test</p>
        <p className="text-primary-foreground">test</p>
      </div>
    </div>
  )
}
