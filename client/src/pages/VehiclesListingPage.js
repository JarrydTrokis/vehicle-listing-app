import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Heading from '@components/Heading'
import Container from '@layout/Container'
import VehicleListItem from '@components/VehicleListItem';

class VehicleListingPage extends Component {
  state = {
    vehicles: []
  }

  componentDidMount () {
    fetch('http://localhost:5000/api/vehicles')
      .then(res => res.json())
      .then(vehicles => this.setState({ vehicles }))
      .then(vehicles => console.log(vehicles))
      .catch(e => console.log(e))
  }

  render () {
    return (
      <Container>
        <Heading level={1}>This is the listing page</Heading>
        <section>
          <ul>
            {this.state.vehicles.map(vehicle => (
              <li key={vehicle.id}>
                <VehicleListItem
                  imageSrc={vehicle.displayImage && vehicle.displayImage.large}
                  year={vehicle.year}
                  modelName={vehicle.vehicleCapDetails.capModelName}
                />
              </li>
            ))}
          </ul>
        </section>
      </Container>
    )
  }
}

export default VehicleListingPage
