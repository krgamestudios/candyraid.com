import React from 'react';
import Markdown from '../panels/markdown';

const PressKit = props => {
	return (
		<div className='page'>
			<Markdown content={require('../../markdown/press-kit.md').default} />
		</div>
	);
};

export default PressKit;