import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Heading from '@components/Heading'
import Container from '@layout/Container'

class PageNotFoundPage extends Component {
  render () {
    return (
      <Container>
        <Heading level={1}>That page has not been found 😱</Heading>
        <Link to='/'>Click here to go home</Link>
      </Container>
    )
  }
}

export default PageNotFoundPage
