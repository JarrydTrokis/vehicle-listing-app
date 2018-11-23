import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Vehicle from '@components/Vehicle'
import { VehicleConsumer } from '@providers/VehicleProvider'

import './VehiclePage.scss'

class VehiclePage extends Component {
  render () {
    return (
      <div>
        <Link to='/vehicles' styleName='link'>Go Back to Vehicles Page</Link>
        <VehicleConsumer>
          {({ state }) => {
            const currentVehicle = state.vehicles.find(v => v.id.toString() === this.props.match.params.vehicleId)
            return <Vehicle {...currentVehicle} />
          }}
        </VehicleConsumer>
      </div>
    )
  }
}

export default VehiclePage
