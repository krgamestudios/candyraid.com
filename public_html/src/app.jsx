import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GA from './utils/google_analytics.jsx';

import PanelFooter from './panels/panel_footer.jsx';

import PageHome from './pages/page_home.jsx';
import PageDemo from './pages/page_demo.jsx';
import PagePrototype from './pages/page_prototype.jsx';
import PagePresskit from './pages/page_presskit.jsx';
import PageNotFound from './pages/page_not_found.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='central'>
        <BrowserRouter>
          <div className="page">
            { GA.init() && <GA.RouteTracker /> }
            <Switch>
              <Route exact path='/' component={PageHome} />
              <Route exact path='/demo' component={PageDemo} />
              <Route exact path='/prototype' component={PagePrototype} />
              <Route exact path='/presskit' component={PagePresskit} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
        <PanelFooter />
      </div>
    );
  }
}

export default App;
