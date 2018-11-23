import React from 'react'
import Heading from '@components/Heading'
import Container from '@layout/Container'
import { toGbp } from '@helpers/toGbp'
import './Vehicle.scss'

const Vehicle = (props) => {
  const { displayImage, vehicleCapDetails, attentionGrabber, vehiclePrice } = props
  return (
    <div>
      <header styleName='vehicle-header' style={{ backgroundImage: `url(${displayImage && displayImage.large})`}}>
        <div styleName='container'>
          <Heading level={2} style={{ color: 'var(--white)' }}>
            {vehicleCapDetails.capModelName}
          </Heading>
          {
            attentionGrabber.length > 0 
            ? <Heading level={4} style={{ color: 'var(--white)' }}>
              {`${attentionGrabber}`}
            </Heading>
            : null
          }
          <Heading level={3} style={{ color: 'var(--white)' }}>
            {toGbp(vehiclePrice.salePrice)}
            <span style={{ textDecoration: 'line-through'}}>
              {vehiclePrice.wasPrice && toGbp(vehiclePrice.wasPrice)}
            </span>
          </Heading>
        </div>
      </header>
      <section>
        <Container>
          {Object.keys(props).map(key => <p key={key}><strong>{`${key}`}</strong> {`${props[key]}`}</p>)}
        </Container>
      </section>
    </div>
  )
}

Vehicle.defaultProps = {
  vehicleCapDetails: {
    capModelName: ''
  },
  attentionGrabber: '',
  vehiclePrice: {
    salePrice: 0,
    wasPrice: 0
  }
}

export default Vehicle
