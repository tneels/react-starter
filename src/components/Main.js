import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import First from './pages/first';

const Main = () => (
  	<main>
	    <Switch>
	      	<Route exact path='/' component={Home}/>
	      	<Route path='/first' component={First}/>
	    </Switch>
  	</main>
)

export default Main;
