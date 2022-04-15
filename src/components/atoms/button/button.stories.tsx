import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, IButton } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({
  children,
  ...args
}: IButton) => <Button {...args}>{children}</Button>

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  color: 'secondary',
}
