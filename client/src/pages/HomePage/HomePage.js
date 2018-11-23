import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Heading from '@components/Heading'
import Container from '@layout/Container'

import './HomePage.scss'

class HomePage extends Component {
  render () {
    return (
      <Container>
        <Heading level={1}>Home page</Heading>
        <div styleName='inner-container'>
          <p>Thank you so much for viewing my vehicle app. 👍🏼</p>
          <br />
          <p>
            I trust that you will find the functionality of this application intuitive and delightful. 
            This application has used many methods and strategies outlined in the React community 📚. From 
            render props to Context API 👁‍🗨 - I have tried to showcase a broad range of skills.
          </p>
          <Link to='/vehicles' styleName='link'>This is a link to the vehicles page</Link>
        </div>
      </Container>
    )
  }
}

export default HomePage
