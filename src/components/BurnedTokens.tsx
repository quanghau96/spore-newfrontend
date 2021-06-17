// src/Footer.js
import './BurnedTokens.css';

import React from 'react';
const TOTAL_SUPPLY = 100000000000000000;

interface BurnedTokensInterfaceProps {
  totalBurnedTokens: number,
  totalBurnedTokensBSC: number,
  totalTokenHolders:number,
  totalTokenHoldersBSC: number,
}

const BurnedTokens = ({
  totalBurnedTokens,
  totalBurnedTokensBSC,
  totalTokenHolders,
  totalTokenHoldersBSC,
}: BurnedTokensInterfaceProps) => {
  

  const numberWithCommas = (x: number) => {
    return x.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  const burnedTokensPercentage = (burnedAVAX: number, burnedBSC: number): string => {
    return ((burnedAVAX + burnedBSC) / TOTAL_SUPPLY * 100).toFixed(2)

  }
  return (
    <>
      <div className="alert alert-dark" role="alert">
        Burned on Avalanche: <b>{numberWithCommas(totalBurnedTokens)}</b> SPORE
      </div>
      <div className="alert alert-dark" role="alert">
        Burned on BSC: <b>{numberWithCommas(totalBurnedTokensBSC)}</b> SPORE
      </div>
      <div className="alert alert-dark" role="alert">
        Total burned: <b>{burnedTokensPercentage(totalBurnedTokens, totalBurnedTokensBSC)}%</b>
      </div>
      <div className="alert alert-dark" role="alert">
        Avalanche holders: <b>{totalTokenHolders}</b>
      </div>
      <div className="alert alert-dark" role="alert">
        BSC holders: <b>{totalTokenHoldersBSC}+ <a className="bscLink" href="https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c">BSCscan</a></b>
      </div>
    </>
  );
}


export default BurnedTokens
