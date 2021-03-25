import React from 'react' 


export default class DogIndex extends React.Component { 
    constructor (props) {
        super(props) 
        this.state = {
            url: ''
        }
        this.fetchDog = this.fetchDog.bind(this)
    }

    componentDidMount() {
        this.fetchDog()
    }

    async fetchDog() {
        const result = await fetch ('https://dog.ceo/api/breeds/image/random')
        const jsonified = await result.json()
        this.setState({
            url: jsonified.message
        })
        .catch(function (err){
            console.log('something done dog went wrong')
        })
        console.log('dog succesfully fetched haha')
    }

    render () {
        return(
            <div>
                <button onClick={this.fetchDog}>See another dog</button>
                <p>The Dog is Here</p>
                <img src= {this.state.url}></img>
            </div>
        )
    }
}
