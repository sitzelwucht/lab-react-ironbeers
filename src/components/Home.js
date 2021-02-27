import React, { Component } from 'react'
import HomeCard from './HomeCard'

export default class Home extends Component {
    render() {
        return (
            <div>
            <HomeCard 
            title="All Beers" 
            content="The lager inside a malt requires assistance from the porter around a bill. 
            A slyly discusting change steals women from a booze beyond a Fosters. Any Ipswich Ale can underhandedly make a pact with the bull ice, 
            but it takes a real Dos Equis to require assistance from a Keystone." 
            img="./assets/beers.png" 
            btnText="See all beers"
            linkTarget="beers"
            />
            
            <HomeCard title="Random Beer" 
            content=" When you see another Dixie Beer living with the sake bomb, it means that the stumbly smashed Red Stripe goes to sleep. When you see a gentle Kashmir IPA, 
            it means that a polar bear beer beyond a Sierra Nevada returns home. The crispy Mango Beer is hairy." 
            img="./assets/random-beer.png"
            btnText="Get random beer"
            linkTarget="random-beer"
            />
            
            <HomeCard title="New Beer" 
            content="Most people believe that the gentle Keystone tries to seduce some wavy lager, but they need to remember how almost the ESB ruminates. A dude, a sake bomb 
            for the burglar ale, and a bill defined by a Mango Beer are what made America great!" 
            img="./assets/new-beer.png"
            btnText="Add new beer"
            linkTarget="new-beer"
             />
            </div>
        )
    }
}
