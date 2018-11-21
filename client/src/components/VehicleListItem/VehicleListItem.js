import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Heading from '@components/Heading'
import './VehicleListItem.scss'

class VehicleListItem extends Component {
  render () {
    const { id, imageSrc, modelName, description, year } = this.props
    return (
      <Link styleName='vehicle-list-item' to={`/vehicles/${id}`}>
        <img
          styleName='media-figure'
          src={imageSrc}
          alt={modelName}
          onError={e => {
            e.target.onerror = null
            e.target.src = '//images.carshop.co.uk/no_image/no_image_L.jpg'
          }}
        />
        <div styleName='media'>
          <Heading level={3}>{`${year} ${modelName}`}</Heading>
          <p>
            {
              description.length > 0
              ? description
              : `This vehicle needs no description - it's simply a must see!`
            }
          </p>
        </div>
      </Link>
    )
  }
}

VehicleListItem.defaultProps = {
  vehicleDescription: 'A used vehicle for sale',
  defaultImage: '//images.carshop.co.uk/no_image/no_image_L.jpg'
}

export default VehicleListItem
