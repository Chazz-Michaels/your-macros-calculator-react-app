import React from 'react'
import PropTypes from 'prop-types'

class YourAgeInput extends React.Component {

  handleAgeInput = (e) => {
    let value = Math.floor(e.target.value);
    if (isNaN(value)) {
      console.log('Error: Your age is not a number');
    } else {
      this.props.onHandleAgeInput(value);
    }
  }

  render () {
    return (
      <div id='your-age-input' className='input-group'>
        <div className='input-header'>Enter Your Age:</div>
        <input
          name='age'
          placeholder='Your age'
          onChange={ this.handleAgeInput }/>
      </div>
    )
  }
}

export default YourAgeInput;
