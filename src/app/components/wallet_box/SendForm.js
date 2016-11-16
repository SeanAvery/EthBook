import React from 'react'
import {render} from 'react-dom'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class SendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      amount: 0
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    console.log(e.target.value)
    this.setState({name: e.target.value})
  }

  handleAmountChange(e) {
    console.log(e.target.value)
    this.setState({amount: e.target.value})
  }

  handleSubmit(e) {
  
  }

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
