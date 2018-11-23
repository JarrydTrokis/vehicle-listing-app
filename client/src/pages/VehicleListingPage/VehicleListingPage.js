import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Heading from '@components/Heading'
import Container from '@layout/Container'
import VehicleListItem from '@components/VehicleListItem'
import FilterSelector from '@components/FilterSelector'
import { VehicleConsumer } from '@providers/VehicleProvider'

import './VehicleListingPage.scss'

const filterOptions = [
  { name: 'Select', value: 0 },
  { name: '1000', value: 1000 },
  { name: '2000', value: 2000 },
  { name: '3000', value: 3000 },
  { name: '4000', value: 4000 },
  { name: '5000', value: 5000 },
  { name: '6000', value: 6000 },
  { name: '7000', value: 7000 },
  { name: '8000', value: 8000 },
  { name: '9000', value: 9000 },
  { name: '10000', value: 10000 },
  { name: '15000', value: 15000 }
]

class VehicleListingPage extends Component {
  state = {
    textFilter: '',
    lowPrice: 0,
    highPrice: 100000
  }

  selectVehicles = state => state.vehicles.filter(
    vehicle => {
      const matchesText = vehicle.autotraderDescription.toLowerCase().includes(this.state.textFilter)
      const lowPriceMatch = vehicle.vehiclePrice.salePrice > this.state.lowPrice
      const highPriceMatch = vehicle.vehiclePrice.salePrice < this.state.highPrice
      return lowPriceMatch && highPriceMatch && matchesText
    }
  )

  handleLowPriceChange = e => {
    this.setState({ lowPrice: e.target.value })
  }
  
  handleHighPriceChange = e => {
    this.setState({ highPrice: e.target.value })
  }

  render () {
    return (
      <Container>
        <Heading level={1}>This is the listing page</Heading>
        <Link to='/'>Go back to home page</Link>
        <section>
          <div styleName='inner-container'>
            <label>
              Search description:
              <input type='text' onChange={e => this.setState({ textFilter: e.target.value })} />
            </label>
            <br />
            <label>
              Select low price
              <FilterSelector
                changeFilter={this.handleLowPriceChange}
                options={filterOptions}
              />
            </label>
            <br />
            <label>
              Select high price
              <FilterSelector
                changeFilter={this.handleHighPriceChange}
                options={filterOptions}
              />
            </label>
          </div>
          <ul>
            <VehicleConsumer>
              {({ state }) => {
                return (
                  this.selectVehicles(state).map(vehicle => (
                    <li key={vehicle.id}>
                      <VehicleListItem
                        imageSrc={vehicle.displayImage && vehicle.displayImage.small}
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
