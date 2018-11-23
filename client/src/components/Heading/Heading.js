import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Heading.scss'

class Heading extends Component {
  static propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
  }

  render () {
    const TagLevel = `h${this.props.level}`
    return (
      <TagLevel styleName='heading' style={this.props.style}>
        {this.props.children}
      </TagLevel>
    )
  }
}

export default Heading
