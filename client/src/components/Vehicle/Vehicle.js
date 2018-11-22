import React from 'react'

const Vehicle = (props) => {
  return (
    <div>
      {`Hello there {${props.autotraderDescription}}`}
    </div>
  )
}

export default Vehicle
