import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@chain-reaction-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/salvatoreDeploy.png',
    alt: 'Henrique Araujo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
