import React from 'react'
import { ZButton } from 'memphis-uix'

export default {
  title: 'IM',
  component: ZButton
}

export const Custom = () => (
  <ZButton text="How's it going! 😄">
    How's it going!{' '}
    <span role='img' aria-label='smily'>
      😄
    </span>
  </ZButton>
)
