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
              <li><a href="https://discord.gg/hYDnmyadJC" target="_blank">Discord</a></li>
              <li><a href="https://www.reddit.com/r/sporeproject/" target="_blank">Reddit</a></li>
              <li><a href="https://t.me/sporefinanceofficial" target="_blank">Telegram</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Social</h6>
            <ul className="footer-links">
              <li><a href="https://twitter.com/sporeproject" target="_blank">Twitter</a></li>
              <li><a href="https://www.facebook.com/sporeearth" target="_blank">Facebook</a></li>
              <li><a href="https://instagram.com/projectspore" target="_blank">Instagram</a></li>
              <li><a href="https://github.com/sporeproject" target="_blank">Github</a></li>
              <li><a href="https://sporeproject.medium.com" target="_blank">Medium</a></li>
            </ul>
          </div>


        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
              <a href="https://github.com/sporeproject" target="_blank" className="linkspore"> &#127812; SPORE</a>.
            </p>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/sporeearth" target="_blank"><i className="fab fa-facebook"></i></a></li>
              <li><a className="twitter" href="https://twitter.com/sporeproject" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li><a className="youtube" href="https://www.youtube.com/sporeproject" target="_blank"><i className="fab fa-youtube"></i></a></li>
              <li><a className="tiktok" href="https://tiktok.com/@sporeproject" target="_blank"><i className="fab fa-tiktok"></i></a></li>
              <li><a className="discord" href="https://discord.gg/hYDnmyadJC" target="_blank"><i className="fab fa-discord"></i></a></li>
              <li><a className="telegram" href="https://t.me/sporefinanceofficial" target="_blank"><i className="fab fa-telegram"></i></a></li>
              <li><a className="reddit" href="https://www.reddit.com/r/sporeproject/" target="_blank"><i className="fab fa-reddit"></i></a></li>
              <li><a className="medium" href="https://sporeproject.medium.com" target="_blank"><i className="fab fa-medium"></i></a></li>
              <li><a className="github" href="https://github.com/sporeproject" target="_blank"><i className="fab fa-github"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    /* // <div className='container-fluid footer pt-5'>
    //   <div className='row'>
    //     <div className='col-md-12 text-center py-4'>
    //       <a
    //         href='https://github.com/sporeproject/Spore-frontend'
    //         target='_blank'
    //         className='credit'
    //         rel='noopener noreferrer'
    //       >
    //         {' '}
    //         Made with &#127812; by the Spore community
    //       </a>
    //     </div>
    //   </div>
    // </div> */
  );
}

export default Footer;
