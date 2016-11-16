import React from 'react'
import {render} from 'react-dom'
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      key: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    console.log(e.target.value)
    this.setState({name: e.target.value})
  }

  handleKeyChange(e) {
    console.log(e.target.value)
    this.setState({key: e.target.value})
  }

  handleSubmit(e) {
    if(typeof this.props.onUpdate === 'function') {
      this.props.onUpdate(this.state.name)
    } else {
      console.log('parent function onChange is not available')
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Enter Contact Name:</ControlLabel>
          <FormControl onChange={this.handleNameChange} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Enter Public-Key Address:</ControlLabel>
          <FormControl onChange={this.handleKeyChange} />
        </FormGroup>
        <Button type="submit">
          Submit Contact
        </Button>
      </form>
    )
  }
}

module.exports = ContactForm
