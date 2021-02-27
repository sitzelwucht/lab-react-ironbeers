import axios from 'axios'
import React, { Component } from 'react'
import SingleBeer from './SingleBeer'
import Loader from './Loader'


export default class BeerDetails extends Component {

    state = {
        beer: {},
        loading: true,
    }

    componentDidMount() {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
                for ( let item of response.data ) {
                    if (item._id === this.props.beerId) {
                        let newBeer = {
                            name: item.name,
                            image: item.image_url,
                            attLevel: item.attenuation_level,
                            tagline: item.tagline,
                            firstBrewed: item.first_brewed,
                            description: item.description,
                            contributor: item.contributed_by
        
                        }
                        this.setState({
                            beer: newBeer,
                            loading: false
                        })
                    }
                }
            })
        .catch(err => console.log(err))
        
    }


    render() {
   
        const { beer, loading } = this.state

        if (loading) {
            return <Loader />
        }
        
        else return (
            <div>
                  <SingleBeer image_url={beer.image} name={beer.name} attenuation_level={beer.attLevel}
                tagline={beer.tagline} first_brewed={beer.firstBrewed} description={beer.description} contributed_by={beer.contributor}
            />
            </div>
        )
    }
}
