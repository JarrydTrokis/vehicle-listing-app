import React, { Component } from 'react'

class FilterSelector extends Component {
  render() {
    return (
      <select onChange={e => this.props.changeFilter(e)}>
        {this.props.options.map(opt => <option key={opt.name} value={opt.value}>{opt.name}</option>)}
      </select>
    )
  }
}
 
export default FilterSelector