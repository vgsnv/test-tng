import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { Routes } from './Routes'

import { Fonts } from 'constants/fonts'

const GlobalStyle = createGlobalStyle`${styledNormalize}`
const FontsStyle = createGlobalStyle`${Fonts}`

export const Main = () => {
	return (
		<>
			<GlobalStyle />
			<FontsStyle />
			<Router>
				<Routes />
			</Router>
		</>
	)
}
