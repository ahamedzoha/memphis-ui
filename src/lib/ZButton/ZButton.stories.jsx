import React from 'react'
import { ZButton } from 'memphis-ui'

export default {
  title: 'Custom Button',
  component: ZButton
}

export const Custom = () => (
  <ZButton>
    How's it going!{' '}
    <span role='img' aria-label='smily'>
      😄
    </span>
  </ZButton>
)
