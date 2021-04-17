import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'pages/Home'
import { CheckActiovationCode } from './CheckActivationCode'
import { Success } from './Success'

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/check-activation-code" component={CheckActiovationCode} />
			<Route path="/success" component={Success} />
		</Switch>
	)
}
