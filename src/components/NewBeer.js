import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class NewBeer extends Component {
    render() {
        return (
            <div>
        <Form className="add-form" onSubmit={this.props.onAdd}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" />
            </Form.Group>

            <Form.Group controlId="tagline">
                <Form.Label>Tagline</Form.Label>
                <Form.Control name="tagline"  type="text" />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" as="textarea" rows={3} />
            </Form.Group>


            <Form.Group controlId="firstBrewed">
                <Form.Label>First brewed</Form.Label>
                <Form.Control name="firstBrewed" type="text" />
            </Form.Group>

            <Form.Group controlId="tips">
                <Form.Label>Brewers Tips</Form.Label>
                <Form.Control name="tips" type="text"  />
            </Form.Group>

            <Form.Group controlId="attenuationLevel">
                <Form.Label>Attenuation Level</Form.Label>
                <Form.Control name="attenuationLevel" type="number" />
            </Form.Group>

            <Form.Group controlId="contributor">
                <Form.Label>Contributed By </Form.Label>
                <Form.Control name="contributor" type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
            ADD NEW
            </Button>
        </Form>


            </div>
        )
    }
}
