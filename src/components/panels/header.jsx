import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to='/'><img src='/img/crtfheader.png' style={{objectFit: 'contain', maxWidth: '100%'}} /></Link>
		</header>
	);
};

export default Header;
