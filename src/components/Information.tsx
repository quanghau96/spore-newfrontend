// src/Footer.js
import './Information.css';
import './Particle.css';


import React from 'react';
import BSCBridge from './BSCBridge';
import BurnedTokens from './BurnedTokens';
import PriceToken from './PriceToken';
//@ts-ignore
import Contributors from './contributors';

const Information = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="inner-header">
            <h1 className="title-jumbotron">Join to <b>SPORE</b> ecosystem</h1>
            <div className="text-kecil">
              <h3>Our unique NFT platform empowers creators with accessible & safe tools.</h3>
              <h3>Upload your art and ideas into SPORE!</h3>
            </div>
            <div className="tombol-chart">
              <a type="button" href="#livecahrts" className="btn btn-primary claimair">Live Chart</a>
              <a type="button" href="#buynoww" className="btn btn-outline-primary">Buy Now  <i className="fas fa-long-arrow-alt-right"></i></a>

            </div>
          </div>
          <div className="attribute-spore">
            <div className="flex-container1">
              <div><img src="ThinkingAnimate.gif" width="20" height="20" alt=""></img></div>
              <div>122,508</div>
              <div><img src="ThinkingAnimate.gif" width="20" height="20" alt=""></img></div>
              <div><img src="ThinkingAnimate.gif" width="20" height="20" alt=""></img></div>
            </div>
            <div className="flex-container">
              <div>Current Price</div>
              <div>Holders</div>
              <div>Supply</div>
              <div>Market Cap</div>
            </div>
          </div>
        </div>
      </div>

      <div className="banners">
        <div className="banner-arts">

        </div>
      </div>

      <div className="banners-mobile">
        <div className="banner-arts">

        </div>
      </div>

      <div className="What-is">
        <div className='container information py-5'>
          <div className='row'>
            <div className="judul-roadmap margin-b">
              <h1 className="text-roadmap">What is <b className="upper">Spore</b> ?</h1>
              <h3 className="p-roadmap">what do you think about spores</h3>
            </div>
            <div className='col-md-7'>
              {/* <h2 className='feature pb-4'>
              What is <span>Spore</span>?
            </h2> */}
              <p className='lead'>
                Spore is an ecosystem that includes
              </p>
              <ul className='lead'>
                <li><b>Reflect Tokens</b></li>
                <li><b>Algorithmically Generated NFTs</b></li>
                <li><b>Next-gen NFT Prediction Market</b></li>
              </ul>
              {/* <blockquote className='lead'>
              Meet Spore <img width="52px" height="52px" className='img-fluid' alt='Burn Token' src='spore_256.png' />
            </blockquote> */}

              <div className='lead larger'>
                <PriceToken></PriceToken>
              </div>
              <dl className='lead'>

                <h3>The current SPORE burn rate is :</h3>
                <dd>On every Avalanche transaction <img height="30px" width="30px"
                  src='avalanche-logo.png' alt='Avalanche Network'></img></dd>
                <dt>4.6% is Burned</dt>
                <dt>1.4% is Redistributed to Hodlers</dt>
                <dd>On Every BSC Transaction <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain"></img> </dd>
                <dt>6% is Burned</dt>
              </dl>

              <p className='lead'>
                Frictionless rewards will decrease infinitely as tokens continue to burn.
              </p>
              <p className='lead'>
                All holders enjoy the ever-decreasing circulating supply.
              </p>
            </div>
            <div className='col-md-5 text-right'>
              <img className='img-fluid mobile' alt='Mushroom' src='mushroom.gif' />
            </div>
          </div>
        </div>

      </div>

      <section className='tokenomic'>
        <div className='container information py-5'>
          <div className='row'>
            <div className="judul-roadmap margin-b">
              <h1 className="text-roadmap"><b>Tokenomics</b></h1>
              <h3 className="p-roadmap">Our Core Team Members</h3>
            </div>
            <div className='col-md-12 col-lg-4 col-sm-12 text-right'>
              <div className="alert alert-dark" role="alert">
                Dev fund: 0%
              </div>
              <div className="alert alert-dark" role="alert">
                Minted: <b>100,000,000,000,000,000</b> SPORE
              </div>
              <ul className='list-unstyled'>

                <>
                  <BurnedTokens />
                </>
              </ul>

            </div>
            <div className='col-md-12 col-lg-8 col-sm-12 mt-5 text-center'>
              <img className='img-fluid mobile-tokenomic' alt='Burn Token' width="500" height="500" src='tokenomic.png' />
            </div>
          </div>
        </div>
      </section>

      <div className="moon">
        <img src="moon.png" className="moonspore" alt=""></img>
      </div>
      <div className="roadmap-outer" id="roadmaps">
        <img src="bgspore.png" className="bgspore" alt=""></img>
        <img src="sporelamp.png" className="sporelamp" alt=""></img>
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="judul-roadmap margin-r">
              <h1 className="text-roadmap"><b>The Roadmap</b></h1>
              <h3 className="p-roadmap">What we'll be up to in 2021</h3>
            </div>
            <div className="col-md-12 col-lg-4 col-sm-12">
              <img src="rocketspore.png" className="rocketspore" alt=""></img>
            </div>
            <div className="col-md-12 col-lg-4 col-sm-12 m-time">
              <section className="timelines">
                <div className="roadmap">
                  <div className="container">
                    <ul>
                      <li></li>
                      <li>
                        <div>
                          <time>Fair and Stealth Launch</time><p>March 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Setting up Airdrops & Incentive Program</time><p>20 March 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Second Layer Blockchain Development + Bridge ( Binance Smart Chain )</time><p>6 April 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Farming Partnerships</time> <p>12 April 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Algorithmically Generated NFTs</time> <p>May 17 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Governance</time> <p>In Progress <img className="checklist" src="loading.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Cross-chain compatibility</time> <p>In Progress <img className="checklist" src="loading.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>NFTs Prediction Market</time> <p>In Progress <img className="checklist" src="loading.svg" alt=""></img></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* <section className='bg-white-darker pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'>Roadmap</h2>
            </div>
          </div>
          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center bottom d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>1</div>
            </div>
            <div className='col-6'>
              <span className='roadmap-text'>Fair and stealth launch </span>
              <p>
                <i className='fa fa-check'></i> 18 March 2021
              </p>
            </div>
          </div>
          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <span className='roadmap-text'>Setting up Airdrops & Incentive program </span>
              <p>
                <i className='fa fa-check'></i> 20 March 2021
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>2</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>3</div>
            </div>
            <div className='col-6'>
              <span className='roadmap-text'>Second layer blockchain development + Bridge (Binance Smart Chain)</span>
              <p>
                <i className='fa fa-check'></i> 6 April 2021
              </p>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <span className='roadmap-text'>Farming Partnerships</span>
              <p>
                <i className='fa fa-check'></i> 12 April 2021
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>4</div>
            </div>
          </div>



          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>


          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>5</div>
            </div>
            <div className='col-6'>
              <span className='roadmap-text'>Algorithmically generated NFTs </span>
              <p>
                <i className='fa fa-check'></i> May 17 2021
              </p>
            </div>
          </div>


          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
            <span className='roadmap-text'>Governance</span>
              <p>
                In Progress <i className='fa fa-spinner'></i>
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>6</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>7</div>
            </div>
            <div className='col-6'>
              <span className='roadmap-text'>Cross-chain compatibility</span>
              <p>
                Q3 2021 <i className='fa fa-spinner'></i>
              </p>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
            <span className='roadmap-text'>NFTs Prediction Market</span>
              <p>
                Q4 2021 <i className='fa fa-spinner'></i>
              </p>
            </div>
            <div className='col-2 text-center top-right d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>8</div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="row-alt text-center logo-pendukung">
        <div className="container-fluid logo-pendukung">
          <div className="row medium-row align-items-lg-center">
            <div className="col-12">
              <a href="https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" className="d-inline-block m-3">
                <img src="BscScan-logo-light.png" height="37" alt="BSC Scan"></img>
              </a>
              <a href="https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions" target="_blank" className="d-inline-block m-3">
                <img src="avalanches.png" height="37" alt="Avalanche"></img>
              </a>
              <a href="https://coinmarketcap.com/currencies/spore/" target="_blank" className="d-inline-block m-3">
                <img src="coin-marketcap.png" height="37" alt="Coin marketcap"></img>
              </a>
              <a href="https://www.coingecko.com/en/coins/spore" target="_blank" className="d-inline-block m-3">
                <img src="gecko.png" height="37" alt="Coin Gecko"></img>
              </a>
              <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" className="d-inline-block m-3">
                <img src="pancake.png" height="37" alt="PancakeSwap"></img>
              </a>
              <a href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" className="d-inline-block m-3">
                <img src="pangolin.png" height="37" alt="Pangolin"></img>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="our-team" id="ourteam">
        <div className="container">
          <div className="judul-roadmap margin-r">
            <h1 className="text-roadmap"><b>Our Team Developers</b></h1>
            <h3 className="p-roadmap">Our Core Team Members</h3>
          </div>

          <div className="row">
            <>
              <Contributors />
            </>
          </div>
        </div>
      </div>


      <div className="row-alt text-center logo-pendukung buy-bg">
        <div className="container logo-pendukung buy-bg">
          <div className="judul-roadmap buyon">
            <h1 className="text-roadmap"><b>Buy On</b></h1>
            <h3 className="p-roadmap p-m">SPORE is crosschain and now available on</h3>
          </div>
          <div className="row medium-row align-items-lg-center">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" className="d-inline-block m-3">
                <img src="pancake.png" className="pancakeswap-image" height="60" alt="BSC Scan"></img>
              </a>
              <p className="p-buy">BSC Chain</p>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">

              <a href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" className="d-inline-block m-3">
                <img src="pangolin.png" className="mobile-image" height="60" alt="BSC Scan"></img>
              </a>

              <p className="p-buy">AVAX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row-alt text-center logo-pendukung live-bg" id="livecahrts">
        <div className="container logo-pendukung live-bg">
          <div className="judul-roadmap buyon">
            <h1 className="text-roadmap"><b>Live Chart</b></h1>
            <h3 className="p-roadmap p-m">Live chart SPORE</h3>
          </div>
          <div className="row medium-row align-items-lg-center">
            <div className="col-sm-4">
              <a href="https://info.pangolin.exchange/#/token/0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" className="d-inline-block m-3">
                <img src="pangolin.png" className="mobile-image" height="60" alt="BSC Scan"></img>
              </a>
              <p className="p-buy">AVAX</p>
            </div>
            <div className="col-sm-4">

              <a href="https://charts.bogged.finance/?token=0x33A3d962955A3862C8093D1273344719f03cA17C" target="_blank" className="d-inline-block m-3">
                <img src="bogtools_logo_white-1024x30.png" className="mobile-image" height="60" alt="BSC Scan"></img>
              </a>
              <p className="p-buy">BSC Chain</p>
            </div>
            <div className="col-sm-4">

              <a href="https://dex.guru/token/0x33a3d962955a3862c8093d1273344719f03ca17c-bsc" target="_blank" className="d-inline-block m-3">
                <img src="dex-guru.png" className="mobile-image" height="60" alt="BSC Scan"></img>
              </a>
              <p className="p-buy">BSC Chain</p>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel"><img src="avalanche-logo.png" width="40" height="40" alt="" /> <img className="binancelogo" src="binance-logo.png" width="40" height="40" alt="" /> Spore Avalanche - BSC Bridge </h5>
              <a type="button" className="close-modal" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times"></i></a>
            </div>
            <div className="modal-body">
              <BSCBridge />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary claimair m-air" data-bs-dismiss="modal">Back to Home</button>
            </div>
          </div>
        </div>
      </div>

      <div className="upbutton">
        <a href="#home"><img src="up-button.png" alt="Up Button" /></a>
      </div>

      {/* <div className='container information py-5'>
        <div className='row py-5'>
          <div className='col-md-12 text-center'>
            <h2 className='feature pb-4'>Contracts</h2>
            <div className="info">
              <div className="row social-links">
                <a
                  href='https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 zeros'
                >
                  Avalanche token address
                  </a>
                <a
                  href='https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  BSC token address
                  </a>
              </div>
              <div className="row social-links">
                <a
                  href='https://cchain.explorer.avax.network/tx/0x7df1694004dd6e994d31f76c3978718e017fe6e6112482866051aca7ab90caa6/token-transfers'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  2.5% of supply burnt tx
                  </a>
                <a
                  href='https://cchain.explorer.avax.network/tx/0xe3e92326e2993a270a2fdd44a7301e6adccb7dd1b40bcc4ed9ed88ec963a22ab/token-transfers'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  LP-burnt tx
                  </a>
              </div>
              <div className="row social-links">
                <a
                  href='https://cchain.explorer.avax.network/address/0x88Dd784dFaaB1a7752d2CC81071Fcd12C1c4E1db/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  DEV wallet address
                  </a>
                <a
                  href='https://cchain.explorer.avax.network/tx/0x5fa10181e6c9841aa2226b5468e2b92f0268feaf178626472428e9839ab76982/internal-transactions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  Renounced ownership tx
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>


 <div className='container information py-5'>
        <div className='row py-5'>
          <div className='col-md-12 text-center'>
            <h2 className='feature pb-4'>Follow us!</h2>
            <div className="info">
              <div className="row social-links">
                <a
                  href='https://twitter.com/sporeproject'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-twitter'
                  aria-label='Twitter'
                >
                </a>
                <a
                  href='https://www.reddit.com/r/sporeproject/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-reddit'
                  aria-label='Reddit'
                >
                </a>
                <a
                  href='https://t.me/sporefinanceofficial'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fas fa-paper-plane'
                  aria-label='Telegram'
                >
                </a>
                <a
                  href='https://discord.gg/hYDnmyadJC'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-discord'
                  aria-label='Discord'
                >
                </a>
                <a
                  href='https://www.facebook.com/sporeearth'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-facebook'
                  aria-label='Facebook'
                >
                </a>
                <a
                  href='https://instagram.com/projectspore'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-instagram'
                  aria-label='Instagram'
                >
                </a>
                <a href='https://tiktok.com/@sporeproject'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-tiktok'
                  aria-label='TikTok'>
                    </a>
		<a
                  href='https://www.youtube.com/sporeproject'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-youtube'
                  aria-label='YouTube'
                >
                </a>
                <a
                  href='https://sporeproject.medium.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-medium-m'
                  aria-label='Medium'
                >
                </a>
                <a href='https://github.com/sporeproject'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 fab fa-github'
                  aria-label='Github'
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
	   */}

    </>
  )
}

export default Information

