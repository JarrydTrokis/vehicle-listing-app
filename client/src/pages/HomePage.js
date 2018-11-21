import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Heading from '@components/Heading'
import Container from '@layout/Container'

class HomePage extends Component {
  render () {
    return (
      <Container>
        <Heading level={1}>Home page</Heading>
        <Link to='/vehicles'>This is a link to the vehicles page</Link>
      </Container>
    )
  }
}

export default HomePage
