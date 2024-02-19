import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@chain-reaction-ui/react'

export default {
  title: 'Surfaces/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae neque laboriosam repellat quaerat voluptates rem non dolores iste debitis. Consequatur quibusdam porro assumenda error rerum eligendi maiores illo quae?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
