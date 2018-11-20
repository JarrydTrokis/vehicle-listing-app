import React, { Component } from 'react'

class VehiclePage extends Component {
  render () {
    const { match } = this.props
    return (
      <div>
        <h1>This is vehicle page</h1>
        <h2>Vehicle ID is: {`${match.params.vehicleId}`}</h2>
      </div>
    )
  }
}

export default VehiclePage
