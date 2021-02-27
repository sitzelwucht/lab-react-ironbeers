import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class HomeCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '600px' }} className="card">
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.content}
                    </Card.Text>
                   <Link to={this.props.linkTarget} ><Button variant="link">{this.props.btnText}</Button></Link>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
