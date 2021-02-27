import React, { Component } from 'react'

export default class SingleBeer extends Component {

    render() {
        return (
            <div>
                  <div className="single-beer">
               <div className="beer-img"><img src={this.props.image_url} alt="beer" /> </div> 

                <section>
                    <h2>{this.props.name}</h2>
                    <div className="grey level">{this.props.attenuation_level}</div>
                </section>

                <section>
                    <div className="grey">{this.props.tagline}</div>
                    <div className="bolded">{this.props.first_brewed}</div>
                </section>
                
                <div className="description">{this.props.description}</div>
                <div className="grey bolded">{this.props.contributed_by}</div>
            </div>
            </div>
        )
    }
}
