//react
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

//library components
import LazyRoute from './lazy-route';

//styling
//TODO: styling import

//common components
import Header from './panels/header.jsx';
import Footer from './panels/footer.jsx';

const App = props => {
	//default render
	return (
		<BrowserRouter>
				<Header />
				<div className='central'>
					<Switch>
						<LazyRoute exact path='/' component={() => import('./pages/landing')} />
						<LazyRoute path='/presskit' component={() => import('./pages/presskit')} />

						<LazyRoute path='*' component={() => import('./pages/not-found')} />
					</Switch>
				</div>
				<Footer />
		</BrowserRouter>
	);
};

export default App;
