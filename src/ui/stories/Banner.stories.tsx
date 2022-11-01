import { type Meta, type StoryObj } from '@storybook/react';
import { Banner, type BannerProps } from '../Banner';

export default {
    component: Banner,
} as Meta;

export const Success: StoryObj<BannerProps> = {
    args: {
        variant: 'success',
        children: 'Some positive text to have in this banner',
    },
};

export const Error: StoryObj<BannerProps> = {
    args: {
        variant: 'error',
        children: 'Some error text to have in this banner',
    },
};