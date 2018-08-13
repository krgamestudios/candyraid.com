import React from 'react';

import PanelUnity from '../panels/panel_unity.jsx';

class PageSugarCrash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let flexStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div style={flexStyle}>
        <PanelUnity name='candyraidsugarcrash' width='800px' height='600px' />
      </div>
    );
  }
}

export default PageSugarCrash;
