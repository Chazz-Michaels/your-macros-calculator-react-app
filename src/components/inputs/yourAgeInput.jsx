import React from 'react'
import PropTypes from 'prop-types'

class YourAgeInput extends React.Component {
  render () {
    return (
      <div id='your-age-input' className='input-group'>
        <div className='input-header'>Enter Your Age:</div>
        <input name='age' placeholder='Your age' />
      </div>
    )
  }
}

export default YourAgeInput;
