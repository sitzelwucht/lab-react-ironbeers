import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'

export default class Loader extends Component {
    render() {
        return (
            <div>
                <Spinner animation="grow" className="spinner"/>
            </div>
        )
    }
}
