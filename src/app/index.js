import React from 'react'
import {render} from 'react-dom'
import {Grid, Row, Col} from 'react-bootstrap'

import ContactBox from './components/ContactBox'
import WalletBox from './components/WalletBox'

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} md={6}>
            <ContactBox />
          </Col>
          <Col xs={12} md={6}>
            <WalletBox />
          </Col>
        </Grid>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
