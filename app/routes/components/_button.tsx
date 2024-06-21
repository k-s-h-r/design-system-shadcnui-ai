import { Button } from '~/components/ui/button'

export function ButtonDemo() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-flow-col gap-4">
        <Button variant="default" size="sm">
          Button
        </Button>
        <Button variant="secondary" size="sm">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="destructive" size="sm">
          Button
        </Button>
        <Button variant="link" size="sm">
          Button
        </Button>
        <Button variant="ghost" size="sm">
          Button
        </Button>
      </div>
      <div className="grid grid-flow-col gap-4">
        <Button variant="default">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="link">Button</Button>
        <Button variant="ghost">Button</Button>
      </div>
      <div className="grid grid-flow-col gap-4">
        <Button variant="default" size="lg">
          Button
        </Button>
        <Button variant="secondary" size="lg">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="destructive" size="lg">
          Button
        </Button>
        <Button variant="link" size="lg">
          Button
        </Button>
        <Button variant="ghost" size="lg">
          Button
        </Button>
      </div>
    </div>
  )
}
