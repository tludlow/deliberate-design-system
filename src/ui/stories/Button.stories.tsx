import { type StoryObj, type Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { Button, type ButtonProps } from '../Button'

export default {
  component: Button,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  render: (props) => (
    <Button onClick={() => alert('Button has been clicked!')} {...props}>
      Button
    </Button>
  ),
  args: { variant: 'primary' },
}

export const PrimaryExternalLink: StoryObj<ButtonProps> = {
  render: (props) => (
    <Button href="https://bbc.co.uk" {...props}>
      External Link
    </Button>
  ),
  args: { variant: 'primary' },
}

export const Secondary: StoryObj<ButtonProps> = {
  render: (props) => (
    <Button onClick={() => alert('Button has been clicked!')} {...props}>
      Button
    </Button>
  ),
  args: { variant: 'secondary' },
}
