import { type StoryObj, type Meta } from '@storybook/react'
import { Modal, type ModalProps } from '../Modal'

export default {
  component: Modal,
  argTypes: { fullWidth: { control: 'boolean' } },
} as Meta

export const Generic: StoryObj<ModalProps> = {
  args: {
    children: 'Some text for the modal',
    fullWidth: false,
  },
}
