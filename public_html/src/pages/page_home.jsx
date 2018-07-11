import React from 'react';

import PanelBrands from '../panels/panel_brands.jsx';

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <img src="/img/crtflogo.png" />
        <div className="responsive">
          <img src="/img/crtfpromo.png" className="responsive" />
          <div style={{paddingLeft: '5px'}}>
            <p>Milly Monka's Candy Factory is the biggest producer of candy in the whole world. So naturally, she set up traps and defenses to protect her factory from thieves. One such thief is Candy the witch - a powerful witch with a powerful sweet tooth.</p>
            <p>Candy must make her way through each section of the factory - the gumdrop gardens, the lava kitchens and the frozen vaults - to steal as much candy as possible!</p>
            <p>We're aiming for an October release, but you can play the demo now!</p>
            <ul>
              <li><a href="https://krgamestudios.com/candyraid">Candy Raid: The Factory Demo</a></li>
              <li><a href="https://krgamestudios.com/candyraid/presskit">Press Kit</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <center>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7DcsXKjTGeE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </center>
        <hr />
        <PanelBrands />
      </div>
    );
  }
}

export default PageHome;

