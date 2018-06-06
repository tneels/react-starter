import React from 'react';
import { Link } from 'react-router-dom';

const Header  = () => (
	<header id="header">
		<div className="container">
			<Link to='/'>Home page</Link>
			<Link to='/first'>First</Link>
		</div>
	</header>
)

export default Header;
