import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer'

class App extends Component {

    state = {
      beers: [],
      results: [],
      loading: true,
      msg: ''
    }

    // create new beer
    handleSubmit = (event) => {
      event.preventDefault()
      let name = event.target.name.value
      let tagline = event.target.tagline.value
      let description = event.target.description.value
      let firstBrewed = event.target.firstBrewed.value
      let tips = event.target.tips.value
      let attLevel = event.target.attenuationLevel.value
      let contributor = event.target.contributor.value

      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: tips,
        attenuation_level: attLevel,
        contributed_by: contributor
      })
      .then(response => {
        this.setState({
          beers: [response.data, ...this.state.beers]
        }, () => {
          this.props.history.push('/')
        })
      })
      .catch(err => console.log(err))
    
    }


    // search for beers dynamically
    handleSearch = (event) => {
      let query = event.target.value.toLowerCase()
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then(response => {
          this.setState({
            results: response.data,
            loading: false
          })
          // if search field is emptied, results will be erased from DOM
          if (!query) {
            this.setState({
              results: [],
              msg: ''
            })
          }
          // if query string does not match any beers, show a message
          if (query && response.data.length === 0) {
            this.setState({
              msg: 'no results were found'
            })
          }
      })
      .catch(err => console.log(err))
  }


    componentDidMount() {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        this.setState({
          beers: response.data,
          loading: false
        })
      })
      .catch(err => console.log(err))
    }

  render() {

    const { beers, loading, results, msg } = this.state

    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => {
            return <Home />
          }} / >

          <Route path="/beers" render={() => {
            return <AllBeers data={beers} inputChange={this.handleSearch} status={loading} results={results} msg={msg}/>
          }} / >

          <Route path="/random-beer" render={() => {
            return <RandomBeer />
          }} / >

          <Route path="/new-beer" render={() => {
            return <NewBeer onAdd={this.handleSubmit}/>
          }} / >

          <Route exact path="/:beerId" render={(routeProps) => {
            return <BeerDetails beerId={routeProps.match.params.beerId} data={beers}/>
          }} />
        </Switch>
       
      </div>
    )
  }
}

export default withRouter(App)