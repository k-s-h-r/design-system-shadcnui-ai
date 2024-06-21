import type { MetaFunction } from '@remix-run/node'
import { TabsDemo } from './_tabs'
import { AccordionDemo } from './_accordion'
import { RadioDemo } from './_radio'
import { ButtonDemo } from './_button'
import { CheckboxDemo } from './_checkbox'
import { SelectDemo } from './_select'
import { DialogDemo } from './_dialog'
import { AlertDemo } from './_alert'
import { TableDemo } from './_table'
import { TableDemo2 } from './_table2'

export const meta: MetaFunction = () => {
  return [{ title: 'Components' }]
}

export default function Index() {
  return (
    <div className="p-4 font-sans">
      <div className="grid grid-flow-row justify-items-start gap-12">
        <h1 className="text-3xl">Components</h1>
        <ButtonDemo />
        <RadioDemo />
        <CheckboxDemo />
        <SelectDemo />
        <TabsDemo />
        <AccordionDemo />
        <DialogDemo />
        <AlertDemo />
        <TableDemo />
        <TableDemo2 />
      </div>
    </div>
  )
}
