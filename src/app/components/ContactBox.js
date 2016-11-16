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

  componentDidMount() {
    console.log('ContactBox has mounted')
    if(typeof(Storage) !== "undefined") {
      console.log('Your browser ' + navigator.appName + ' supports local storage')
    }
    else {
      console.log('Your browser ' + navigator.appName + ' DOES NOT support local storage')
    }
  }

  onUpdate(name) {
    var newArray = update(this.state.contacts, {$push: [name]})
    this.setState({contacts: newArray})
  }

  render() {
    return (
      <div>
        <ContactForm onUpdate={this.onUpdate}/>
        <ContactList contacts={this.state.contacts}/>
      </div>
    )
  }
}

module.exports = ContactBox
