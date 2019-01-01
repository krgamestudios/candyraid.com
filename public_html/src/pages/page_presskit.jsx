import React from 'react';
import { Link } from 'react-router-dom';

class PageAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let imageStyle = {
      width: 'auto',
      height: '60px',
      margin: '5px',
      borderStyle: 'solid',
      borderColor: 'black'
    };

    return (
      <div className='page'>
        <h1>Candy Raid: The Factory Press Kit</h1>
        <h2>Synopsis</h2>
        <p><strong>Release date:</strong> October 1st 2018</p>
        <p>
          <strong>Gameplay, Programming:</strong> Kayne Ruse<br />
          <strong>Art:</strong> Evan Hartshorn<br />
          <strong>Soundtrack, Sound Effects:</strong> Luis Paez
        </p>

        <p>The prototype for Candy Raid was created in 3 days for Ludum Dare 41. Our team of two knew from the start that we had something special on our hands, so we rebuilt the game from the ground up, while retaining it's core elements.</p>
        <p>After contracting Luis, we released the first demo, which can be played here:<br /><Link to="/demo">Candy Raid: The Factory Demo</Link></p>
        <p>The store page can be found here:<br /><a href="https://store.steampowered.com/app/868880/Candy_Raid_The_Factory/">Candy Raid: The Factory Store Page</a></p>

        <hr />

        <h2>Blurb</h2>
             <p>Raid Milly Monk's Candy Factory for its secret, hidden sweets! Candy Raid: The Factory is a retro top-down puzzle and exploration game. You play the candy-happy witch Candy as she uses her elemental powers to solve puzzles and unlock secrets in her never-ending quest to sate her sweet tooth.</p>
            <ul>
              <li>Glorious retro pixel art in a top-down adventure style.</li>
              <li>Family-friendly non-violent puzzle action and adventure.</li>
              <li>Dozens of unique puzzles punctuated by sweet, sweet rewards.</li>
              <li>Harness the power of fire, ice, and wind magic as you wander around the world.</li>
              <li>Three unique areas to explore: the lively gumdrop gardens, the fiery lava kitchens, and the secret frozen vaults.</li>
            </ul>

        <hr />

        <h2>Trailer</h2>
        <center>
          <div className="videoWrapper">
            <iframe src="https://www.youtube.com/embed/7DcsXKjTGeE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </center>

        <hr />

        <h2>Screenshots</h2>
        <div className="responsive">
          <a href="/img/crtfscreenshot_01.png" target="_blank" ><img src="/img/crtfscreenshot_01.png" style={imageStyle} /></a>
          <a href="/img/crtfscreenshot_02.png" target="_blank" ><img src="/img/crtfscreenshot_02.png" style={imageStyle} /></a>
          <a href="/img/crtfscreenshot_03.png" target="_blank" ><img src="/img/crtfscreenshot_03.png" style={imageStyle} /></a>
          <a href="/img/crtfscreenshot_04.png" target="_blank" ><img src="/img/crtfscreenshot_04.png" style={imageStyle} /></a>
          <a href="/img/crtfscreenshot_05.png" target="_blank" ><img src="/img/crtfscreenshot_05.png" style={imageStyle} /></a>
        </div>

        <hr />

        <h2>Other Images</h2>
        <div className="responsive">
          <a href="https://krgamestudios.com/img/logo_400x400.png" target="_blank" ><img src="https://krgamestudios.com/img/logo_400x400.png" style={imageStyle} /></a>
          <a href="/img/crtfpromo.png" target="_blank" ><img src="/img/crtfpromo.png" style={imageStyle} /></a>
          <a href="/img/crtflogo.png" target="_blank" ><img src="/img/crtflogo.png" style={imageStyle} /></a>
        </div>
      </div>
    );
  }
}

export default PageAbout;
