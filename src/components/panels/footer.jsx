import React from 'react';

import Brands from './brands';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<div className='break half' />
			<p>Copyright <a href='http://krgamestudios.com'>KR Game Studios</a> 2018-{year}</p>
			<p>For Business Inquiries, Contact <a href='mailto:krgamestudios@gmail.com'>krgamestudios@gmail.com</a></p>
			<Brands />
		</footer>
	);
};

export default Footer;
