import React, { useState } from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

import Web3 from 'web3'
import { useEffect } from 'react';
import { AVAX_SPORE_ABI } from '../utils/SporeAbis';
import BurnedTokens from './BurnedTokens';

const win = window as any
win.web3 = new Web3('https://bsc-dataseed1.binance.org:443');
win.ava = new Web3('https://api.avax.network/ext/bc/C/rpc');

const Tokenomics = () => {
  const [totalBurnedTokens, setTotalBurnedTokens] = useState(-1)
  const [totalBurnedTokensBSC, setTotalBurnedTokensBSC] = useState(-1)
  const [totalTokenHolders, setTotalTokenHolders] = useState(-1)
  const [totalTokenHoldersBSC, setTotalTokenHoldersBSC] = useState(-1)

  useEffect(() => {
    async function getInfos() {
      await getBurnedTokens()
      await getTokenHolders()
      await getBurnedTokensBSC()
      await getTokenHoldersBSC()
      setInterval(async () => {
        await getBurnedTokens()
        await getTokenHolders()
        await getTokenHoldersBSC()
        await getBurnedTokensBSC()
      }, 60000)
    }
    getInfos()

  }, [])

  const getBurnedTokens = async () => {
    try {
      console.log("getting burned tokens");
      const SporeAddress = "0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985";
      const SporeContract = new win.ava.eth.Contract(
        AVAX_SPORE_ABI,
        SporeAddress
      );

      const avaburn = await SporeContract.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
      setTotalBurnedTokens(avaburn / (10 ** 9));
      // const res = await axios.get(
      //   'https://api.covalenthq.com/v1/43114/address/0x000000000000000000000000000000000000dEaD/balances_v2/?nft=false'
      // );

      // if (
      //   res.data !== undefined &&
      //   res.data.data !== undefined &&
      //   res.data.data.items !== undefined
      // ) {
      //   const items = res.data.data.items;
      //   items.forEach((coin: any) => {
      //     if (coin.contract_address === '0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985') {
      //       setTotalBurnedTokens(coin.balance / (10 ** 9))
      //     }
      //   })
      // }

    }
    catch (err) {
      console.log("Error getting burned tokens avax")
    }
  }

  const getBurnedTokensBSC = async () => {
    console.log('get burned tokens bsc')
    const SporeAddress = "0x33A3d962955A3862C8093D1273344719f03cA17C";
    const SporeABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "burned", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "updateAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
    const SporeContract = new win.web3.eth.Contract(
      SporeABI,
      SporeAddress
    );
    try {
      console.log("GETTING BURNED TOKENS BSC")
      const burned = await SporeContract.methods.burned().call()
      setTotalBurnedTokensBSC(burned / (10 ** 9))

    } catch (error) {
      console.log("CANNOT READ BURNED TOKENS BSC", error)
    }
  }

  const getTokenHolders = async () => {
    console.log("getting token holders avax")
    try {
      const res = await axios.get(
        'https://api.covalenthq.com/v1/43114/tokens/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/token_holders/?page-size=999999&key=ckey_a09c56c3188547958bd621253a4'
      )

      if (
        res.data !== undefined &&
        res.data.data !== undefined &&
        res.data.data.items !== undefined
      ) {
        const items = res.data.data.items;
        setTotalTokenHolders(items.length)
      }

    }
    catch (err) {
      console.log("errror getting holders avax", err)
    }

  }
  const getTokenHoldersBSC = async () => {
    try {
      const res = await axios.get(
        'https://api.covalenthq.com/v1/56/tokens/0x33a3d962955a3862c8093d1273344719f03ca17c/token_holders/?page-size=99999'
      )

      if (
        res.data !== undefined &&
        res.data.data !== undefined &&
        res.data.data.items !== undefined
      ) {
        const items = res.data.data.items;
        setTotalTokenHoldersBSC(items.length)
      }
      else {
        console.log('test')
        console.log(res)
      }
    }
    catch (err) {
      console.log("Error getting token holders bsc")
      ///HARDCODED VALUE
      setTotalTokenHoldersBSC(97025)
    }

  }
  
  return (
    <section className='tokenomic'>
      <div className='container information py-5'>
        <div className='row'>
          <div className="judul-roadmap margin-b">
            <h1 className="text-roadmap"><b>Tokenomics</b></h1>
            <h3 className="p-roadmap">Our Core Team Members</h3>
          </div>
          <div className='col-md-12 col-lg-4 col-sm-12 text-right'>
            <div className="alert alert-dark" role="alert">
              Dev fund: <b>0%</b>
            </div>
            <div className="alert alert-dark" role="alert">
              Minted: <b>100,000,000,000,000,000</b> SPORE
            </div>
            <ul className='list-unstyled'>
              <BurnedTokens
                totalBurnedTokens={totalBurnedTokens}
                totalBurnedTokensBSC={totalBurnedTokensBSC}
                totalTokenHolders={totalTokenHolders}
                totalTokenHoldersBSC={totalTokenHoldersBSC}
              />
            </ul>
          </div>
          <div className='col-md-12 col-lg-8 col-sm-12 mt-5 text-center'>
            <PieChart
              style={{
                fontFamily:
                  '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                fontSize: '8px',
                width: '350px',
                position: 'relative',
                overflow: 'visible'
              }}
              data={[
                { key: 'burnedToken', title: 'Burned Token', value: 10, color: '#544099' },
                { key: 'circulatingSupply', title: 'Circulating Supply',  value: 15, color: '#31beb7' },
                { key: 'liquidityPool', title: 'Liquidity Pool', value: 20, color: '#2b9ad4' },
              ]}
              radius={PieChart.defaultProps.radius - 6}
              lineWidth={50}
              segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
              // segmentsShift={(index) => (index === selected ? 6 : 0)}
              animate
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
              labelPosition={100 - 50 / 2}
              labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
                fontWeight: 'bold'
              }}
              children={
                <>
                  { _withRenderCaptionItem({x: 40, y: 35, dx: 6.772278929010269, dy: -38.40750236747612, caption: 'Liquidity Pool' })}
                  { _withRenderCaptionItem({x: 20, y: 70, dx: -25.27946662292627, dy: 21.211991119655803, caption: 'Circulating Supply' })}
                  { _withRenderCaptionItem({x: 90, y: 50, dx: 25.279466622926275, dy: 21.211991119655796, caption: 'Burned Token' })}
                </>
              }
            />
            {/* <img className='img-fluid mobile-tokenomic' alt='Burn Token' width="500" height="500" src='tokenomic.png' /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
interface CaptionItemInterface {
  x?: string | number;
  y?: string | number;
  dx?: string | number;
  dy?: string | number;
  caption: string
}
const _withRenderCaptionItem = ({ x, y, dx, dy, caption }: CaptionItemInterface) => (
  <text dominant-baseline="central"
    x={x}
    y={y}
    dx={dx}
    dy={dy}
    text-anchor="middle"
    style={{ fill: 'rgb(255, 255, 255)', opacity: 0.75, pointerEvents: 'none', fontWeight: 'bold', fontSize: '6px'}}>{caption}</text>
)

export default Tokenomics
