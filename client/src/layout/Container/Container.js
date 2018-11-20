import React from 'react'
import './Container.scss'

const Container = props => (
  <div styleName='container'>
    {props.children}
  </div>
)

export default Container
