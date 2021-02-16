import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Markdown from '../panels/markdown';

const BlurbTable = props => {
	return (
		<div>
			<hr />
			<div className='break double' />

			<div className='table'>
				<div className='row'>
					<img src='/img/presskit/crtfrender.png' className='col' />

					<div className='mobile hide gap' />

					<div className='col'>
						<strong><Markdown content={require('../../markdown/landing-below-fold.md').default} /></strong>
					</div>
				</div>
			</div>
		</div>
	);
};

const Landing = props => {
	const [open, setOpen] = useState(false);

	return (
		<div className='page'>
			< div className='break' />
			<div className='centered'>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/7DcsXKjTGeE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
			<div className='break' />
			<p className='centered prominent'><a href="https://www.nintendo.com/games/detail/candy-raid-the-factory-switch/">Switch</a> - <a href="https://store.steampowered.com/app/868880/Candy_Raid_The_Factory/">Steam</a> - <a href="https://www.trail.gg/games/candy_raid_the_factory">Trail</a></p>

			<div className='break double' />
			<p className='centered prominent'><Link to='/presskit'>Press Kit</Link></p>

			<div className='break double' />
			{ open ? <BlurbTable /> : null }

			{ open ? <div className='break double' /> : null }
			<p className='centered prominent small'><a onClick={() => setOpen(!open)}>{open ? 'Show Less' : 'Show More'}</a></p>
		</div>
	);
};

export default Landing;
