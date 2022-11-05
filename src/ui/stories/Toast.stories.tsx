import { type StoryObj, type Meta } from '@storybook/react'
import { Toaster } from 'react-hot-toast'

import { Button } from '../Button'
import { toast } from '../utils/toast'

export default {
  component: Button,
  decorators: [
    (Story) => (
      <div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
          }}
        />
        <Story />
      </div>
    ),
  ],
} as Meta

export const Success: StoryObj = {
  render: (props) => (
    <Button
      onClick={() =>
        toast.success('Success', 'You have won the game, that is very good to see from you.')
      }
    >
      Success Toast
    </Button>
  ),
}
