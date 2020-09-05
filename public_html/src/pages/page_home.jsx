import React from 'react';
import { Link } from 'react-router-dom';

import PanelBrands from '../panels/panel_brands.jsx';

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <img src="/img/crtflogo.png" style={{width: "80%", marginBottom: "5%"}} />
        <center>
          <div className="videoWrapper">
            <iframe src="https://www.youtube.com/embed/7DcsXKjTGeE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div>
            <p><a href="https://www.nintendo.com/games/detail/candy-raid-the-factory-switch/">Switch</a> - <a href="https://store.steampowered.com/app/868880/Candy_Raid_The_Factory/">Steam</a></p>
          </div>
        </center>
        <hr />
        <div className="responsive">
          <img src="/img/crtfpromo.png" className="responsive" />
          <div style={{paddingLeft: '5px'}}>
            <p>Raid Milly Monk's Candy Factory for its secret, hidden sweets! Candy Raid: The Factory is a retro top-down puzzle and exploration game. You play the candy-happy witch Candy as she uses her elemental powers to solve puzzles and unlock secrets in her never-ending quest to sate her sweet tooth.</p>
            <ul>
              <li>Glorious retro pixel art in a top-down adventure style.</li>
              <li>Family-friendly non-violent puzzle action and adventure.</li>
              <li>Dozens of unique puzzles punctuated by sweet, sweet rewards.</li>
              <li>Harness the power of fire, ice, and wind magic as you wander around the world.</li>
              <li>Three unique areas to explore: the lively gumdrop gardens, the fiery lava kitchens, and the secret frozen vaults.</li>
            </ul>
            <p>We're aiming for an October release, but you can play the demo now!</p>
            <ul>
              <li><a href="https://www.nintendo.com/games/detail/candy-raid-the-factory-switch/">Candy Raid: The Factory Switch Page</a></li>
              <li><a href="https://store.steampowered.com/app/868880/Candy_Raid_The_Factory/">Candy Raid: The Factory Steam Page</a></li>
              <li><Link to="/demo">Candy Raid: The Factory Demo</Link></li>
              <li><a href="https://teespring.com/give-candy">Candy Raid Merchandise</a></li>
              <li><a href="https://teespring.com/candyraidnewt">Candy Raid Merchandise 2</a></li>
              <li><Link to="/presskit">Press Kit</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <PanelBrands />
      </div>
    );
  }
}

export default PageHome;

