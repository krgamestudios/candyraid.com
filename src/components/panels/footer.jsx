import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>Copyright <a href='http://krgamestudios.com' style={{color: 'blue'}}>KR Game Studios</a> 2018-{year}</p>
		</footer>
	);
};

export default Footer;
