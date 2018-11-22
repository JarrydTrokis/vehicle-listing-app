import React, { Component } from 'react'
import Vehicle from '@components/Vehicle'
import { VehicleConsumer } from '../providers/VehicleProvider'

class VehiclePage extends Component {
  render () {
    return (
      <VehicleConsumer>
        {({ state }) => {
          const currentVehicle = state.vehicles.find(v => v.id.toString() === this.props.match.params.vehicleId)
          return <Vehicle {...currentVehicle} />
        }}
      </VehicleConsumer>
    )
  }
}

export default VehiclePage
