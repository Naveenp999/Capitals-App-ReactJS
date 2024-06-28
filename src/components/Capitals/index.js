import './index.css'

import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {text: 'NEW_DELHI'}

  getcountrydetails = () => {
    const {text} = this.state
    const p = countryAndCapitalsList.filter(element => element.id === text)
    return p[0].country
  }

  makechanges = event => this.setState({text: event.target.value})

  render() {
    const {text} = this.state
    const country = this.getcountrydetails()
    console.log(country)
    return (
      <form className="container">
        <div className="sub-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
          <select
            id="option-container"
            className="options-container"
            onChange={this.makechanges}
          >
            {countryAndCapitalsList.map(element => (
              <option value={element.id} key={element.id}>
                {element.capitalDisplayText}
              </option>
            ))}
          </select>
          <label className="question">is Capital of which country?</label>
          </div>
          <p className="description">{country}</p>
        </div>
      </form>
    )
  }
}

export default Capitals
