import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Heading from '@components/Heading'
import Container from '@layout/Container'

class VehicleListingPage extends Component {
  constructor () {
    super ()
    this.state = {
      vehicles: []
    }
  }

  componentDidMount () {
    fetch('/api/vehicles')
      .then(res => res.json())
      .then(this.setState(res => ({ vehicles: res })))
      .catch(e => console.log(e))
  }

  render () {
    return (
      <Container>
        <Heading level={1}>This is listing page</Heading>
        {this.state.vehicles.map(vehicle => <p>{vehicle.id}</p>)}
      </Container>
    )
  }
}

export default VehicleListingPage
