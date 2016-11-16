import React from 'react'
import {render} from 'react-dom'

import ContactForm from './contact_box/ContactForm'
import ContactList from './contact_box/ContactList'

class ContactBox extends React.Component {
  render() {
    return (
      <div>
        <p>Contact Box </p>
        <ContactForm />
        <ContactList />
      </div>
    )
  }
}

module.exports = ContactBox
