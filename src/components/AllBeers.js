import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

export default class AllBeers extends Component {

    render() {
        const { data, loading, results, msg } = this.props
        
        if (loading) {
            return <Loader />
        }

        else
        return (

            <div>
                <h2 style={{margin: 'auto', width: '200px', padding: '20px'}}>All beers</h2>
                <div className="search-box">
                <input onChange={this.props.inputChange} name="search" type="text" placeholder="type name to search" />
                </div>
                <div className="beer-results">{msg}
                {
                    results.map((item, i) => {
                        return <div key={i} className="beer-box">
                        
                                <div><img src={item.image_url} alt="beer"/> </div>
                                <div>
                                <Link to={`/${item._id}`}>
                                <h3>{item.name}</h3></Link>
                                <h5 className="grey">{item.tagline}</h5>
                                <p><span className="bolded">Created by:</span> {item.name}</p>
                                </div>
                                
                            </div>
                    }) 

                }
                </div>

                <div className="all-beers">
                {
                    data.map((item, i) => {
                        return <div key={i} className="beer-box">
                              
                        <div><img src={item.image_url} alt="beer"/></div>
                        <div>
                            <Link to={`/${item._id}`}>
                            <h3>{item.name}</h3></Link>
                            <h5 className="grey">{item.tagline}</h5>
                            <p><span className="bolded">Created by:</span> {item.name}</p>
                            </div>
                        </div>
                    }) 
                }

                </div>
            </div>
        )
    }
}
