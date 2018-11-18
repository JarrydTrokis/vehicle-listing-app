import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Heading.scss'

class Heading extends Component {
  render () {
    const TagLevel = `h${this.props.level}`
    return (
      <TagLevel styleName='heading'>
        {this.props.children}
      </TagLevel>
    )
  }
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}

export default Heading
