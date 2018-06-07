import React from 'react';
import { Link } from 'react-router-dom';

const Header  = () => (
	<header id="header">
		<nav className="nav-wrapper">
			<div className="container">
				<Link className="brand-logo" to='/'>Logo</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><Link to='/'>Home page</Link></li>
					<li><Link to='/first'>First</Link></li>
				</ul>
			</div>
		</nav>
	</header>
)

export default Header;
