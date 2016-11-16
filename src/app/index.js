import React from 'react'
import {render} from 'react-dom'

import ContactBox from './components/ContactBox'
import WalletBox from './components/WalletBox'

class App extends React.Component {
  render() {
    return (
      <div>
        <p> hello world form index.js</p>
        <ContactBox />
        <WalletBox />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
