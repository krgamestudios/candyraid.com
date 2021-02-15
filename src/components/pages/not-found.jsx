import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
	return (
		<div className='page'>
			<h1 className='centered'>Page Not Found</h1>
			<img className='centered' src='/img/404.png' style={{maxWidth: '710px'}} />
			<Link className='centered' to='/'>Return Home</Link>
		</div>
	);
};

export default NotFound;
