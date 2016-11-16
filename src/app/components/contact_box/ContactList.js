import React from 'react'
import {render} from 'react-dom'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class ContactList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.props.contacts.map((contact, i) => {
            return <ListGroupItem key={i}>{contact}</ListGroupItem>
          })}
        </ListGroup>
      </div>
    )
  }
}

module.exports = ContactList
