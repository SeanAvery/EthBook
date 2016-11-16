import React from 'react'
import {render} from 'react-dom'

import SendForm from './wallet_box/SendForm'
import SendHistory from './wallet_box/SendHistory'

class WalletBox extends React.Component {
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
