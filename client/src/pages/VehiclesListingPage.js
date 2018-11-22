import React, { Component } from 'react'
import Heading from '@components/Heading'
import Container from '@layout/Container'
import VehicleListItem from '@components/VehicleListItem'
import { VehicleConsumer } from '../providers/VehicleProvider'

class VehicleListingPage extends Component {
  render () {
    return (
      <Container>
        <Heading level={1}>This is the listing page</Heading>
        <section>
          <ul>
            <VehicleConsumer>
              {({ state }) => {
                return (
                  state.vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                      <VehicleListItem
                        imageSrc={vehicle.displayImage && vehicle.displayImage.large}
                        modelName={vehicle.vehicleCapDetails.capModelName}
                        {...vehicle}
                      />
                    </li>
                  ))
                )
              }}
            </VehicleConsumer>
          </ul>
        </section>
      </Container>
    )
  }
}

export default VehicleListingPage
