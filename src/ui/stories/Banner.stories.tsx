import type { StoryObj, Meta } from '@storybook/react'
import { Banner } from '../Banner'
import type { BannerProps } from '../Banner'
import { IconRocket } from '@tabler/icons'

export default {
  component: Banner,
} as Meta

export const Success: StoryObj<BannerProps> = {
  args: {
    variant: 'success',
    children: 'Some positive text to have in this banner',
  },
}

export const Error: StoryObj<BannerProps> = {
  args: {
    variant: 'error',
    children: 'Some error text to have in this banner',
  },
}

export const CustomIcon: StoryObj<BannerProps> = {
  args: {
    variant: 'success',
    children: 'You can provide a react component which is used as the icon',
    icon: <IconRocket />,
  },
}

export const FullWidth: StoryObj<BannerProps> = {
  args: {
    variant: 'success',
    children: 'Some positive text to have in this banner',
    fullWidth: true,
  },
}

export const Centered: StoryObj<BannerProps> = {
  args: {
    variant: 'success',
    children: 'Some positive text to have in this banner',
    fullWidth: true,
    align: 'center',
  },
}
