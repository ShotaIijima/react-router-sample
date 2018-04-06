import React, { Component } from 'react'
import '../css/SimpleHeader.css'
import { Link } from 'react-router-dom'
import { Button, ButtonToolbar } from 'react-bootstrap'

export default class SimpleHeader extends Component {
    render() {
      return (
        <div className="SimpleHeader">
            <div className="content">
                SimpleHeader
                <br/>
                <Button bsStyle="link"><Link to='/'>Home</Link></Button>
                <Button bsStyle="link"><Link to='/stopwatch'>Stopwatch</Link></Button>
                <Button bsStyle="link"><Link to='/todo'>Todo</Link></Button>
                <Button bsStyle="link"><Link to='/any'>Any</Link></Button>
            </div>
        </div>
      )
    }
}