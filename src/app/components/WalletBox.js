import React from 'react'
import {render} from 'react-dom'
import update from 'react-addons-update'
import web3 from 'web3'

import SendForm from './wallet_box/SendForm'
import SendHistory from './wallet_box/SendHistory'

class WalletBox extends React.Component {
  constructor() {
    super()
    this.state = {
      transactions : [],
      coinbase: ''
    }

    this.onUpdate = this.onUpdate.bind(this)
  }

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

  onUpdate(name, amount) {
    try {
      var reciever_account = localStorage.getItem(name)
      console.log('reciever_account is: ' + reciever_account)
    }
    catch(err) {
      console.log('Name ' + name + ' does not exist in local storage. Error: ' + err)
    }
    
    var wei_amount = Web3.toWei(amount, "ether")
    console.log('wei amount is: ' + wei_amount)

    var send_ether = Web3.eth.sendTransaction({
      from: this.state.coinbase,
      to: reciever_account,
      value: wei_amount
    }, (err, res) => {
      if(!err) {
        console.log('succesfully sent ether! tansaction address is: ' + res)
      } else {
        console.log('there is an error')
        console.log(err)
      }
    })

    var transaction = 'You sent ' + name + ' ' + amount + ' eth '
    var newArray = update(this.state.transactions, {$push: [transaction]})
    this.setState({transactions: newArray})
  }

  render() {
    return (
      <div>
        <SendForm onUpdate={this.onUpdate}/>
        <SendHistory transactions={this.state.transactions}/>
      </div>
    )
  }
}

module.exports = WalletBox
