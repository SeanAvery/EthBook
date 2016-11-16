import React from 'react'
import {render} from 'react-dom'
import update from 'react-addons-update'

import ContactForm from './contact_box/ContactForm'
import ContactList from './contact_box/ContactList'

class ContactBox extends React.Component {
  constructor(contacts) {
    super()
    this.state = {
      contacts : []
    }
    this.onUpdate = this.onUpdate.bind(this)
  }

  onUpdate(name) {
    var newArray = update(this.state.contacts, {$push: [name]})
    this.setState({contacts: newArray})
  }

  render() {
    return (
      <div>
        <p>Contact Box </p>
        <ContactForm onUpdate={this.onUpdate}/>
        <ContactList />
      </div>
    )
  }
}

module.exports = ContactBox
