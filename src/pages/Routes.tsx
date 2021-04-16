import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'pages/Home'

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/home" component={Home} />
		</Switch>
	)
}
