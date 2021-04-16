import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styledNormalize from 'styled-normalize'
import { Routes } from './Routes'

const GlobalStyle = createGlobalStyle`${styledNormalize}`

export const Main = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Routes />
			</Router>
		</>
	)
}
