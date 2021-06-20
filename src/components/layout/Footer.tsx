// src/Footer.js
import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    // <!-- Site footer -->
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">The SPORE Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Community</h6>
            <ul className="footer-links">
              <li><a href="https://discord.gg/hYDnmyadJC" target="_blank"  rel="noreferrer" >Discord</a></li>
              <li><a href="https://www.reddit.com/r/sporeproject/" target="_blank"  rel="noreferrer" >Reddit</a></li>
              <li><a href="https://t.me/sporefinanceofficial" target="_blank"  rel="noreferrer" >Telegram</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Social</h6>
            <ul className="footer-links">
              <li><a href="https://twitter.com/sporeproject" target="_blank" rel="noreferrer" >Twitter</a></li>
              <li><a href="https://www.facebook.com/sporeearth" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com/projectspore" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://github.com/sporeproject" target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="https://sporeproject.medium.com" target="_blank" rel="noreferrer">Medium</a></li>
            </ul>
          </div>

        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col mx-auto">
            <p className="copyright-text text-center">Copyright &copy; 2021 All Rights Reserved by
              <a href="https://github.com/sporeproject" target="_blank" className="linkspore"  rel="noreferrer"> &#127812; SPORE</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
