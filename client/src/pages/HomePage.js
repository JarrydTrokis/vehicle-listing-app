import React, { Component } from 'react'
import Heading from '@components/Heading'
import Container from '@layout/Container'

class HomePage extends Component {
  render () {
    return (
      <Container>
        <Heading level={1}>Home page</Heading>
      </Container>
    )
  }
}

export default HomePage
