import { type StoryObj, type Meta } from '@storybook/react'
import { Accordion, type AccordionProps } from '../Accordion'

export default {
  component: Accordion,
} as Meta

export const Basic: StoryObj<AccordionProps> = {
  args: {
    type: 'single',
    items: [
      {
        id: 1,
        header: 'First area',
        content: 'A whole bunch of content hidden in here',
      },
      {
        id: 2,
        header: 'Second area',
        content: 'Some more content in here!',
      },
    ],
  },
}
