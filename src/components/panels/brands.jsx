import React from 'react';

const Brands = props => {
	return (
		<div className='brands'>
			<a href="https://facebook.com/KRGameStudios"><img src="/img/logos/facebook.png" /></a>
			<a href="https://twitter.com/KRGameStudios"><img src="/img/logos/twitter.png" /></a>
			<a href="https://discord.gg/FQmz8TN"><img className='discord' src="img/logos/discord.png" /></a>
			<a href="https://www.patreon.com/krgamestudios"><img src="img/logos/patreon.png" /></a>
		</div>
	);
};

export default Brands;