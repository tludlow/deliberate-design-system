import { cva, type VariantProps } from 'class-variance-authority'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { IconChevronDown } from '@tabler/icons'

const accordionStyles = cva([], {
  variants: {},
  defaultVariants: {},
})

interface Item {
  id: number
  header: string
  content: React.ReactNode
}

export interface AccordionProps extends VariantProps<typeof accordionStyles> {
  /**
   * Structure content prop used to display the accordion information
   */
  items: Item[]

  type: React.ComponentProps<typeof AccordionPrimitive.Root>['type']
}

export function Accordion({ items, type }: AccordionProps) {
  return (
    <AccordionPrimitive.Root type={type}>
      <div className="space-y-2">
        {items.map((item) => (
          <AccordionPrimitive.Item value={item.header} key={item.id}>
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger asChild>
                <div className="flex justify-between align-bottom p-2 rounded border border-gray-400 group">
                  {item.header}
                  <IconChevronDown className="h-5 w-5 text-gray-600 group-radix-state-open:rotate-180 group-radix-state-open:duration-200" />
                </div>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content>{item.content}</AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </div>
    </AccordionPrimitive.Root>
  )
}
