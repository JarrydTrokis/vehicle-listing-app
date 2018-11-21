import React from 'react'
import Heading from '@components/Heading'
import './VehicleListItem.scss'

const defaultImage = '//images.carshop.co.uk/no_image/no_image_L.jpg'

const VehicleListItem = ({ imageSrc = defaultImage, year, modelName }) => (
    <article styleName='vehicle-list-item'>
        <img src={imageSrc} alt={modelName}/>
        <div styleName='media'>
            <Heading level={3}>{`${year} ${modelName}`}</Heading>
        </div>
    </article>
)

VehicleListItem.defaultProps = {
    vehicleDescription: 'A used vehicle for sale'
}
 
export default VehicleListItem
