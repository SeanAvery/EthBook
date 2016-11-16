import React from 'react'
import {render} from 'react-dom'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class SendHistory extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.props.transactions.map((contact, i) => {
            return <ListGroupItem key={i}>{contact}</ListGroupItem>
          })}
        </ListGroup>
      </div>
    )
  }
}

module.exports = SendHistory
