import React from 'react'
import {render} from 'react-dom'
import update from 'react-addons-update'
import web3 from 'web3'

import SendForm from './wallet_box/SendForm'
import SendHistory from './wallet_box/SendHistory'

class WalletBox extends React.Component {
  componentDidMount() {
    console.log('WalletBox component has mounted')
    Web3 = new web3(new web3.providers.HttpProvider('http://localhost:8545'))
    console.log('Web3 conencted to Geth node through port 8545')

    var sender_account = Web3.eth.getCoinbase((err, res) => {
      if(!err) {
        console.log('My coinbase account is: ' + res)
        this.setState({coinbase : res})
      } else {
        console.log('unable to get coinbase adress: ' + err)
      }
    })
  }
  
  render() {
    return (
      <div>
        <p>Wallet Box</p>
        <SendForm />
        <SendHistory />
      </div>
    )
  }
}

module.exports = WalletBox
