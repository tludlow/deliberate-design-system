import { type StoryObj, type Meta } from '@storybook/react'
import { Tooltip, type TooltipProps } from '../Tooltip'

export default {
  component: Tooltip,
} as Meta

export const Default: StoryObj<TooltipProps> = {
  args: {
    delay: 200,
  },
}
