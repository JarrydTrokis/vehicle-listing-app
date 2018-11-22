import React, { Component } from 'react'

const VehicleContext = React.createContext()
class VehicleProvider extends Component {
  state = {
    vehicles: []
  }
  
  componentDidMount () {
    fetch('http://localhost:5000/api/vehicles')
    .then(res => res.json())
    .then(vehicles => this.setState({ vehicles }))
    .catch(e => console.log(e))
  }
  
  render () {
    return (
      <VehicleContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </VehicleContext.Provider>
      )
    }
  }
  
export const VehicleConsumer = VehicleContext.Consumer
export default VehicleProvider