import React, { Component } from 'react'
import axios from 'axios'
import SingleBeer from './SingleBeer'
import Loader from './Loader'

export default class RandomBeer extends Component {

    state = {
        random: {},
        loading: true
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            this.setState({
                random: response.data,
                loading: false
            })
        })
    }

    render() {
        const { random, loading } = this.state

        if (loading) {
            return <Loader />
        }
        return (
            <SingleBeer image_url={random.image_url} name={random.name} attenuation_level={random.attenuation_level}
                tagline={random.tagline} first_brewed={random.first_brewed} description={random.description} contributed_by={random.contributed_by}
            />
        )
    }
}
