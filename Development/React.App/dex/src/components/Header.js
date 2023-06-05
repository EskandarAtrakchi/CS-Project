import React from 'react'
import Eth from "../eth.svg";
import { Link } from "react-router-dom";

function Header(props) {

  const {address, isConnected, connect} = props;

  return (
    
    <header>

      <div className='leftH'>
        <img src="https://avatars.githubusercontent.com/u/102361045?v=4" alt="MyLogo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>

      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="Eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0,4) +"...." +address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  )
}

export default Header

/*
{
    "short_name": "Moralis DEX",
    "name": "Moralis DEX",
    "icons": [
      {
        "src": "favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      },
      {
        "src": "logo192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "logo512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff"
  }
*/