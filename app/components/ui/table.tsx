import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/lib/utils'

const tableVariants = cva('w-full caption-bottom', {
  variants: {
    variant: {
      default: 'text-sm',
      normal: 'text-base border',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
const TableContext = React.createContext<VariantProps<typeof tableVariants>>({
  variant: 'default',
})

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & VariantProps<typeof tableVariants>
>(({ className, variant, ...props }, ref) => (
  <TableContext.Provider value={{ variant }}>
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn(tableVariants({ variant, className }))}
        {...props}
      />
    </div>
  </TableContext.Provider>
))
Table.displayName = 'Table'

const tableHeaderVariants = cva('[&_tr]:border-b', {
  variants: {
    variant: {
      default: '',
      normal: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> &
    VariantProps<typeof tableHeaderVariants>
>(({ className, variant, ...props }, ref) => {
  const context = React.useContext(TableContext)
  return (
    <thead
      ref={ref}
      className={cn(
        tableHeaderVariants({
          variant: context.variant || variant,
        }),
        className,
      )}
      {...props}
    />
  )
})

TableHeader.displayName = 'TableHeader'

const tableBodyVariants = cva('[&_tr:last-child]:border-0', {
  variants: {
    variant: {
      default: '',
      normal: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> &
    VariantProps<typeof tableBodyVariants>
>(({ className, variant, ...props }, ref) => {
  const context = React.useContext(TableContext)
  return (
    <tbody
      ref={ref}
      className={cn(
        tableBodyVariants({
          variant: context.variant || variant,
        }),
        className,
      )}
      {...props}
    />
  )
})
TableBody.displayName = 'TableBody'

const tableFooterVariants = cva(
  'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
  {
    variants: {
      variant: {
        default: '',
        normal: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> &
    VariantProps<typeof tableFooterVariants>
>(({ className, variant, ...props }, ref) => {
  const context = React.useContext(TableContext)
  return (
    <tfoot
      ref={ref}
      className={cn(
        tableFooterVariants({
          variant: context.variant || variant,
        }),
        className,
      )}
      {...props}
    />
  )
})
TableFooter.displayName = 'TableFooter'

const tableRowVariants = cva('data-[state=selected]:bg-muted', {
  variants: {
    variant: {
      default: 'border-b transition-colors hover:bg-muted/50',
      normal: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> &
    VariantProps<typeof tableRowVariants>
>(({ className, variant, ...props }, ref) => {
  const context = React.useContext(TableContext)
  return (
    <tr
      ref={ref}
      className={cn(
        tableRowVariants({
          variant: context.variant || variant,
        }),
        className,
      )}
      {...props}
    />
  )
})
TableRow.displayName = 'TableRow'

const tableHeadVariants = cva(
  'px-4 text-left align-middle [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      variant: {
        default: 'h-12 font-medium text-muted-foreground',
        normal: 'h-20 border bg-primary/10 font-normal',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> &
    VariantProps<typeof tableHeadVariants>
>(({ className, variant, ...props }, ref) => {
  const context = React.useContext(TableContext)
  return (
    <th
      ref={ref}
      className={cn(
        tableHeadVariants({
          variant: context.variant || variant,
        }),
        className,
      )}
      {...props}
    />
  )
})
TableHead.displayName = 'TableHead'

const tableCellVariants = cva(
  'p-4 align-middle [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      variant: {
        default: '',
        normal: 'border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> &
    VariantProps<typeof tableCellVariants>
>(({ className, variant, ...props }, ref) => {
  const context = React.useContext(TableContext)

  return (
    <td
      ref={ref}
      className={cn(
        tableCellVariants({
          variant: context.variant || variant,
        }),
        className,
      )}
      {...props}
    />
  )
})
TableCell.displayName = 'TableCell'

const tableCaptionVariants = cva('', {
  variants: {
    variant: {
      default: 'mt-4 text-sm text-muted-foreground',
      normal: 'mt-4 text-base text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> &
    VariantProps<typeof tableCaptionVariants>
>(({ className, variant, ...props }, ref) => {
  const context = React.useContext(TableContext)
  return (
    <caption
      ref={ref}
      className={cn(
        tableCaptionVariants({
          variant: context.variant || variant,
        }),
        className,
      )}
      {...props}
    />
  )
})
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
