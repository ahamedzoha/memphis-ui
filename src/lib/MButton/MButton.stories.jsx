import React from 'react'
import { MButton } from './index'

export default {
  title: 'Buttons',
  component: MButton
}

export const Primary = () => (
  <MButton variant='primary'>
    How's it going!
    <span role='img' aria-label='smily'>
      😄
    </span>
  </MButton>
)

export const Secondary = () => (
  <MButton variant='secondary'>
    How's it going!
    <span role='img' aria-label='smily'>
      😄
    </span>
  </MButton>
)
