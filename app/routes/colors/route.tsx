import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'Colors' }]
}

const colors = [
  ['bg-background', 'text-foreground', 'bg-foreground', 'text-background'],
  ['bg-card', 'text-card-foreground', 'bg-card-foreground', 'text-card'],
  [
    'bg-popover',
    'text-popover-foreground',
    'bg-popover-foreground',
    'text-popover',
  ],
  [
    'bg-primary',
    'text-primary-foreground',
    'bg-primary-foreground',
    'text-primary',
  ],
  [
    'bg-secondary',
    'text-secondary-foreground',
    'bg-secondary-foreground',
    'text-secondary',
  ],
  ['bg-muted', 'text-muted-foreground', 'bg-muted-foreground', 'text-muted'],
  [
    'bg-accent',
    'text-accent-foreground',
    'bg-accent-foreground',
    'text-accent',
  ],
  [
    'bg-destructive',
    'text-destructive-foreground',
    'bg-destructive-foreground',
    'text-destructive',
  ],
]

export default function Index() {
  return (
    <div className="p-4 font-sans">
      <div className="grid grid-flow-row justify-items-start gap-4">
        <h1 className="text-3xl">Colors</h1>
        {colors.map(
          ([bgColor, textColorforeground, bgColorforeground, textColor]) => (
            <div key={bgColor} className="grid grid-flow-col gap-4 [&>*]:p-2">
              <div className={bgColor}>
                <span className={textColorforeground}>{bgColor}</span>
              </div>
              <div className={bgColorforeground}>
                <span className={textColor}>{bgColorforeground}</span>
              </div>
            </div>
          ),
        )}
        <div className="grid grid-flow-col gap-4 [&>*]:p-2">
          <div className="border-2">
            <span>border</span>
          </div>
          <div className="border-2 border-input">
            <span>input</span>
          </div>
          <div className="border-2 border-ring">
            <span>ring</span>
          </div>
        </div>
      </div>
    </div>
  )
}
