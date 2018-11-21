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
    fetch('http://localhost:5000/api/vehicles')
      .then(res => res.json())
      .then(vehicles => this.setState({ vehicles }))
      .catch(e => console.log(e))
  }

  render () {
    return (
      <Container>
        <Heading level={1}>This is the listing page</Heading>
        {this.state.vehicles.map(vehicle => (
          <p key={vehicle.id}>{vehicle.vehicleCapDetails.capModelName}</p>
        ))}
      </Container>
    )
  }
}

export default VehicleListingPage
