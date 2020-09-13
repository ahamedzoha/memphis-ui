import React from 'react'
import { Button } from './index'

export default {
  title: 'Buttons',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Button {...args} />
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary Button! 😄 '
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button!  '
}
