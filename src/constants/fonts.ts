import { css } from 'styled-components'

const PTMonoRegular = require('assets/fonts/Nunito_Sans/NunitoSans-Black.ttf')

export const Fonts = `
  @font-face {
      font-family: 'PTMonoRegular';
      src: url(${PTMonoRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
  }
`

export const FontPTMonoRegular = css`
	font-family: 'PTMonoRegular', sans-serif;
	font-weight: 400;
`
