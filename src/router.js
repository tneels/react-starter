import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

import App from './components/App';
import First from './components/pages/first';



export default (
	<Route path="/" component={App} >
		<IndexRoute component={First} />
	</Route>
);
