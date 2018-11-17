import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AboutPage extends Component {
  render () {
    return (
      <div>
        <h1>This is listing page</h1>
        <Link to='/:vehicleId'>Go to vehicle</Link>
      </div>
    )
  }
}

export default AboutPage
