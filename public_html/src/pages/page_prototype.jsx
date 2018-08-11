import React from 'react';

import PanelUnity from '../panels/panel_unity.jsx';

class PagePrototype extends React.Component {
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
        <center>
          <p><strong>WARNING:</strong> This is Candy Raid: The Factory's <strong>PROTOTYPE</strong>. It does not reflect the current state of the game.</p>
        </center>
        <PanelUnity name='prototype' width='960px' height='600px' />
      </div>
    );
  }
}

export default PagePrototype;
