import React from 'react'
import { Button } from './index'

export default {
  title: 'Basic/Buttons',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Button {...args} />
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Activate'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Disable'
}
