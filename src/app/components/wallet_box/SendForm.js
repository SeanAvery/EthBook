import React from 'react'
import {render} from 'react-dom'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class SendForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Send To</ControlLabel>
          <FormControl onChange={this.handleNameChange} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Amount</ControlLabel>
          <FormControl onChange={this.handleAmountChange} />
        </FormGroup>
        <Button type="submit">
          Send ETH
        </Button>
      </form>
    )
  }
}

module.exports = SendForm
