import { create } from '@storybook/theming/create'
import logo from './logo.png'

export default create({
  base: 'light',
  colorPrimary: 'blue',
  colorSecondary: 'orange',
  appBorderRadius: 8,
  brandTitle: 'memphis-ui',
  brandUrl: '/',
  brandImage: logo
})
