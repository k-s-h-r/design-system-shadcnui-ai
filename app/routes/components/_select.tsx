import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

const favoriteOptions = ['music', 'movies', 'books', 'sports', 'food'] as const

export function SelectDemo() {
  return (
    <div className="grid gap-4">
      <Select>
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
    </div>
  )
}
