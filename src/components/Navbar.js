import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="menu">
                <Link to="/"><img src="/home.svg" alt="home"></img></Link>
                <div className="creator">by Laura</div>
                </header>
            </div>
        )
    }
}
