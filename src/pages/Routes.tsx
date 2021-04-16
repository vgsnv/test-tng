import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'pages/Home'
import { CheckActiovationCode } from './CheckActivationCode'

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/check-activation-code" component={CheckActiovationCode} />
		</Switch>
	)
}
